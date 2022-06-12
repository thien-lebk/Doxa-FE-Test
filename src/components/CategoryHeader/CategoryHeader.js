import React, { useEffect, useState } from "react";
import classNames from "classnames";

const CategoryHeader = () => {
  return (
    <div className="bg-white  w-full ">
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
          <div className="text-start">
            <div className="text-2xl font-bold">Dota 2 on Reddit </div>
            <div className="text-sm text-gray-500">r/Dota2</div>
          </div>
          <div className="ml-8 h-8 flex items-center text-sm font-bold px-8 py-2 text-white bg-cyan-600 rounded-xl">
            Join
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div>Posts</div>
        <div>Predictions</div>
        <div>New to Dota 2</div>
        <div>Read the FAQ</div>
        <div>Subreddit Rules</div>
        <div>TI10 Survival Guide</div>
      </div>
    </div>
  );
};

export default CategoryHeader;
