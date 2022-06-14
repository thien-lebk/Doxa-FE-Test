import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopicService from "../services/post"
const Detail = () => {
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const idTopic = urlSearch.get('id');
  const [content, setContent] = useState('')
  const [data, setData] = useState()
  const intFunc = async () => {
    if (idTopic) {
      const res = await TopicService.getById(idTopic);
      setData(res)
      setContent(res.media.content)
    }
  }
  useEffect(() => {
    if (idTopic) {
      intFunc()
    }
  }, [idTopic])
  return <div className="justify-center flex mt-4 max-w-screen-sm mx-auto">
    {data ? <div key={'content'} className="flex   bg-white border-gray-300 border border-solid rounded ">
      <div className="text-center w-8 text-xs bg-gray-50 py-1 font-bold rounded">
        <i className="text-base las la-chevron-up hover:bg-gray-300 hover:text-red-700 cursor-pointer"></i>
        {data?.score}
        <i className="text-base las la-chevron-down hover:bg-gray-300 hover:text-blue-700 cursor-pointer"></i>
      </div>
      <div className="text-start py-1 ml-1">
        <div className="mt-2 text-base">
          <p className="cursor-pointer" >
            {data?.title}
            <span className="ml-1 py-0 text-xs bg-gray-100 rounded-xl px-2">
              {data?.topicType}
            </span>
            <i className="las la-thumbtack text-green-400"></i>

          </p>
        </div>
        <div className="text-xs text-gray-500">
          <p className="flex cursor-pointer">
            Posted by
            <span className="ml-1 mr-1 bg-gray-100 text-black flex pl-1">
            </span>
            <span>u/{data?.author}</span>
            {/* <span> 2 days ago</span> */}
          </p>
        </div>
        <div className="content-post">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>;
        </div>
        <div className="flex mt-2 text-gray-500 font-bold">
          <div className="rounded p-1 hover:bg-gray-300 cursor-pointer text-xs mr-4 flex justify-center items-center">
            <i className="las la-comment text-2xl mr-1 "></i> {data?.numComments}{" "}
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
    </div> : <></>}

  </div>
};

export default Detail;
