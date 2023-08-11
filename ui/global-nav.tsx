'use client';

import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { NextLogo } from "./next-logo";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
   <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-gray-200 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
    <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
      <Link href="/" className="group flex w-full items-center gap-x-2.5" onClick={close}>
        <div className="h-7 w-7 rounded-full border border-white/30 group-hover:white/50">
          {/* <NextLogo /> */}
        </div>
        <h3>
          Hello
        </h3>
      </Link>
    </div>
   </div> 
  );
}
