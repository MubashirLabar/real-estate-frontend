import React, { useState, useEffect } from "react";

function Typewriter({ text, className, delay }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    const type = () => {
      setDisplayText(text.slice(0, index));
      setIndex(index + 1);
    };
    const startTyping = () => {
      timeoutId = setTimeout(() => {
        type();
        if (index <= text.length) {
          startTyping();
        }
      }, delay);
    };
    startTyping();
    return () => clearTimeout(timeoutId);
  }, [text, index]);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  const textHTML = displayText.trimStart().replace(/\n/g, "<br/>");

  return (
    <div dangerouslySetInnerHTML={{ __html: textHTML }} className={className} />
  );
}

export default Typewriter;
