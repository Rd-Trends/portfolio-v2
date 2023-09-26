import React from "react";

const SectionTitle = ({
  text,
  emphasis,
}: {
  text: string;
  emphasis: string;
}) => {
  return (
    <div>
      <h2 className=" border-l-[6px] px-4 border-primary text-3xl md:text-5xl lg:text-5xl font-bold">
        {text} <span className=" text-primary">{emphasis}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
