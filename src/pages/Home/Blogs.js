import React, { useMemo } from "react";
import BlogCard from "components/BlogCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Blogs({ createdContent, reGenerate, setReGenerate }) {
  return (
    <div className="w-full">
      <Masonry columnsCount={3} gutter="40px">
        {createdContent.map((item, index) => (
          <BlogCard key={index} data={item} setReGenerate={setReGenerate} />
        ))}
      </Masonry>
    </div>
  );
}

export default Blogs;
