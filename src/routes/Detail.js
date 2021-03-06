import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopicService from "../services/post"
const Detail = () => {
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const idTopic = urlSearch.get('id');
  const [content, setContent] = useState('')
  const [data, setData] = useState()
  const [voteNumber, setVoteNumber] = useState(0);
  const [isFetching, setIsFetching] = useState(false);


  const intFunc = async () => {
    setIsFetching(true);
    if (idTopic) {
      const res = await TopicService.getById(idTopic);
      setData(res)
      setVoteNumber(res.score)
      setContent(res.media.content)
    }
    setIsFetching(false);

  }
  useEffect(() => {
    if (idTopic) {
      intFunc()
    }
  }, [idTopic])
  return <div className="justify-center flex mt-4 max-w-screen-sm mx-auto">
     {isFetching?
      <div className="z-auto absolute -translate-y-1/2 -translate-x-1/2 left-2/4 top-3/4">
      <img src={'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340'} alt="loading"></img>
    </div>:<></>
      }
    {data ? <div key={'content'} className="flex   bg-white border-gray-300 border border-solid rounded ">
      <div className="text-center text-xs bg-gray-50 py-1 font-bold rounded">
        <i onClick={() => setVoteNumber(voteNumber + 1)} className="text-base las la-chevron-up hover:bg-gray-300 hover:text-red-700 cursor-pointer"></i>
        <div className=" w-9">
          {voteNumber}
        </div>
        <i onClick={() => setVoteNumber(voteNumber - 1)} className="text-base las la-chevron-down hover:bg-gray-300 hover:text-blue-700 cursor-pointer"></i>
      </div>
      <div className="text-start py-1 ml-1 max-w-xl">
        <div className="mt-2 text-base">
          <p className="cursor-pointer" >
            {data?.title}
            <span className="ml-1 py-1 text-xs bg-gray-100 rounded-xl px-2">
              {data.flair[0]?.richtext[0]?.t ?? ''}
            </span>
            <i className="las la-thumbtack text-green-400"></i>

          </p>
        </div>
        <div className="text-xs text-gray-500">
          <p className="flex cursor-pointer">
            Posted by
            {/* <span className="ml-1 mr-1 bg-gray-100 text-black flex pl-1">
            </span> */}
            <span className="ml-1">u/{data?.author}</span>
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
