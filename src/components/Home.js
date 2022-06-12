import React from 'react';
import axios from 'axios';
import Post from './Post/Post';
import Category from './Category/Category';
import CategoryHeader from './CategoryHeader/CategoryHeader';
const Home =  () =>{
  const changeData = () => {
    console.log(123213);
  };
  return   (
    <div className='container max-w-screen-sm mx-auto '>
      {CategoryHeader()}
      {Category()}
      {Post()}
    </div>
  );
};

export default Home;
