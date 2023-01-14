import React, { useState } from "react";
import { CopyIcon, RefreshIcon, CheckIcon } from "assets/icons";
import { TypeAnimation } from "react-type-animation";
import { Tooltip as ReactTooltip } from "react-tooltip";

function BlogCard({ data, setReGenerate }) {
  const [copied, setCopied] = useState(false);
  const [copyMsg, setCopyMsg] = useState("Copy");

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

  const handleRegenerate = () => {
    setReGenerate(data.title);
  };

  return (
    <div className="blogCard">
      <div className="w-full flex items-start mb-[24px]">
        <div className="flex-1 text-[#353535] font-bold text-[25px] leading-[29px]">
          {data.title}
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
          {/* <ReactTooltip
            anchorId="tooltip-clipboard-copy"
            place="top"
            content={copyMsg}
            data-tooltip-delay-hide={1000}
            events={["click"]}
            isOpen={copied}
          /> */}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <TypeAnimation
          sequence={[data.text, 1000]}
          speed={70}
          wrapper="div"
          className="blogText"
          cursor={false}
        />
      </div>
    </div>
  );
}

export default BlogCard;
