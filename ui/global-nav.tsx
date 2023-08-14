'use client';

import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
import { NextLogo } from "./next-logo";
import { XIcon } from "./x-icon";
import { MenuAlt2Icon } from "./menu-alt2-icon";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b text-white border-gray-800 font-semibold bg-blue-500 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/" className="group flex w-full items-center gap-x-2.5" onClick={close} >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            App
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          menu
        </div>
        <div className="block w-6 text-white">
          { isOpen ? (<XIcon />) : (<MenuAlt2Icon />) }
        </div>
      </button>
  </div>
  );
}
