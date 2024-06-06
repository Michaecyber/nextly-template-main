import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Applications & admission requirements",
  desc: "Join our Open Day to learn about upcoming programmes for this Mid-Year. Reserve Your Spot!.",
  image: benefitOneImg,
  bullets: [
    {
      title: "For post-matric programmes",
      desc: "Applicants must have passed Grade 9/12 / N3 / Level 4 or its equivalent. Use November Grade 11 or September Grade 12 results to apply.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Pre-matric programmes, National Certificate",
      desc: "(Vocational) Level 2 – 4, a Grade 9 certificate is applicable. Students will have to write an entrance test.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Full time lectures",
      desc: "From approximately 08:00 – 16:00 (Monday – Friday). Part-time classes are offered on Saturdays between 8:30 – 13:00 (Saturday).",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "General Information",
  desc: "Accommodation will be arranged on request. Classes are offered in English. Student centres, restaurants, internet facilities,social activities, student councils and sport facilities are available to full-time and part-time students. Career guidance and aptitude tests are available on request.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Practical Trainning",
      desc: "learning in working life and familiarizing with tasks of your professional field in a real working environment.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Job Shadowing Assistance",
      desc: "Observing a mentor and ensuring a new or existing prospective employee develops expertise in a job",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Affordable Fees ",
      desc: "We ensure that everyone has a chance to get a good education , reducing student debt",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
