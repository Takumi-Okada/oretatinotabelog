import RestaurantRow from "./components/top/RestaurantRow";
import CreateRestaurantButton from "./components/top/CreateRestaurantButton";
import { Restaurant, User } from "./types/types";
import { getUsers } from "./actions/user";
import { getRestaurants } from "./actions/restaurant";

export default async function Home() {
  const restaurants: any = await getRestaurants();
  const users: any = await getUsers();

  const restaurantsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`);
  // const restaurants = await restaurantsResponse.json() as Restaurant[];
  
  const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  // const users = await usersResponse.json() as User[];
  console.log(process.env.NEXT_PUBLIC_API_URL);
  console.log(restaurantsResponse);
  console.log(usersResponse);

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
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantRow key={restaurant.id} id={restaurant.id} rank={1} name={restaurant.name} evaluation={3.5} />
        ))}
      </div>
      <CreateRestaurantButton users={users} />
    </main>
  );
}
