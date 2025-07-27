import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "1975",
      content: (
        <div>
          <p
            className="mb-8 text-sm font-bold text-green-700 md:text-xl dark:text-green-700">
            Elkhalij celebrated its first class of graduates 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://granderie.ca/images/default-source/secondary/graduate.jpg?sfvrsn=a81619cd_1"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://www.sfu-linz.ac.at/wp-content/uploads/3-PSY_Graduierung_BA_12_IMG_9918.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://www.monaco.edu/wp-content/uploads/sites/4/2023/12/IUM_GRADU_2023_RS_016_WEB.jpg?resize=300,200"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://www.jinan.edu.lb/manager/images-2018/saida/gradu-saida07.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2021",
      content: (
        <div>
          <p
            className="mb-8 text-sm font-bold text-green-700 md:text-xl dark:text-green-700">
            International collaboration
          </p>
          <p
            className="mb-8 text-sm font-bold text-green-700 md:text-xl dark:text-green-700">
            We signed our first partnership agreement with a European university
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://evolllution.com/hubfs/AdobeStock_488563342-1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://fastercapital.com/i/Entrepreneurship-policy-and-advocacy-The-Role-of-Government-in-Fostering-Entrepreneurship--Collaboration-with-Industry-and-Academia.webp"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://ecrlife.org/content/images/2021/02/pexels-fauxels-3184291--1-.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://venturewell.org/wp-content/uploads/IUC_FeaturedImage_1024x512.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
{
      title: "2025",
      content: (
        <div>
          <p
            className="mb-8 text-sm font-bold text-green-700 md:text-xl dark:text-green-700">
            Award For Innovation
          </p>
          <p
            className="mb-8 text-sm font-bold text-green-700 md:text-xl dark:text-green-700">
            The school received a national award for its innovative teaching methods
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cis.ieee.org/images/files/awards/trophy.JPG"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="data:image/jpeg;base64,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"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://marketplace.canva.com/EAGFFNJ2RpY/1/0/1600w/canva-white-and-gold-modern-award-certificate-NytimOYN8a4.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://rightlivelihood.org/wp-content/uploads/2024/08/RS10203_Matt-Odom-Photography-208639.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
