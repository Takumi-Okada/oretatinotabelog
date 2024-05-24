import RestaurantRow from "./components/top/RestaurantRow";
import CreateRestaurantButton from "./components/top/CreateRestaurantButton";
import { Restaurant, User } from "./types/types";

export default async function Home() {

  const restaurantsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`, {
      cache: "no-cache"
  });
  const restaurants = await restaurantsResponse.json() as Restaurant[];
  
  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-cache"
  });
  const users = await usersResponse.json() as User[];
  
  const evaluationsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/evaluations/avg`, {
    cache: "no-cache"
  });
  const evaluations = await evaluationsResponse.json();

  const totalEvaluations = evaluations.reduce((totalEva: any, eva: any) => {
    const itemNum = 4;
    const totalAve = (eva._avg.cost + eva._avg.taste + eva._avg.service + eva._avg.atmosphere) / itemNum;
    totalEva[eva.restaurantId] = Math.floor( totalAve * 10 ) / 10;
    return totalEva;
  }, {} as Record<string, number>);

  const restaurantsWithEvaluation = restaurants.map((restaurant: Restaurant) => {
    const returnValue = {
      'id': restaurant.id,
      'name': restaurant.name,
      'totalEvaluation': totalEvaluations[restaurant.id] || 0
    }
    return returnValue
  })

  restaurantsWithEvaluation.sort((a, b) => b.totalEvaluation - a.totalEvaluation);

  return (
    <main className="min-h-screen w-11/12 mx-auto">
      <div className="w-full flex border-2 border-orange-500 h-14 font-bold rounded-3xl overflow-hidden">
        <div className="w-1/2 flex justify-center items-center border-r-2 border-orange-500 bg-orange-500">
          店
        </div>
        <div className="w-1/2 flex justify-center items-center">
          ユーザー
        </div>
      </div>
      <div className="pt-12">
        {restaurantsWithEvaluation.map((restaurant: any, i: number) => (
          <RestaurantRow key={restaurant.id} id={restaurant.id} rank={i+1} name={restaurant.name} evaluation={restaurant.totalEvaluation} />
        ))}
      </div>
      
      <CreateRestaurantButton users={users} />
    </main>
  );
}
