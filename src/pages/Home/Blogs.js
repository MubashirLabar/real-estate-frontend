import React from "react";
import BlogCard from "components/BlogCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Blogs({ createdContent, setReGenerate }) {
  return (
    <div className="w-full">
      <Masonry columnsCount={3} gutter="40px">
        {createdContent.map((item, index) => (
          <BlogCard key={index} data={item} setReGenerate={setReGenerate} />
        ))}
      </Masonry>
    </div>
  );

  return (
    <div className="w-full grid grid-cols-3 gap-[40px]">
      {createdContent.map((item, index) => (
        <BlogCard key={index} data={item} setReGenerate={setReGenerate} />
      ))}
    </div>
  );
}

export default Blogs;
