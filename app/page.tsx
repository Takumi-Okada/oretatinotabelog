import RestaurantRow from "./components/RestaurantRow";
import CreateRestaurantButton from "./components/CreateRestaurantButton";
import { getRestaurants } from "./actions/restaurant";
import { Restaurant, RestaurantFormData } from "./types/types";

export default async function Home() {
  const restaurants: any = await getRestaurants();

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
          <RestaurantRow key={restaurant.id} rank={1} name={restaurant.name} evaluation={3.5} />
        ))}
      </div>
      <CreateRestaurantButton />
    </main>
  );
}
