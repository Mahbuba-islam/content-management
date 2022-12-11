import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../components/ContentCard";
import { sortContent } from "../redux/action/contentAction";
import getContentData from "../redux/thunk/blogs/getContent";

const Home = () => {
  const contents = useSelector((state) => state.content.blogs);
   
    const sorts = useSelector((state) => state.uploads.sorts);
    const { uploads } = sorts;
    const activeClass = "text-white bg-indigo-500 border-white";
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContentData());
      }, [dispatch]);

      let content;
      if (contents.length) {
        content = contents.map((content) => (
          <ContentCard key={content.model} content={content} />
        ));
      }

      // if (contents.includes('date')) {
      //   content = contents
      //     .filter((content) => content.date)
      //     .map((content) => <contentCard key={content.model} content={content} />);
      // }
        
  return (
    <div className='max-w-5xl gap-14 mx-auto my-10'>
      
    <div className='mb-10 flex justify-end gap-5'>
    <button
    
          onClick={() => dispatch(sortContent(data))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            uploads.includes("date") ? activeClass : null
          }`}
        >
         frist-upload
        </button>
        <button
          onClick={() => dispatch(sortContent("date"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            uploads.includes("date") ? activeClass : null
          }`}
        >
          last-upload
        </button>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;