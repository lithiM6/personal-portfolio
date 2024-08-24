import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022-Present"
          title="University of Moratuwa"
          subTitle="Sri Lanka"
          descriptions={[
            "Bachelor of Computer Science and Engineering",
            "GPA: 3.70"
          ]}
        />
        <ResumeCard
          badge="2018 - 2020"
          title="Visakha Vidyalaya"
          subTitle="Colombo-4, Sri Lanka"
          descriptions={[
            "G.C.E A/L Mathematics Stream - 3As",
            "Z-Score: 2.420"
          ]}
        />
        <ResumeCard
          badge="2007 - 2017"
          title="St.Lawrence's Convent"
          subTitle="Colombo-6, Sri Lanka"
          descriptions={[
            "G.C.E O/L (Eng. Medium) - 9As"
          ]}
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2024-Present"
          title="Vice President-Education"
          subTitle="Gavel Club of Unversity of Moratuwa"
          descriptions={[
            "Educational Meetings: Organizing weekly meetings for the entirety of the term."
          ]}
        />
        <ResumeCard
          badge="2023 - 2024"
          title="Co-Editor"
          subTitle="Association for Computing Machinery Student Chapter"
          descriptions={[
            "Actively involved in creating content for all club materials."
          ]}
        />
        <ResumeCard
          badge="2023 April"
          title="Partnership Development Specialist | APS 2023"
          subTitle="AIESEC in Sri Lanka"
          descriptions={[
            "A part of the core committee that organized APS 2023, an international conference for the Asia-Pacific region, with a delegation of 100+ participants, hosted by AIESEC in Sri Lanka."
          ]}
        />
        <ResumeCard
          badge="2023 July"
          title="Co-chair | Speech Olympiad XVI"
          subTitle="Gavel Club of Unversity of Moratuwa"
          descriptions={[
            "An intra university speech competition with the participation of over 100+ undergraduates, spanning over a period of four months."
            ]}
        />
      </div>
    </div>
  );
};

export default Education;
