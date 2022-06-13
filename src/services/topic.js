import axios from "axios";
const TopicService =  {
    getList: async () => {
      console.log(123123);
      const { data } = await axios.get("https://www.reddit.com/r/DotA2.json?");
      return data?.data?.children ?? [];
    },
};

export default TopicService;
