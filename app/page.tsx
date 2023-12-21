import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Github, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";
import Lottie from "./landing/Lottie";
import GithubAnimation from "./landing/Github";

export default function Home() {
  return (
    <>
      <Navbar className="py-2 bg-slate-50 shadow-sm">
        <NavbarBrand>
          <p className="font-bold text-xl">FahriKurniawan</p>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link href={"/"}>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/projects"}>Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/blog"}>Blog</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button color="primary">Masuk</Button>
          <Button color="primary" variant="flat">
            Buat Akun
          </Button>
        </NavbarContent>
      </Navbar>
      <div className="px-6 max-w-[1024px] mx-auto">
        <div className="h-[400px]  w-full flex justify-center items-center bg-slate-900 rounded-2xl text-slate-300 mt-20 shadow-2xl">
          <div className="text-center max-w-[70%]">
            <Lottie />
            <h2 className="font-bold">About this website</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              cupiditate quia nihil veniam perspiciatis laborum quasi corrupti.
              Vitae dignissimos deleniti illum illo autem vero iure eveniet
              repudiandae itaque aperiam. Dolorum.
            </p>
          </div>
        </div>
      </div>
      {/* <h2 className="text-center mt-10 font-bold text-xl text-slate-700 mb-5">
        Touch Me
      </h2> */}
      <div className="flex max-w-[1024px] mx-auto px-6 gap-5 my-20">
        <div className="h-[400px] bg-red-500 rounded-xl w-full border-3 border-red-300"></div>
        <div className="h-[400px] bg-blue-800 rounded-xl w-full border-3 border-blue-300"></div>
        <div className="h-[400px] bg-gray-900 rounded-xl w-full border-3 border-gray-500">
          <GithubAnimation />
        </div>
      </div>
      {/* <div className="max-w-[1024px] px-6 mt-20 mb-20 mx-auto flex gap-3 justify-center">
        <Button
          color="danger"
          endContent={<MessageSquare className="w-4 aspect-square" />}
        >
          Guestbook
        </Button>
        <Button
          className="text-white bg-blue-800"
          endContent={<Linkedin className="w-4 aspect-square" />}
        >
          LinkedIn
        </Button>
        <Button
          className="bg-gray-800 text-white"
          endContent={<Github className="w-4 aspect-square" />}
        >
          Guestbook
        </Button>
      </div> */}
    </>
  );
}
