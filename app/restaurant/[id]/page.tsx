import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantDetail = async () => {
    return (
        <div className="w-11/12 mx-auto my-5">
            <h1 className="text-2xl text-center pb-2">
                マクドナルド<br></br>
                <span className="text-lg text-slate-400">ジャンル</span>
            </h1>
            <button className="w-11/12 mx-auto block bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3" >
                お店を開く
            </button>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
                <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">プレゼンター</h2>
                <div className="flex flex-col items-center">
                    <Image
                        className="mb-3 rounded-full shadow-lg"            
                        width={100}
                        height={100}
                        src="https://doodleipsum.com/300x300/avatar?bg=lightgray&n=11&i=6482e1a188a6f2e7c38d1032c8414c94"
                        alt="Bonnie image"
                    />
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">岡田</h5>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
                <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">総合評価</h2>
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faStar} className="h-[30px] mr-1" color="#fe9611"/>
                    <span className="text-4xl">2.7</span>
                </div>
                <div className="flex flex-wrap mt-8 text-center w-3/4 mx-auto">
                    <div className="w-1/2 mb-3">
                        コスパ：2.5
                    </div>
                    <div className="w-1/2 mb-3">
                        味：2.5
                    </div>
                    <div className="w-1/2">
                        雰囲気：2.5
                    </div>
                    <div className="w-1/2">
                        接客：2.5
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 pb-10">
                <h2 className="pt-10 pb-2 mb-5 text-center w-11/12 mx-auto border-b-2 border-orange-500">ユーザー毎の評価</h2>
                <div className="flex justify-center items-center">
                    <span className="text-xl mr-5">岡田</span>
                    <FontAwesomeIcon icon={faStar} className="h-[20px] mr-1" color="#fe9611"/>
                    <span className="text-xl">2.7</span>
                </div>
                <div className="flex flex-wrap mt-5 text-center w-3/4 mx-auto">
                    <div className="w-1/2 mb-3">
                        コスパ：2.5
                    </div>
                    <div className="w-1/2 mb-3">
                        味：2.5
                    </div>
                    <div className="w-1/2">
                        雰囲気：2.5
                    </div>
                    <div className="w-1/2">
                        接客：2.5
                    </div>
                </div>
                <hr className="w-11/12 mx-auto my-8"></hr>
                <div className="flex justify-center items-center">
                    <span className="text-xl mr-5">岡田</span>
                    <FontAwesomeIcon icon={faStar} className="h-[20px] mr-1" color="#fe9611"/>
                    <span className="text-xl">2.7</span>
                </div>
                <div className="flex flex-wrap mt-5 text-center w-3/4 mx-auto">
                    <div className="w-1/2 mb-3">
                        コスパ：2.5
                    </div>
                    <div className="w-1/2 mb-3">
                        味：2.5
                    </div>
                    <div className="w-1/2">
                        雰囲気：2.5
                    </div>
                    <div className="w-1/2">
                        接客：2.5
                    </div>
                </div>
                <button className="w-11/12 mx-auto block bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-10" >
                    評価を登録
                </button>
            </div>
        </div>
    );
};

export default RestaurantDetail;