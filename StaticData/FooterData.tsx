import { FooterSection } from "@/Types/FooterType";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { ReactNode } from "react";
interface IconItem {
  id: number;
  icon: ReactNode;
}
export const icons: IconItem[] = [
  { id: 1, icon: <FaFacebookSquare size={30} color="white" className="hover:text-blue-600 cursor-pointer" /> },
  { id: 2, icon: <CiInstagram size={30} color="white" className="hover:text-pink-500 cursor-pointer" /> },
  { id: 3, icon: <FaXTwitter size={30} color="white" className="hover:text-sky-400 cursor-pointer" /> },
  { id: 4, icon: <CiYoutube size={30} color="white" className="hover:text-red-600 cursor-pointer" /> },
];

export const FooterData: FooterSection[] = [
  {
    id: 1,
    title: "Company",
    links: [
      "About Us",
      "Our Services",
      "Careers",
      "Blog",
      "Testimonial",
      "Contact Us",
    ],
  },
  {
    id: 2,
    title: "Resources",
    links: [
      "Fitness Tools",
      "Workout Videos",
      "Nutrition Guides",
      "FAQ",
      "Success Stories",
      "Membership",
    ],
  },
  {
    id: 3,
    title: "Programs",
    links: [
      "Weight Loss",
      "Building Muscles",
      "Home Workout",
      "Gym Plan",
      "Our Plans",
      "Fitness Group",
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    contact: [
      {
        type: "location",
        value: "USA - Washington DC",
      },
      {
        type: "phone",
        value: "1234-56789",
      },
      {
        type: "email",
        value: "Fitmakerrr@Gmail.Com",
      },
    ],
  },
];