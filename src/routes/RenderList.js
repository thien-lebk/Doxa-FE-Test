import axios from "axios";

const listPost = async () => {
  const { data } = await axios.get("https://www.reddit.com/r/DotA2.json?");
  const changeData = () => {
  };
  return  <div>123123</div>;
};

export default listPost;
