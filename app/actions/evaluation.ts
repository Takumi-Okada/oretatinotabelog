"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { EvaluationFormData } from "../types/types";


export const createEvaluation = async (formData: EvaluationFormData) => {
    "use server";
  
    const user = await prisma.user.findUnique({
      where: {
        id: formData.userId,
      },
    });


    const restaurant = await prisma.restaurant.findUnique({
        where: {
          id: formData.restaurantId,
        },
      });
  
    if (!user || !restaurant) {
      console.error('指定されたユーザーID、レストランIDが見つかりません');
      return;
    }
  
    const res = await prisma.evaluation.create({
      data: {
        userId: user.id,
        restaurantId: restaurant.id,
        cost: formData.cost,
        taste: formData.taste,
        service: formData.service,
        atmosphere: formData.atmosphere
      },
    });
    
    revalidatePath(`/restaurant/${restaurant.id}`);
    return res;
};