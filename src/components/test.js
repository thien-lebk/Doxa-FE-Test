import axios from "axios";

const listPost = async () => {
  const { data } = await axios.get("https://www.reddit.com/r/DotA2.json?");
  const changeData = () => {
    console.log(123213);
  };
//   return [changeData, () =>( <div>123123</div>)];
};

export default listPost;
