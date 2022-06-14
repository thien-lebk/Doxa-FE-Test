import React, { useState, useEffect } from "react";
import { Modal } from 'antd';
import PostDetail from "./PostDetailModal";
import {  useNavigate } from "react-router";

const Post = ({
  keyEle="",
  author = "",
  title = "",
  numComments = "",
  authorFlairRichtext = [],
  topicType = "",
  imgUrl = "",
  numVotes = 0,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [voteNumber, setVoteNumber] = useState(0);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setVoteNumber(numVotes)
  
  }, [])
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const convertAuthorFlairRichtext = (data = []) => {
    return data.map((ele) => {
      if (ele.e === "emoji") {
        return <img className="h-4" alt={ele.a} src={ele.u}></img>;
      } else if (ele.e === "text") {
        return <span className="ml-1">{ele.t}</span>;
      }
    });
  };

  return (
    <div key={keyEle} className="flex hover:border-black  bg-white border-gray-300 border border-solid rounded ">
      <div className="w-9 text-xs bg-gray-50 py-1 font-bold rounded">
       <i  onClick={()=>setVoteNumber(voteNumber+1)} className="text-base las la-chevron-up hover:bg-gray-300 hover:text-red-700 cursor-pointer"></i>
       <p className="mb-0"> {voteNumber}</p>
        <i onClick={()=>setVoteNumber(voteNumber-1)} className="text-base las la-chevron-down hover:bg-gray-300 hover:text-blue-700 cursor-pointer"></i>
      </div>
      <div className="text-start py-1 ml-1">
        {/* <div className="text-sxs text-gray-500 uppercase font-bold">
          <div className="flex">
            <i className="las la-thumbtack text-green-400 font-bold text-2xl"></i>
            <p className="mt-1">pinned by moderators</p>
          </div>
        </div> */}
        <div className="mt-2 text-base">
          <p className="cursor-pointer font-bold" onClick={()=> navigate("/detail" + `?id=${keyEle}`)}>
            {title}
            <span className="ml-1 py-0 text-xs bg-gray-100 rounded-xl px-2">
              {topicType}
            </span>
            <i className="las la-thumbtack text-green-400"></i>

          </p>
        </div>
        <div className="text-xs text-gray-500">
          <p className="flex cursor-pointer">
            Posted by
            {/* <span className="ml-1 mr-1 bg-gray-100 text-black flex pl-1">
              {convertAuthorFlairRichtext(authorFlairRichtext)}
            </span> */}
            <span className="ml-1">u/{author}</span>
            {/* <span> 2 days ago</span> */}
          </p>
        </div>
          <div className="content-post">

          </div>
        <div className="flex mt-2 text-gray-500 font-bold">
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-1 flex justify-center items-center"  onClick={()=>showModal()}>
              <i className="las la-expand-arrows-alt text-2xl" ></i> :
          </div>
          <div className=" p-1  text-xs mr-4 flex justify-center items-center text-gray-300">
            |
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-comment text-2xl mr-1 "></i> {numComments}{" "}
            Comments
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-share text-2xl mr-1 "></i> Share
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-bookmark text-2xl mr-1 "></i> Save
          </div>
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-ellipsis-h text-2xl "></i>
          </div>
        </div>
      </div>
      <Modal okText='' okButtonProps={{ style: { display: 'none' } }} cancelText='Close' className="!top-4" bodyStyle={{padding:0}} title="Post Detail" width={'full'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PostDetail keyEle={keyEle}></PostDetail>
      </Modal>
    </div>
  );
};

export default Post;
