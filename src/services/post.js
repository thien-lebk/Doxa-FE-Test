import axios from "axios";
const PostService =  {
    getList: async (params) => {
       const {data}=await axios.get( "https://gateway.reddit.com/desktopapi/v1/subreddits/dota2",{params:params})
      return data;
    },
    getById:async(id,params)=>{
      try{
          const {data}=await axios.get( `https://gateway.reddit.com/desktopapi/v1/postcomments/${id}`,{params:params})
          return data.posts[id];
      }catch(error){
          console.log("error",error)
          return false;
      }
  }
};

export default PostService;
