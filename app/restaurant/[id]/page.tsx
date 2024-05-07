import React from "react";
import Image from "next/image";
import { Restaurant, User } from "@/app/types/types";
import RestaurantEvaluation from "@/app/components/restaurant/RestaurantEvaluation";

const RestaurantDetail = async ({ params }: { params: { id: string }}) => {
    const restaurantResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${params.id}`);
    const restaurant = await restaurantResponse.json() as Restaurant;

    const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const users = await usersResponse.json() as User[];

    return (
        <div className="w-11/12 mx-auto my-5">
            <h1 className="text-2xl text-center pb-2">
                {restaurant.name}<br></br>
                <span className="text-lg text-slate-400">{restaurant.genre}</span>
            </h1>
            <a className="w-11/12 mx-auto block text-center bg-orange-500 text-white font-bold py-2 px-4 rounded mt-3" href={restaurant.url} target="_blank">
                お店を開く
            </a>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
                <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">プレゼンター</h2>
                <div className="flex flex-col items-center">
                    <Image
                        className="mb-3 rounded-full shadow-lg"            
                        width={100}
                        height={100}
                        src={restaurant.user.thumbnail}
                        alt="Bonnie image"
                    />
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{restaurant.user.name}</h5>
                </div>
            </div>
            <RestaurantEvaluation restaurant={restaurant} users={users} />
        </div>
    );
};

export default RestaurantDetail;