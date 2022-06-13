import axios from "axios";
const TopicService =  {
    getList: async (params) => {
       const {data}=await axios.get( "https://gateway.reddit.com/desktopapi/v1/subreddits/dota2",{params:params})
      return data;
    },
    getById:async(id,params)=>{
      try{
          const {data}=await axios.get( `https://gateway.reddit.com/desktopapi/v1/postcomments/${id}`,{params:params})

          return data;
      }catch(error){
          console.log("error",error)
          return false;
      }
  }
};

export default TopicService;
