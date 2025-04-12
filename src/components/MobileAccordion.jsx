"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const MobileAccordion = () => {
  const [active, setActive] = useState("1");
  const { t } = useTranslation();

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div className="w-full block lg:hidden">
      <div className="rounded">
        <button
          type="button"
          className={`px-4 py-6 space-x-2 text-primary_1 font-azahra text-[18px] leading-[18px] w-full flex items-center text-white-dark bg-gradient-to-b from-[#d37b5c] to-primary shadow-md ${
            active === "1" ? "hidden" : "block"
          }`}
          onMouseEnter={() => togglePara("1")}
        >
          <TiArrowSortedDown size={18} />
          <b>{t("accordion.title_1")}</b>
        </button>
        <div>
          <AnimateHeight
            duration={300}
            className="transition-all ease-in-out"
            height={active === "1" ? "auto" : 0}
          >
            <div className="relative h-[50vh]">
              <Image
                src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/yvbd9e4tc5sgkb5t5ery"
                alt="Le Salama Restaurant"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute left-4 bottom-12 text-white flex justify-start items-start gap-2">
                <TiArrowSortedUp className="mt-1" size={18} />
                <div className="flex flex-col justify-center items-start">
                  <strong className="font-azahra">
                    {t("accordion.title_1")}
                  </strong>
                  <b className="text-[14px] font-light leading-[20px]">
                    {t("accordion.desc_1")}
                  </b>
                </div>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
      <div className="rounded">
        <button
          type="button"
          className={`px-4 py-6 space-x-2 text-primary_1 font-azahra text-[18px] leading-[18px] w-full flex items-center text-white-dark bg-gradient-to-b from-[#d37b5c] to-primary shadow-md ${
            active === "2" ? "hidden" : "block"
          }`}
          onMouseEnter={() => togglePara("2")}
        >
          <TiArrowSortedDown size={18} />
          <b>{t("accordion.title_2")}</b>
        </button>
        <div>
          <AnimateHeight
            duration={300}
            className="transition-all ease-in-out"
            height={active === "2" ? "auto" : 0}
          >
            <div className="relative h-[50vh]">
              <Image
                src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ryaqmmhrlgjsjw25ouyu"
                alt="Le Salama Culinary"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute left-4 bottom-12 text-white flex justify-start items-start gap-2">
                <TiArrowSortedUp className="mt-1" size={18} />
                <div className="flex flex-col justify-center items-start">
                  <b className="font-azahra">{t("accordion.title_2")}</b>
                  <b className="text-[14px] font-light leading-[20px]">
                    {t("accordion.desc_2")}
                  </b>
                </div>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
      <div className="rounded">
        <button
          type="button"
          className={`px-4 py-6 space-x-2 text-primary_1 font-azahra text-[18px] leading-[18px] w-full flex items-center text-white-dark bg-gradient-to-b from-[#d37b5c] to-primary shadow-md ${
            active === "3" ? "hidden" : "block"
          }`}
          onMouseEnter={() => togglePara("3")}
        >
          <TiArrowSortedDown size={18} />
          <b>{t("accordion.title_3")}</b>
        </button>
        <div>
          <AnimateHeight
            duration={300}
            className="transition-all ease-in-out"
            height={active === "3" ? "auto" : 0}
          >
            <div className="relative h-[50vh]">
              <Image
                src="https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1500,w_1000/v1/salama-V2/k0zvojoemfvwy8ypgc7o"
                alt="Le Salama Sunset"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute left-4 bottom-12 text-white flex justify-start items-start gap-2">
                <TiArrowSortedUp className="mt-1" size={18} />
                <div className="flex flex-col justify-center items-start">
                  <b className="font-azahra">{t("accordion.title_3")}</b>
                  <b className="text-[14px] font-light leading-[20px]">
                    {t("accordion.desc_3")}
                  </b>
                </div>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
      <div className="rounded">
        <button
          type="button"
          className={`px-4 py-6 space-x-2 text-primary_1 font-azahra text-[18px] leading-[18px] w-full flex items-center text-white-dark bg-gradient-to-b from-[#d37b5c] to-primary shadow-md ${
            active === "4" ? "hidden" : "block"
          }`}
          onMouseEnter={() => togglePara("4")}
        >
          <TiArrowSortedDown size={18} />
          <b>{t("accordion.title_4")}</b>
        </button>
        <div>
          <AnimateHeight
            duration={300}
            className="transition-all ease-in-out"
            height={active === "4" ? "auto" : 0}
          >
            <div className="relative h-[50vh]">
              <Image
                src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ge6qqi3nvcd5ndj2klmn"
                alt="Le Salama Belly Dance"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute left-4 bottom-12 text-white flex justify-start items-start gap-2">
                <TiArrowSortedUp className="mt-1" size={18} />
                <div className="flex flex-col justify-center items-start">
                  <span className="font-azahra">{t("accordion.title_4")}</span>
                  <b className="text-[14px] font-light leading-[20px]">
                    {t("accordion.desc_4")}
                  </b>
                </div>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  );
};

export default MobileAccordion;
