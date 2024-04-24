"use server";

import prisma from "../lib/prisma";


export const getUsers = async () => {
    "use server";
    const res = await prisma.user.findMany();
    return res;
};

export const getUser = async (id: string) => {
    "use server";

    const user = await prisma.user.findUnique({
        where: {
        id: id,
        },
    });

    return user;
};
