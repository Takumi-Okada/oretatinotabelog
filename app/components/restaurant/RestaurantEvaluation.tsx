"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from '@mui/material/Slider';
import { EvaluationFormData, User, Restaurant, Evaluation } from "@/app/types/types";
import { createEvaluation } from "@/app/actions/evaluation";
import { useRouter } from "next/navigation";


type Props = {
  restaurant: Restaurant;
  users: User[];
}


const RestaurantEvaluation = ({ restaurant, users }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoadig, setIsLoading] = useState<boolean>(false);
  const [totalEvaluation, setTotalEvaluation] = useState({
    total: 0,
    cost: 0,
    taste: 0,
    service: 0,
    atmosphere: 0
  })
  const [formData, setFormData] = useState<EvaluationFormData>({
    userId: '',
    restaurantId: restaurant.id,
    cost: 3,
    taste: 3,
    service: 3,
    atmosphere: 3
  })

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];

  const openModal = () => {
    setFormData({
      userId: '',
      restaurantId: restaurant.id,
      cost: 3,
      taste: 3,
      service: 3,
      atmosphere: 3
    });
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleChangeCost = (_: Event, value: number | number[]) => {
    setEvaluation('cost', value);
  }

  const handleChangeTaste = (_: Event, value: number | number[]) => {
    setEvaluation('taste', value);
  }

  const handleChangeAtmosphere = (_: Event, value: number | number[]) => {
    setEvaluation('atmosphere', value);
  }

  const handleChangeService = (_: Event, value: number | number[]) => {
    setEvaluation('service', value);
  }

  const setEvaluation = (key: string, value: number | number[]) => {
    setFormData({...formData, [key] : value});
  }

  const setUser = (value: string) => {
    setFormData({...formData, ['userId'] : value});
  }

  const  handleClick = async () => {
    setIsLoading(true);
    await createEvaluation(formData);
    // setIsLoading(false);
    // setShowModal(false);
    router.push(`${process.env.NEXT_PUBLIC_URL}/restaurant/${restaurant.id}`);
  }

  const validate = () => {
    return !!formData.userId && !!formData.restaurantId;
  }

  const isValid: boolean = validate();

  useEffect(() => {
    const calculationTotalEvaluation = () => {
      let cost = 0;
      let taste = 0;
      let service = 0;
      let atmosphere = 0;
      for (const eva of restaurant.evaluations) {
        cost += eva.cost;
        taste += eva.taste;
        service += eva.service;
        atmosphere += eva.atmosphere;
      }
      const evaluationCount = restaurant.evaluations.length;
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
    <>
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
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
          <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">ユーザー毎の評価</h2>
          {restaurant.evaluations.map((evaluation: Evaluation) => (
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

          <button onClick={openModal} className="w-11/12 mx-auto block bg-orange-500 text-white font-bold py-2 px-4 rounded mt-10" >
              評価を登録
          </button>
          {showModal && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-90 flex justify-center items-center modal">
              <div className="bg-white p-4 w-11/12 rounded-lg h-[650px]">
              {isLoadig ? (
                <div className="flex justify-center items-center h-full w-full">
                  <div className="h-16 w-16 animate-spin border-[5px] border-orange-500 rounded-full  border-t-transparent"></div>
                </div>
              ) : (
                  <div>
                    <div className="mb-5">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        評価するユーザー
                      </label>
                      <select onChange={e => setUser(e.target.value)} value={formData.userId} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option>選択して！</option>
                        {users.map((user: User) => (
                          <option value={user.id} key={user.id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">コスパ</label>
                      <Slider
                        step={1}
                        value={formData.cost}
                        valueLabelDisplay="auto"
                        marks={marks}
                        max={5}
                        min={1}
                        onChange={handleChangeCost}
                      />
                    </div>
                    <hr className="my-2"></hr>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">味</label>
                      <Slider
                        step={1}
                        value={formData.taste}
                        valueLabelDisplay="auto"
                        marks={marks}
                        max={5}
                        min={1}
                        onChange={handleChangeTaste}
                      />
                    </div>
                    <hr className="my-2"></hr>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">雰囲気</label>
                      <Slider
                        value={formData.atmosphere}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                        max={5}
                        min={1}
                        onChange={handleChangeAtmosphere}
                      />
                    </div>
                    <hr className="my-2"></hr>
                    <div className="mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2">接客</label>
                      <Slider
                        value={formData.service}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                        max={5}
                        min={1}
                        onChange={handleChangeService}
                      />
                    </div>

                    <div className="flex justify-center">
                      <button onClick={handleClick} className={"text-white font-bold py-2 px-4 rounded mr-4 " + (isValid ? 'bg-orange-500' : 'bg-gray-500')} disabled={!isValid} >
                        登録する
                      </button>
                      <button onClick={closeModal} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                        キャンセル
                      </button>
                    </div>
                  </div>
                )}
                </div>
            </div>
          )}
      </div>
    </>
  );
};

export default RestaurantEvaluation;