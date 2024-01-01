import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavbarTop() {
  return (
    <Navbar className="py-2 bg-slate-50">
      <NavbarBrand>
        <Link href={"/"} className="font-bold text-xl text-zinc-600">
          FahriKurniawan
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden lg:flex">
        <NavbarItem>
          <Link className="text-zinc-400" href={"/"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-400" href={"/projects"}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-400" href={"/blog"}>
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden lg:flex">
        <Button color="primary">Masuk</Button>
        <Button color="primary" variant="flat">
          Buat Akun
        </Button>
      </NavbarContent>
      <NavbarMenuToggle className="flex lg:hidden" />
    </Navbar>
  );
}
