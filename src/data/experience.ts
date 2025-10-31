type Experience = {
  imgSrc: string;
  name: string;
  title: string;
  time: string;
  description: string[];
};

const experience: Experience[] = [
  {
    imgSrc: "assets/images/bellagio.png",
    name: "Bellagio Las Vegas",
    title: "General Manager",
    time: "Jan 2020 - Present",
    description: [
      "Oversee daily operations of premium fine dining establishment with $8M annual revenue and 120+ staff members",
      "Implemented new service standards that increased guest satisfaction scores by 25% and reduced complaint resolution time by 40%",
      "Led cost optimization initiatives resulting in 15% reduction in food waste while maintaining quality standards",
      "Developed comprehensive staff training programs that reduced turnover by 30% and improved service consistency",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Caesars Palace",
    title: "Assistant General Manager",
    time: "Mar 2016 - Dec 2019",
    description: [
      "Managed front-of-house operations for high-volume restaurant serving 500+ covers per night",
      "Coordinated with executive chef to launch seasonal menus that increased average check by 20%",
      "Supervised team of 80+ servers, hosts, and support staff across multiple dining venues",
      "Streamlined reservation and seating systems to reduce wait times during peak hours by 35%",
    ],
  },
  {
    imgSrc: "assets/images/oceanview.png",
    name: "Ocean View Restaurant Group",
    title: "Restaurant Manager",
    time: "Jun 2012 - Feb 2016",
    description: [
      "Managed daily operations of upscale coastal dining establishment in San Diego",
      "Increased wine program revenue by 45% through sommelier training and curated selection",
      "Implemented POS and inventory management systems that improved order accuracy by 95%",
      "Built strong relationships with local suppliers to ensure consistent quality and competitive pricing",
    ],
  },
];

export { experience };
