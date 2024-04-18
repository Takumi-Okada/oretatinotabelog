"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { RestaurantFormData } from "../types/types";


export const getRestaurants = async () => {
    "use server";
    const res = await prisma.restaurant.findMany();
    return res;
};

export const createRestaurant = async (formData: RestaurantFormData) => {
  "use server";
  console.log(formData);
  const res = await prisma.restaurant.create({
    data: {
      name: formData.name,
      url: formData.url,
    },
  });
  revalidatePath('/');
  return res;
};