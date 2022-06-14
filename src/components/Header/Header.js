import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex h-12 px-5 bg-white items-center justify-between">
        <div className="bg-white flex justify-center items-center my-auto">
          <a href='/'>
            <img
              className="h-8 cursor-pointer"
              alt="logo-reddit"
              src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/reddit-logo-inkythuatso-3-01-30-10-44-46.jpg"
            ></img>
          </a>
        </div>
        {/* search */}
        <div className="w-1/2 hover:border-blue-700 max-w-screen-sm flex items-center border border-gray-200 bg-gray-100 rounded py-1 px-4">
          <i className="text-2xl -rotate-90 las la-search text-gray-500 mr-2"></i>
          <div className=" flex bg-gray-300 rounded-xl px-1 py-1 text-xs mr-1">
            <img
              className="h-4 rounded-full mr-1"
              alt="small-avt"
              src="https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&s=7cf7106da701c2fe71cf4917f429ccf16d84066a"
            ></img>
            r/DotA2
          </div>
          <input
            className="focus-within:outline-none w-3/4 bg-transparent text-xs "
            placeholder="Search Reddit"
          ></input>
        </div>
        <div className="flex">
          <div className="h-8 w-8 flex items-center mr-2 rounded-full hover:bg-gray-300 bg-gray-200">
            <i className="las la-bell m-auto"></i>
          </div>
          <div className="cursor-pointer hover:bg-gray-50 px-4  h-8 text-sm font-bold text-blue-700 border border-blue-700 rounded-2xl flex items-center justify-center">
            Log in
          </div>
          <div className="cursor-pointer hover:bg-blue-500 ml-1 px-4 h-8 text-sm text-white font-bold bg-blue-700 rounded-2xl flex items-center justify-center">
            Sign up
          </div>
          <div className="cursor-pointer ml-2 text-gray-500 text-2xl flex w-12 justify-center items-center hover:border-gray-300 hover:border rounded">
            <i className="las la-user"></i>
            <i className="las la-angle-down text-base"></i>
          </div>
        </div>
      </div>
      {/* bg-cover */}
      <div
        className="h-52 w-full bg-cover relative"
        style={{
          backgroundImage:
            "url(" +
            "https://styles.redditmedia.com/t5_2s580/styles/bannerBackgroundImage_ib65tlpqt9c81.png?width=4000&s=743909a86e9584e57417f5820e68d0533235140a" +
            ")",
        }}
      >
        <div
          className="h-44 bg-no-repeat w-full absolute top-7"
          style={{
            backgroundImage:
              "url(" +
              "https://styles.redditmedia.com/t5_2s580/styles/bannerPositionedImage_98gge688vp251.png" +
              ")",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
