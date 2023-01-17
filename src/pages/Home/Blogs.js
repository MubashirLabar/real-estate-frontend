import BlogCard from "components/BlogCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Blogs({ createdContent, getInput }) {
  return (
    <div className="w-full">
      <Masonry columnsCount={3} gutter="40px">
        {createdContent.map((item, index) => (
          <BlogCard key={index} data={item} getInput={getInput} />
        ))}
      </Masonry>
    </div>
  );
}

export default Blogs;
