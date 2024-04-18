"use client";
import React, { useState } from "react";
import { createRestaurant } from "../actions/restaurant";
import { RestaurantFormData } from "../types/types";


const CreateRestaurantButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoadig, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: "",
    url: "",
  })


  const openModal = () => {
    setFormData({name: "", url: ""});
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleChangeInput = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [key] : e.target.value});
  };
  
  const  handleClick = async () => {
    setIsLoading(true);
    await createRestaurant(formData);
    setIsLoading(false);
    setShowModal(false);
  }

  const validate = () => {
    return !!formData.name && !!formData.url;
  }
  const isValid: boolean = validate()

  return (
    <>
      {showModal ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-90 flex justify-center items-center modal">
          <div className="bg-white p-4 w-11/12 rounded-lg h-72">

            {isLoadig ? (
              <div className="flex justify-center items-center h-full w-full">
                <div className="h-16 w-16 animate-spin border-[5px] border-orange-500 rounded-full  border-t-transparent"></div>
              </div>
            ) : (
              <div>
                <div className="mb-10">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      店名
                    </label>
                    <input onChange={handleChangeInput('name')} value={formData.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="店名" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      店舗URL
                    </label>
                    <input onChange={handleChangeInput('url')} value={formData.url} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="店舗URL" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button onClick={handleClick} className={"text-white font-bold py-2 px-4 rounded mr-4 " + (isValid ? 'bg-orange-500' : 'bg-gray-500')} disabled={!isValid} >
                    登録する
                  </button>
                  <button onClick={closeModal} className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    キャンセル
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button onClick={openModal} className="bg-slate-950 text-white font-bold py-4 px-4 rounded mr-4 fixed bottom-10 left-1/2 transform -translate-x-1/2">店登録！！</button>
      )}
    </>
  );
};

export default CreateRestaurantButton;