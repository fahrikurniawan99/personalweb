"use client";

import * as React from "react";
import {
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavbarTop() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Home", route: "/" },
    { text: "Projects", route: "/projects" },
    { text: "Blog", route: "/blogs" },
  ];

  return (
    <Navbar className="py-2 bg-slate-50">
      <NavbarBrand>
        <Link href={"/"} className="font-bold text-xl text-zinc-600">
          FahriKurniawan
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden lg:flex">
        {menuItems.map((menu) => (
          <NavbarItem key={menu.route}>
            <Link className="text-zinc-400" href={menu.route}>
              {menu.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden lg:flex">
        <Button color="primary">Masuk</Button>
        <Button color="primary" variant="flat">
          Buat Akun
        </Button>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="flex lg:hidden"
      />
      <NavbarMenu className="pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.route}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider className="mb-2 mt-5" />
        <Button color="primary">Masuk</Button>
        <Button color="primary" className="mt-2" variant="flat">
          Buat Akun
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
