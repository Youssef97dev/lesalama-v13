"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full flex flex-col justify-start lg:justify-center items-center gap-6 h-full text-center px-3 xl:px-60 2xl:px-96 py-20 2xl:py-28"
    >
      <h1 className="lg:text-[26px] text-[19px] leading-[36px]  font-azahra uppercase text-primary">
        <TypeAnimation
          sequence={[t("events.title"), 2000]}
          wrapper="b"
          speed={10}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[16px] leading-[34px] px-0 2xl:px-12 text-primary_9 font-light">
        {t("events.content_1")}
      </p>
      <p className="text-[16px] leading-[34px] px-0 2xl:px-12 text-primary_9 font-light">
        {t("events.content_2")}
      </p>
    </div>
  );
};

export default Events;
