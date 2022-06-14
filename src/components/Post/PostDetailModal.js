import React, { useState } from "react";
import { usePostList } from "../../routes/Home";
import TopicService from "../../services/post"
const PostDetail = ({
    keyEle = "",
}) => {
    const [isExpand, setIsExpand] = useState(false)
    const res = usePostList();
    const data = !!res.listPost ? res?.listPost[keyEle] : TopicService.getById(keyEle);
    const [voteNumber, setVoteNumber] = useState(0);

    const convertToText = (value) => {
        switch (value.e) {
            case 'text':
                return <p className={!!value.f ? 'font-bold' : ''}>{value.t}</p>
            case 'li':
                return <li>{value.c ? value.c.map(ele => {
                    return ele.c.map(ele2 => convertToText(ele2))

                }) : ''}</li>
            case 'link':
                return <a href={value.u}>{value.t}</a>
            default:

                break;
        }
    }

    const renderContent = (value = []) => value.map((ele) => {
        switch (ele.e) {
            case 'par':
                return ele.c.map(ele2 => convertToText(ele2)
                )
            case 'list':
                return <ul> {ele.c.map(ele2 => convertToText(ele2)
                )
                } </ul>
            default:
                break;
        }
        return;

    });
    ;

    return (
        <div key={keyEle} className="flex   bg-white border-gray-300 border border-solid rounded ">
            <div className="text-center w-9 text-xs bg-gray-50 py-1 font-bold rounded">
                <i className="text-base las la-chevron-up hover:bg-gray-300 hover:text-red-700 cursor-pointer"></i>
                241
                <i className="text-base las la-chevron-down hover:bg-gray-300 hover:text-blue-700 cursor-pointer"></i>
            </div>
            <div className="text-start py-1 ml-1">
                <div className="mt-2 text-base">
                    <p className="cursor-pointer" >
                        {data.title}
                        <span className="ml-1 py-0 text-xs bg-gray-100 rounded-xl px-2">
                            {data.topicType}
                        </span>
                        <i className="las la-thumbtack text-green-400"></i>

                    </p>
                </div>
                <div className="text-xs text-gray-500">
                    <p className="flex cursor-pointer">
                        Posted by
                        <span className="ml-1 mr-1 bg-gray-100 text-black flex pl-1">
                        </span>
                        <span>u/{data.author}</span>
                        {/* <span> 2 days ago</span> */}
                    </p>
                </div>
                <div className="content-post">
                    {/* <img alt="img-content" src={data.media.content}></img> */}
                    {renderContent(data.media.richtextContent.document)}
                </div>
                <div className="flex mt-2 text-gray-500 font-bold">
                    <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-1 flex justify-center items-center" onClick={() => setIsExpand(!isExpand)}>
                        {
                            !isExpand ? <i className="las la-expand-arrows-alt text-2xl" ></i> :
                                <i className="las la-compress-arrows-alt  text-2xl"></i>
                        }
                    </div>
                    <div className=" p-1  text-xs mr-4 flex justify-center items-center text-gray-300">
                        |
                    </div>
                    <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
                        <i className="las la-comment text-2xl mr-1 "></i> {data.numComments}{" "}
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
        </div>
    );
};

export default PostDetail;
