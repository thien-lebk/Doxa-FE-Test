import React from "react";

const Post = () => {
  return (
    <div className="flex hover:border-black  bg-white border-gray-300 border border-solid rounded ">
      <div className="w-9 text-xs bg-gray-50 py-1 font-bold">
        <i class="text-base las la-chevron-up hover:bg-gray-300 hover:text-red-700 cursor-pointer"></i>
        241
        <i class="text-base las la-chevron-down hover:bg-gray-300 hover:text-blue-700 cursor-pointer"></i>
      </div>
      <div className="text-start py-1 ml-1">
        <div className="text-sxs text-gray-500 uppercase font-bold">
          <div className="flex">
            <i class="las la-thumbtack text-green-400 font-bold text-2xl"></i>
            <p className="mt-1">pinned by
            moderators</p>
          </div>
        </div>
        <div className="text-xs mt-2 text-gray-500">
          <p>
            Posted by
            <span className="ml-1 mr-1 bg-gray-100 text-black"> please send modmail regarding issues</span>
            <span>u/patchdayDota2</span>  
            <span> 2 days ago</span>
          </p>
        </div>
        <div className="flex mt-2 font-bold text-base">
          Patch 7.31d - Hero Changes Discussion
          <div className=" flex items-center">
            <span className="ml-1 py-0 text-xs bg-gray-100 rounded px-2">Discussion</span>
          </div>
        </div>
        <div className="flex mt-2 text-gray-500 font-bold">
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-comment text-2xl mr-1 "></i> 206 Comments
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-share text-2xl mr-1 "></i> Share
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-bookmark text-2xl mr-1 "></i> Save
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
          <i class="las la-ellipsis-h text-2xl "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
