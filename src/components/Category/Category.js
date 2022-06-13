import React, { useEffect, useState } from "react";
import classNames from "classnames";

// import { useSearchParams  } from 'react-router-dom'
const Category = () => {
  // const urlSearch = new URLSearchParams(location.search);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const [filterType, setFilterType] = useState("hot");
  const [clickExpand, setClickExpand] = useState(false);
  useEffect(() => {}, [filterType, clickExpand]);
  console.log(clickExpand);
  return (
    <div className="px-4 my-4 bg-white  border-gray-300 border border-solid rounded ">
      <div className="justify-center flex py-3 ">
        <div className="flex w-full font-bold">
          <div className="hover:bg-gray-300 text-sm flex justify-center items-center cursor-pointer text-cyan-600 mr-4 bg-gray-100 py-1 px-2  rounded-xl">
            <i className="las la-fire-alt text-2xl mr-1"></i>
            Hot
          </div>
          <div className="hover:bg-gray-300 text-sm mr-4 p-1 flex justify-center items-center text-gray-500 cursor-pointer rounded-xl">
            <i className="las la-sun text-2xl mr-1"></i>
            New
          </div>
          <div className="hover:bg-gray-300 text-sm mr-4 p-1 flex justify-center items-center text-gray-500 cursor-pointer rounded-xl">
            <i className="las la-chart-bar text-2xl mr-1"></i>
            Top
          </div>
          <div
            onFocus={() => setClickExpand(true)}
            className="relative hover:bg-gray-200 text-sm p-1 flex justify-center items-center text-gray-500 cursor-pointer rounded-xl"
          >
            <i className="las la-ellipsis-h text-2xl "></i>
            <div
              className={classNames("hidden ", {
                "absolute top-8 -left-3 bg-white flex p-1 shadow rounded pr-3 pb-2":
                  clickExpand,
              })}
            >
              <i className="las la-arrow-up text-xl "></i>
              Rising
            </div>
          </div>
        </div>
        <div className="flex w-12 justify-center items-center hover:bg-gray-100 rounded-2xl px-1">
          <i className="las la-list-ul text-2xl"></i>
          <i className="las la-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Category;
