import { useLocation } from 'react-router-dom';
import PostDetail from '../components/Post/PostDetail';

const TopicDetailPage = () => {
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  return  <PostDetail keyEle={urlSearch.get('id')}></PostDetail>;
};

export default TopicDetailPage
;
