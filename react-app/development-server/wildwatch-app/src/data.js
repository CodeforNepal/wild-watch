import {
  FiInstagram,
  FiGithub,
  FiTwitter,
  FiPhone,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

import nabin from "./images/nabin.webp";
import sudeep from "./images/sudeep.jpg";
import sanket from "./images/sanket.jpg";
import shankar from "./images/shankar.webp";
import bses from "./images/bses.jpg";
import abhash from "./images/abhash.webp";

export const links = [
  {
    label: "Test",
    to: "upload",
  },
  {
    label: "Members",
    to: "team",
  },
  {
    label: "Contact",
    to: "contact",
  },
];

export const social = [
  {
    icon: <FiInstagram className="w-5 h-5 social" />,
    href: "https://instagram.com/wildwatch",
  },
  {
    icon: <FiTwitter className="w-5 h-5 social" />,
    href: "https://twitter.com/wildwatch",
  },
  {
    icon: <FiGithub className="w-5 h-5 social" />,
    href: "https://github.com/abhash-rai/wild-watch",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Abhash",
    role: "Project Manager",
    socialMedia: {
      twitter: "https://twitter.com/abhash-rai",
      linkedin: "https://www.linkedin.com/in/abhash-rai/",
      github: "https://github.com/abhash-rai",
    },
    photo: abhash,
    saying: "",
  },
  {
    id: 1,
    name: "Nabin",
    role: "Machine Learning",
    socialMedia: {
      twitter: "https://twitter.com/nabinstwt",
      linkedin: "https://www.linkedin.com/in/nabinoli/",
      github: "https://github.com/nabin2004",
    },
    photo: nabin,
  },
  {
    id: 1,
    name: "Sudeep",
    role: "IOT",
    socialMedia: {
      twitter: "https://twitter.com/sudeepfullel",
      linkedin: "https://www.linkedin.com/in/sudeepfullel/",
      github: "https://github.com/12sudeep",
    },
    photo: sudeep,
  },
  {
    id: 1,
    name: "Shankar",
    role: "Research",
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/shankartamang/",
      github: "https://github.com/",
    },
    photo: sanket,
  },
  {
    id: 1,
    name: "Sanket",
    role: "Research",
    socialMedia: {
      twitter: "https://twitter.com/SanketStha101",
      linkedin: "https://www.linkedin.com/in/sanketstha/",
      github: "https://github.com/stha-sanket",
    },
    photo: shankar,
  },
  {
    id: 1,
    name: "Bishesh",
    role: "UI/UX Designer",
    socialMedia: {
      twitter: "https://twitter.com/bses7",
      linkedin: "https://www.linkedin.com/in/bisheshgiri/",
      github: "https://github.com/bses7",
    },
    photo: bses,
  },
];

export default teamMembers;

export const contact = [
  {
    icon: <FiPhone />,
    title: "Have a question?",
    subtitle: "Feel free to reach out.",
    description: "You can call me at +977 98765676554",
  },
  {
    icon: <FiMapPin />,
    title: "Current Address",
    subtitle: "Kathmandu, Nepal",
    description: "Visit us at Kathmandu, Nepal",
  },
  {
    icon: <FiMail />,
    title: "Email Support",
    subtitle: "Contact us via email.",
    description: "Send your inquiries to watchwild@gmail.com",
  },
];
