"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Evaluation } from "@/app/types/types";


type Props = {
  evaluations: Evaluation[];
}


const Evaluations = ({ evaluations }: Props) => {

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
        <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">ユーザー毎の評価</h2>
        {evaluations.map((evaluation: Evaluation) => (
          <div key={evaluation.id}>
            <div>
              <div className="flex justify-center items-center">
                  <span className="text-xl mr-5">{evaluation.user.name}</span>
                  <FontAwesomeIcon icon={faStar} className="h-[20px] mr-1" color="#fe9611"/>
                  <span className="text-xl">{Math.floor( ((evaluation.cost + evaluation.taste + evaluation.atmosphere + evaluation.service) / 4) * 10 ) / 10}</span>
              </div>
              <div className="flex flex-wrap mt-5 text-center w-3/4 mx-auto">
                  <div className="w-1/2 mb-3">
                      コスパ：{evaluation.cost}
                  </div>
                  <div className="w-1/2 mb-3">
                      味：{evaluation.taste}
                  </div>
                  <div className="w-1/2">
                      雰囲気：{evaluation.atmosphere}
                  </div>
                  <div className="w-1/2">
                      接客：{evaluation.service}
                  </div>
              </div>
            </div>
          <hr className="w-11/12 mx-auto my-8"></hr>
          </div>
        ))}
    </div>
  );
};

export default Evaluations;