"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <main>
      <nav className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
            <ProductItem
              title="Music Academy"
              href="/"
              src="/music.jpg"
              description="Explore Different Varities of Music based on your taste!"
            />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Composition</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
        </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://x.com/_R_T_K__">X (Twitter)</HoveredLink>
            <HoveredLink href="https://github.com/RITIK-coder-1">GitHub</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/ritik-mahapatra/">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </nav>
    </main>
  )
}

export default Navbar