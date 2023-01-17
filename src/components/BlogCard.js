import React, { useState } from "react";
import { CopyIcon, RefreshIcon, CheckIcon } from "assets/icons";
import Typewriter from "./Typewriter";
import { contentFilters } from "data";
import BackgroundOverlay from "./BackgroundOverlay";
import { openaiServices } from "services/openaiServices";

function BlogCard({ data, getInput }) {
  const [blog, setBlog] = useState(data);
  const [copied, setCopied] = useState(false);
  const [copyMsg, setCopyMsg] = useState("Copy");
  const [loading, setLoading] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(data.text);
      setCopyMsg("Copied");
      setCopied(true);
      setTimeout(() => {
        setCopyMsg("Copy");
        setCopied(false);
      }, 1000);
    } catch (err) {
      copied(false);
      setCopyMsg("Failed to copy");
    }
  };

  const handleRegenerate = async () => {
    setLoading(true);
    const item = contentFilters.find((x) => x.label === data.title);
    const inputs = [];
    inputs.push(getInput(item));

    const requests = inputs.map(openaiServices.fetchData);

    Promise.all(requests)
      .then((responses) => {
        let res = responses.flat();
        if (res.length) {
          setBlog(res[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  console.log("blog...", blog);

  return (
    <div className="blogCard">
      {loading && <BackgroundOverlay />}
      <div className="w-full flex items-start mb-[24px]">
        <div className="flex-1 text-[#353535] font-bold text-[25px] leading-[29px]">
          {blog.title}
        </div>
        <div className="flex items-center gap-x-[21px]">
          <button
            className="flex items-center h-[18px] w-[18px] text-primary-700"
            onClick={handleRegenerate}
          >
            <RefreshIcon />
          </button>
          <button
            className="relative flex flex-col justify-center items-center h-[18px] w-[18px] text-primary-700"
            onClick={handleCopyClick}
            id="tooltip-clipboard-copy"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied && <div className="tooltip">{copyMsg}</div>}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Typewriter text={blog.text} className="blogText" delay={40} />
      </div>
    </div>
  );
}

export default BlogCard;
