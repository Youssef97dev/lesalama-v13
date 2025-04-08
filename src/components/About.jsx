"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="w-full flex flex-col justify-start lg:justify-center items-center gap-6 h-full text-center px-3 xl:px-60 2xl:px-96 py-20 2xl:py-28"
    >
      <h1 className="lg:text-[26px] text-[19px] leading-[36px]  font-azahra uppercase text-primary">
        <TypeAnimation
          sequence={[t("about.title"), 2000]}
          wrapper="b"
          speed={10}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[16px] leading-[34px] px-0 2xl:px-12 font-light text-primary_9">
        {t("about.content_1")}
      </p>
      <p className="text-[16px] leading-[34px] px-0 2xl:px-12 font-light text-primary_9">
        {t("about.content_2")}
      </p>
      <Link
        href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
        target="_blank"
        className="py-2 px-8 uppercase tracking-widest border border-primary text-primary rounded-lg text-[12px] leading-[34px] hover:bg-primary hover:text-white duration-200 transition-all ease-out font-sackerCothic"
      >
        {t("about.button_book")}
      </Link>
    </div>
  );
};

export default About;
