import { FaGithub, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

export const CONTENT_ICON_CLASSNAME = "text-white text-xl";

export const SocialMedia = [
  {
    bgColorClass: "bg-blue-600",
    contentIcon: <FaLinkedinIn className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.linkedin.com/in/mohamadfahrikurniawan/",
  },
  {
    bgColorClass: "bg-zinc-600",
    contentIcon: <FaGithub className={CONTENT_ICON_CLASSNAME} />,
    url: "https://github.com/fahrikurniawan99",
  },
  {
    bgColorClass: "bg-red-600",
    contentIcon: <FaYoutube className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.youtube.com/",
  },
  {
    bgColorClass: "bg-gray-900",
    contentIcon: <FaTiktok className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.tiktok.com/",
  },
];
