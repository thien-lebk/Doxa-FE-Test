import React, { useEffect, useState } from "react";
import classNames from "classnames";

const CategoryHeader = () => {
  return (
    <div className="bg-white  w-full ">
      <div style={{
        backgroundImage:
         "url(" +   "https://styles.redditmedia.com/t5_2s580/styles/bannerBackgroundImage_ib65tlpqt9c81.png?width=4000&s=743909a86e9584e57417f5820e68d0533235140a" + ")")}}>

      </div>
      <div className="max-w-screen-sm mx-auto">
        <div className="flex py-2">
          <div
            className="h-20 w-20 bg-cover rounded-full"
            style={{
              backgroundImage:
                "url(" +
                "https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&s=7cf7106da701c2fe71cf4917f429ccf16d84066a" +
                ")",
            }}
          ></div>
          <div className="text-start pl-4">
            <div className="text-2xl font-bold">Dota 2 on Reddit </div>
            <div className="text-sm text-gray-500">r/Dota2</div>
          </div>
          <div className="cursor-pointer ml-8 h-8 flex items-center text-sm font-bold px-8 py-2 text-white bg-cyan-600 rounded-xl">
            Join
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div className="p-1 border-b-4 border-cyan-600">Posts</div>
        <div className="p-1">Predictions</div>
        <div className="p-1">New to Dota 2</div>
        <div className="p-1">Read the FAQ</div>
        <div className="p-1">Subreddit Rules</div>
        <div className="p-1">TI10 Survival Guide</div>
      </div>
    </div>
  );
};

export default CategoryHeader;
