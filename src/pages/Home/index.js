import React, { useState } from "react";
import Blogs from "./blogs";
import PropertyInformation from "./propertyInformaton";

function Home() {
  const [createdContent, setCreatedContent] = useState([]);
  const [reGenerate, setReGenerate] = useState(null);

  console.log("regenerate....", reGenerate);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full margins flex justify-center py-[70px]">
        <div className="w-full relative max-w-8xl">
          <div className="w-full mb-[66px] text-center font-bold text-[35px] text-black-text leading-[40px]">
            Real Estate Property Content Generator
          </div>
          <PropertyInformation
            createdContent={createdContent}
            setCreatedContent={setCreatedContent}
            reGenerate={reGenerate}
            setReGenerate={setReGenerate}
          />
          {createdContent.length ? (
            <Blogs
              createdContent={createdContent}
              reGenerate={reGenerate}
              setReGenerate={setReGenerate}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
