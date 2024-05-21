import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap flex-shrink-0 p-5">
      {data.map((card, index) => (
        <Card data={card} reference={ref} key={index} />
      ))}
    </div>
  );
};

export default Foreground;
