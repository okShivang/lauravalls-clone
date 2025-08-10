"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const ArchivePromo = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://lauravallsarchive.framer.website/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-[#EDEDED] rounded-xl shadow-lg overflow-hidden w-[260px] transform transition-transform duration-300 ease-out group-hover:scale-105">
          <div className="p-4 flex justify-between items-start">
            <div className="text-black font-body">
              <h3 className="text-[15px] font-bold leading-tight">
                Looking for this?
              </h3>
              <p className="text-[13px] leading-tight mt-0.5">
                Check it out here
              </p>
            </div>
            <button
              onClick={handleClose}
              className="bg-accent-orange-red rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4 hover:scale-110 transition-transform"
              aria-label="Close promotion"
            >
              <X className="text-white w-4 h-4" />
            </button>
          </div>
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9a6d71e3-a793-4ec6-a564-4fc332908c0c-lauravalls-es/assets/images/8xGgGWxblGGNqZxShIc3NgG7YA-2.png"
              alt="Archive website preview"
              width={260}
              height={195}
              className="w-full h-auto"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArchivePromo;