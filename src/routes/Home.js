import React, { useState, useEffect, createContext, useContext } from "react";
import Post from "../components/Post/Post";
import TopicService from "../services/post";
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";

export const PostContext = createContext({
})
const Home = () => {
  const [listPostId, setListPostId] = useState([]);
  const [listPost, setListPost] = useState({});
  const [sortType, setSortType] = useState('hot');

  const fetchData = async (isReplace = false) => {
    let after;
    after = listPostId.length > 0
      ? listPostId[listPostId.length - 1]
      : "";
     
    const res = await TopicService.getList({
      rtj: "only",
      redditWebClient: "web2x",
      app: "web2x-client-production",
      include: "prefsSubreddit",
      after,
      dist: 6,
      forceGeopopular: false,
      layout: "classic",
      sort: sortType,
      limit: 10,
    });
    if (isReplace) {
      setListPost(res.posts);
      setListPostId(res.postIds);
    } else {
      if (Object.keys(listPost).length !== 0) {
        setListPost({ ...listPost, ...res.posts });
      } else {
        setListPost(res.posts);
      }
      setListPostId([...listPostId, ...res.postIds]);

    }

    setIsFetching(false);
  };

  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    if (document.documentElement.scrollTop < document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }
  console.log(123213);
  useEffect(() => {
    fetchData();
  }, [sortType,]);

  useEffect(() => {
    console.log(listPostId,listPost);
  }, [listPostId])
  return (
    <PostContext.Provider value={{ listPost: listPost }}>

      <div className="container max-w-screen-sm mx-auto ">
        <div className="px-4 my-4 bg-white  border-gray-300 border border-solid rounded ">
          <div className="justify-center flex py-3 ">
            <div className="flex w-full font-bold">
              <div onClick={() => setSortType('hot')} className={classNames("text-gray-500  file:placeholder:hover:bg-gray-300 text-sm flex justify-center items-center cursor-pointer py-1 px-2  rounded-xl",
                { "text-cyan-600 mr-4 bg-gray-100 ": sortType === 'hot' })}>
                <i className="las la-fire-alt text-2xl mr-1"></i>
                Hot
              </div>
              <div onClick={() => setSortType('new')} className={classNames("text-gray-500 hover:bg-gray-300 text-sm flex justify-center items-center cursor-pointer py-1 px-2  rounded-xl",
                { "text-cyan-600 mr-4 bg-gray-100 ": sortType === 'new' })}>
                <i className="las la-sun text-2xl mr-1"></i>
                New
              </div>
              <div onClick={() => setSortType('top')} className={classNames("text-gray-500 hover:bg-gray-300 text-sm flex justify-center items-center cursor-pointer py-1 px-2  rounded-xl",
                { "text-cyan-600 mr-4 bg-gray-100 ": sortType === 'top' })}>
                <i className="las la-chart-bar text-2xl mr-1"></i>
                Top
              </div>
              <div
                className="relative hover:bg-gray-200 text-sm p-1 flex justify-center items-center text-gray-500 cursor-pointer rounded-xl"
              >
                {/* <i className="las la-ellipsis-h text-2xl "></i>
                <div

                >
                  <i className="las la-arrow-up text-xl "></i>
                  Rising
                </div> */}
              </div>
            </div>
            <div className="flex w-12 justify-center items-center hover:bg-gray-100 rounded-2xl px-1">
              <i className="las la-list-ul text-2xl"></i>
              <i className="las la-angle-down"></i>
            </div>
          </div>
        </div>
        <div>
        <InfiniteScroll
        dataLength={listPostId.length}
        next={()=>fetchData()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
>
{
          listPostId.map((ele) => {
            return <Post
              keyEle={ele}  
              author={listPost[ele].author}
              title={listPost[ele].title}
              numComments={listPost[ele].numComments}
              authorFlairRichtext={listPost[ele].flair}
              topicType={listPost[ele]?.flair[0]?.richtext[0]?.t ?? ''}
              imgUrl={listPost[ele].url}
              numVotes={listPost[ele].score}
            />
          }
          )}


</InfiniteScroll>
        </div>
       
      </div>
    </PostContext.Provider>
  );
};

export default Home;

export const usePostList = () => {
  return useContext(PostContext);
};