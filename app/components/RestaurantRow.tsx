// "use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type RestaurantRowProps = {
  id: string;
  rank: number;
  name: string;
  evaluation: number;
}


const RestaurantRow = ({ id, rank, name, evaluation }: RestaurantRowProps) => {
  return (
    <Link href={`/restaurant/${id}`} className="w-full flex border-b-2 border-orange-500 pb-2 pt-4">
      <div className="w-2/12">{rank}位</div>
      <div className="w-8/12">{name}</div>
      <div className="w-2/12 flex">
        <FontAwesomeIcon icon={faStar} className="h-[20px] mr-1" color="#fe9611"/>
        {evaluation}
      </div>
    </Link>
  );
};

export default RestaurantRow;