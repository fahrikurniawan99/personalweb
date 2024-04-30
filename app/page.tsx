import Link from "next/link";
import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";
import Hero from "./landing/components/Hero";
import LatestPost from "./landing/components/LatestPost";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs, SiExpress, SiMysql } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center mx-auto w-[90%] text-red-400 font-bold max-w-[300px] lg:hidden">
        <Image src={"/sorry.jpg"} alt="not found" width={2000} height={2000} />
        <p>This website can only be accessed via deskop.</p>
      </div>
      <div className="text-zinc-700 hidden lg:block">
        <button
          title="Toggle Theme"
          className="bg-white border border-zinc-400 rounded-lg h-10 aspect-square fixed top-4 right-10 flex justify-center items-center shadow-2xl z-[999999]"
        >
          <IoSunnyOutline />
        </button>
        <button
          title="Toggle Theme"
          className="bg-blue-600 border text-white rounded-full h-14 aspect-square fixed bottom-10 right-10 flex justify-center items-center shadow-2xl z-[999999] text-lg"
        >
          <BsChatDots />
        </button>
        <div className="py-5 border-b border-zinc-100 sticky top-0 bg-slate-50">
          <div className="max-w-[1000px] flex items-center justify-between mx-auto">
            <h1 className="font-bold text-lg tracking-wide ">
              Fahrikurniawan.com
            </h1>
            <div className="gap-3 flex">
              <Link
                href={""}
                className=" text-white rounded px-5 py-2 text-sm font-medium flex justify-center items-center gap-2 bg-blue-700"
              >
                <FaLinkedin className="" /> LinkedIn
              </Link>
              <Link
                href={""}
                className=" text-white rounded px-5 py-2 text-sm font-medium flex justify-center items-center gap-2 bg-zinc-700"
              >
                <FaLinkedin className="" /> Github
              </Link>
            </div>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center w-[95%] max-w-[600px] mx-auto">
          <div className="bg-blue-600 shadow-2xl h-[50px] aspect-square rounded-full font-extrabold flex items-center justify-center text-white">
            <span>MFK</span>
          </div>
          <h1 className="font-bold text-4xl text-center mt-1">
            Mohamad Fahri Kurniawan
          </h1>
          <h2 className="font-medium text-lg">Frontend Web Developer</h2>
          <p className="text-center mt-6 text-sm tracking-wide leading-relaxed">
            Throughout my career journey, I've discovered immense excitement in
            bringing forth visually appealing and functional designs. Blending
            technical skills with an artistic flair, I transform design concepts
            into interactive and responsive interfaces. I'm deeply intrigued by
            the visual aspects of web development, believing that strong design
            has the power to enhance the overall user experience.
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <Link
              href={"https://nextjs.org/"}
              className="bg-zinc-800  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <TbBrandNextjs title="Next.js" />
            </Link>
            <Link
              href={"https://nuxt.com/"}
              className="bg-green-400  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <SiNuxtdotjs title="Nuxt.js" />
            </Link>
            <Link
              href={"https://expressjs.com/"}
              className="bg-zinc-600 w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <SiExpress title="Express.js" />
            </Link>
            <Link
              href={"https://www.php.net/"}
              className="bg-blue-800  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <FaPhp title="PHP" />
            </Link>
            <Link
              href={"https://dev.mysql.com/"}
              className="bg-sky-600  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <SiMysql title="Mysql" />
            </Link>
            <Link
              href={"https://react.dev/"}
              className="bg-cyan-400  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <FaReact title="React.js" />
            </Link>
            <Link
              href={"https://vuejs.org/"}
              className="bg-green-500  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <FaVuejs title="Vue.js" />
            </Link>
            <Link
              href={"https://nodejs.org/en"}
              className="bg-green-700  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <FaNodeJs title="Node.js" />
            </Link>
            <Link
              href={"https://www.mongodb.com/"}
              className="bg-emerald-500  w-[40px] aspect-square rounded-full text-white flex justify-center items-center text-2xl"
            >
              <TbBrandMongodb title="Mongodb" />
            </Link>
          </div>
        </div>
        <div className="mb-20">
          <div className="max-w-[1000px] mx-auto">
            <h5 className="font-bold text-xl">Latest Projects</h5>
            <div className="overflow-x-auto w-full pt-10 pb-10">
              <div className="flex w-fit gap-10">
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
              </div>
            </div>
            <h5 className="font-bold text-xl mt-44">Latest Post</h5>
            <div className="overflow-x-auto w-full pt-10 pb-10">
              <div className="flex w-fit gap-10">
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
              </div>
            </div>
            <h5 className="font-bold text-xl mt-44">Guest Book</h5>
            <div className="overflow-x-auto w-full pt-10 pb-10">
              <div className="flex w-fit gap-10">
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
                <div className="bg-zinc-300 rounded h-[200px] w-[300px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
