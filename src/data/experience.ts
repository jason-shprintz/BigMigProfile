type Experience = {
  imgSrc: string;
  name: string;
  title: string;
  time: string;
  description: string[];
};

const experience: Experience[] = [
  {
    imgSrc: "assets/images/sands.png",
    name: "Something & Partners",
    title: "Engineer",
    time: "Dec 2022 - Dec 2025",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    imgSrc: "assets/images/someoneInsights.png",
    name: "Someone Insights",
    title: "Associate",
    time: "Oct 2020 - Dec 2022",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    imgSrc: "assets/images/litService.png",
    name: "Something Services",
    title: "Specialist",
    time: "Jun 2016 - Sep 2020",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export { experience };
