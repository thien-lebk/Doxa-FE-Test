import {useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import TopicService from "../services/topic"
const TopicDetailPage = () => {
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const idTopic = urlSearch.get('id');
  const [content, setContent] = useState()
  const intFunc = async ()=>{
    if(idTopic){
      const data = await TopicService.getById(idTopic);
      console.log(data);
      setContent(data.media.content)
    }
  }
  useEffect( () => {
    if(idTopic){
      intFunc()
    }
  }, [idTopic])
  return <div dangerouslySetInnerHTML={{__html:content}}></div>;
};

export default TopicDetailPage;
