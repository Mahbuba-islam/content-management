import React from "react";

const ContentCard = ({ content }) => {
  return (
    <div
      className=' rounded-3xl border flex flex-col text-indigo-900'
      key={content._id}
    >
      <div className=''>
        <img src={content.image} alt={content.model} />
      </div>
      <h1 className='font-bold px-5 pt-3 text-center'>{content.title}</h1>
      <p className='text-start px-5 pt-3 mb-3'>{content.description}</p>
      <div >
       </div>
    </div>
  );
};

export default ContentCard;