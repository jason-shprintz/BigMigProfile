type Experience = {
  imgSrc: string;
  name: string;
  location: string[];
  title: string;
  time: string;
  description: string[];
};

const experience: Experience[] = [
  {
    imgSrc: "assets/images/bellagio.png",
    name: "Water Grill",
    location: ["San Diego, CA", "Las Vegas, NV"],
    title: "Server",
    time: "Nov 2022 - Present",
    description: [
      "Deliver exceptional guest experiences in high-volume, upscale dining environments",
      "Recognized for outstanding service and teamwork",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Eddie V's at The Police Headquarters",
    location: ["San Diego, CA"],
    title: "Lead Server",
    time: "Dec 2015 - Feb 2018 | Oct 2022 - Mar 2024",
    description: [
      "Consistently achieved top guest satisfaction scores",
      "Trained new staff on service standards and menu knowledge",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Bubba Gump Shrimp Co.",
    location: ["Madeira Beach, FL"],
    title: "Bar Manager",
    time: "Jul 2018 - Feb 2019",
    description: [
      "Managed bar operations, inventory, and staff scheduling",
      "Increased beverage sales through creative promotions",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "A.R. Valentein's at The Lodge at Torrey Pines",
    location: ["La Jolla, CA"],
    title: "Server",
    time: "Jun 2017 - Feb 2018",
    description: [
      "Provided fine dining service in a luxury resort setting",
      "Collaborated with culinary team to enhance guest dining experiences",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Union Kitchen & Tap",
    location: ["La Jolla, CA"],
    title: "Operations Manager / Beverage Director",
    time: "Jun 2014 - Jun 2015",
    description: [
      "Oversaw daily operations and beverage program",
      "Improved operational efficiency and guest satisfaction",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "The Oceanaire Seafood Room",
    location: [
      "Miami, FL",
      "San Diego, CA",
      "Philadelphia, PA",
      "Baltimore, MD",
    ],
    title: "Assistant General Manager / Beverage Director",
    time: "Oct 2004 - Jun 2014",
    description: [
      "Led training for new locations and developed beverage programs",
      "Recognized for leadership across four major markets",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Top of the Market",
    location: ["San Diego, CA"],
    title: "Server",
    time: "Mar 2003 - May 2005 | Oct 2010 - Nov 2011",
    description: [
      "Delivered high-quality service in a fast-paced environment",
      "Maintained strong customer relationships leading to repeat business",
    ],
  },
  {
    imgSrc: "assets/images/caesars.png",
    name: "Cohn Restaurant Group",
    location: ["San Diego, CA"],
    title: "Server / Trainer",
    time: "Apr 1999 - Jun 2003 | Oct 2010 - Nov 2011",
    description: [
      "Served at multiple concepts: Dakota Grille & Spirits, THe Prado @ Balboa Park, Indigo Grill, & Blue Point Coastal Cuisine",
      "Trained new hires and supported opening teams",
    ],
  },
];

export { experience };
