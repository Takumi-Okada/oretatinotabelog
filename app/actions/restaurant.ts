"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { RestaurantFormData } from "../types/types";


export const getRestaurants = async () => {
    "use server";
    const res = await prisma.restaurant.findMany();
    return res;
};


export const getRestaurant = async (id: string) => {
  "use server";
  
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      evaluations: {
        include: {
          user: true,
          restaurant: true,
        }
      }
    },
  });

  return restaurant;
};

export const createRestaurant = async (formData: RestaurantFormData) => {
  "use server";

  const user = await prisma.user.findUnique({
    where: {
      id: formData.userId,
    },
  });

  if (!user) {
    console.error('指定されたユーザーIDが見つかりません');
    return;
  }

  const res = await prisma.restaurant.create({
    data: {
      userId: user.id,
      genre: formData.genre,
      name: formData.name,
      url: formData.url,
    },
  });
  
  revalidatePath('/');
  return res;
};