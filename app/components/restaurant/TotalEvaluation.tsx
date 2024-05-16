"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Evaluation } from "@/app/types/types";


type Props = {
  evaluations: Evaluation[];
}


const TotalEvaluation = ({ evaluations }: Props) => {
  const [totalEvaluation, setTotalEvaluation] = useState({
    total: 0,
    cost: 0,
    taste: 0,
    service: 0,
    atmosphere: 0
  })

  useEffect(() => {
    const calculationTotalEvaluation = () => {
      let cost = 0;
      let taste = 0;
      let service = 0;
      let atmosphere = 0;
      for (const eva of evaluations) {
        cost += eva.cost;
        taste += eva.taste;
        service += eva.service;
        atmosphere += eva.atmosphere;
      }
      const evaluationCount = evaluations.length;
      // 評価項目の数
      const itemNum = 4
  
      const costAve = cost / evaluationCount;
      const tasteAve = taste / evaluationCount;
      const serviceAve = service / evaluationCount;
      const atmosphereAve = atmosphere / evaluationCount;
      const totalAve = (costAve + tasteAve + serviceAve + atmosphereAve) / itemNum;
      setTotalEvaluation(
        {
          total: Math.floor( totalAve * 10 ) / 10 ,
          cost: Math.floor( costAve * 10 ) / 10 ,
          taste: Math.floor( tasteAve * 10 ) / 10 ,
          service: Math.floor( serviceAve * 10 ) / 10 ,
          atmosphere: Math.floor( atmosphereAve * 10 ) / 10
        }
      )
    }

    calculationTotalEvaluation();
  }, []);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
        <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">総合評価</h2>
        <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faStar} className="h-[30px] mr-1" color="#fe9611"/>
            <span className="text-4xl">{totalEvaluation.total}</span>
        </div>
        <div className="flex flex-wrap mt-8 text-center w-3/4 mx-auto">
            <div className="w-1/2 mb-3">
                コスパ：{totalEvaluation.cost}
            </div>
            <div className="w-1/2 mb-3">
                味：{totalEvaluation.taste}
            </div>
            <div className="w-1/2">
                雰囲気：{totalEvaluation.atmosphere}
            </div>
            <div className="w-1/2">
                接客：{totalEvaluation.service}
            </div>
        </div>
    </div>
  );
};

export default TotalEvaluation;