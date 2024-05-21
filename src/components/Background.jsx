import React from "react";

const Background = () => {
  return (
    <div className="h-screen w-full absolute z-[2]">
      <div className="absolute top-[4%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">
        Documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tight font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
