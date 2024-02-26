import React from "react";
import updatedphoto from "../../public/assets/updatedphoto.png";
import Image from "next/image";

const about = () => {
  return (
    <div className="w-[100vw] bg-[#023059]">
      <p className="text-4xl font-bold py-5">About Me</p>
      <div className="flex flex-col items-center md:flex-row py-4 px-4 md:tracking-widest md:leading-loose md:items-start md:text-xl">
        <Image className="" src={updatedphoto} />
        <p className="py-5 px-4 md:py-0">
          With nearly a decade of frontline experience as a paramedic, I've
          cultivated a unique skill set that seamlessly transitions into the
          realm of data analysis. My time in emergency response has endowed me
          with the ability to maintain composure under pressure, make decisive
          yet well-informed choices, and adeptly adapt to swiftly changing
          circumstances. In the high-stakes environment of emergency care,
          meticulous attention to detail isn't just a preference – it's a
          life-saving imperative. This exacting standard naturally extends to my
          approach to data analysis, where precision and accuracy are paramount
          for deriving meaningful insights. As I pivot towards data analysis, I
          intend to harness my quantitative proficiency, analytical acumen, and
          unwavering attention to detail to unearth actionable insights and
          steer informed decision-making across diverse industries.
        </p>
      </div>
    </div>
  );
};

export default about;
