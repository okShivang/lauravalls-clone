'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: 'motion' | 'web' | 'graphic';
  title?: React.ReactNode;
  subtext?: string[];
  mediaType: 'image' | 'video' | 'text';
  mediaSrc?: string;
  posterSrc?: string;
  bgColor?: string;
  textColor?: string;
  gridClass: string;
  titleClass?: string;
  contentClass?: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'graphic',
    title: <>HIPPO<br/>MONSTRO</>,
    subtext: ["MOTION 01", "20.10.23"],
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/Xvi7JWSsMN1o9oCpwLzJHEuixwU.mp4",
    gridClass: "col-span-2 md:col-span-1 row-span-1 aspect-square",
    bgColor: 'bg-secondary-bg',
    contentClass: 'p-4 flex flex-col justify-between',
    titleClass: "font-heading text-4xl leading-none mt-auto",
  },
  {
    id: 2,
    category: 'graphic',
    mediaType: 'image',
    mediaSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9a6d71e3-a793-4ec6-a564-4fc332908c0c-lauravalls-es/assets/images/g3IRm5ykbG0hUPRCZ81elPMfY-1.png?',
    gridClass: "col-span-2 md:col-span-1 row-span-2 aspect-[1/2] md:aspect-auto",
    bgColor: 'bg-accent-orange-red',
    contentClass: 'flex items-center justify-center',
    title: <div className="font-heading text-8xl text-stone-200" style={{ transform: 'scaleY(1.3) rotate(-1deg)', letterSpacing: '-0.05em' }}>hey</div>,
  },
  {
    id: 3,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/xYdUDpn7hRKgnk3N741mLNJc.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: 'bg-secondary-bg',
  },
  {
    id: 4,
    category: 'web',
    title: <div className="text-right"><span className="block">BRW</span><span className="block">SPACE</span><div className='mt-2 inline-block h-3 w-8 bg-accent-orange-red'></div> <div className='ml-2 inline-block h-3 w-3 bg-accent-orange-red'></div></div>,
    subtext: ["WEB - ES", "09.12"],
    mediaType: 'text',
    gridClass: "col-span-2 md:col-span-1 row-span-2 aspect-[1/2] md:aspect-auto",
    bgColor: 'bg-secondary-bg',
    contentClass: 'p-4 flex flex-col justify-between items-end text-right',
    titleClass: "font-heading text-5xl text-accent-orange-red mt-auto",
  },
  {
    id: 5,
    category: 'graphic',
    mediaType: 'text',
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: 'bg-secondary-bg',
  },
  {
    id: 6,
    category: 'web',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/ENMl7ZquEN4frQWjpkoLWneULOI.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: '#373BFF',
  },
  {
    id: 7,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/XfbRQfgFUVRmmyBCuJNVq49RME.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: 'bg-secondary-bg',
  },
  {
    id: 8,
    category: 'graphic',
    title: <h3 className="font-heading text-6xl md:text-7xl leading-none">PELIKAN</h3>,
    subtext: ["MOTION", "POSTAL"],
    mediaType: 'video',
    posterSrc: 'https://framerusercontent.com/images/1b4Lp3m38L9c8i8mBn21jKflxRo.jpg?scale-down-to=1024',
    mediaSrc: "https://framerusercontent.com/assets/0PDHnjjs0CJWkoQuQ3QFMzubbA.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-2 aspect-[1/2] md:aspect-auto',
    bgColor: 'bg-secondary-bg',
    contentClass: 'p-4 flex flex-col justify-between',
    titleClass: 'mt-auto text-black',
  },
    {
    id: 9,
    category: 'graphic',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/ciNtyAcavcMFojMems0cRdaKwhk.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: '#373BFF',
  },
  {
    id: 10,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/NkVtaiNbHzI5LjTuUi0s8cUH74.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    contentClass: 'flex items-center justify-center',
    title: <h3 className="font-heading text-7xl text-lime-400">LAZY</h3>,
    bgColor: 'bg-secondary-bg',
  },
  {
    id: 11,
    category: 'web',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/DWGsKYfgF0E7qpnRmJcioJtpIg.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-2 aspect-[1/2] md:aspect-auto',
    bgColor: '#f0f0f0',
  },
  {
    id: 12,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/qOha0uqpobqkEIBaGs8wPScNhw.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
  },
  {
    id: 13,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/wTKlV4GibYDjIsATHyFlqRgM2s.mp4",
    gridClass: 'col-span-2 md:col-span-2 row-span-2 aspect-square md:aspect-auto',
    bgColor: '#ff6a3d',
  },
  {
    id: 14,
    category: 'motion',
    mediaType: 'video',
    mediaSrc: "https://framerusercontent.com/assets/jA8ji0sxs4r5A4DafYbmceJBarM.mp4",
    gridClass: 'col-span-2 md:col-span-1 row-span-1 aspect-square',
    bgColor: 'bg-secondary-bg',
  },
];


function PortfolioCard({ item }: { item: PortfolioItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <a
      href={item.link || '#'}
      className={cn(
        "relative group overflow-hidden rounded-md",
        item.gridClass
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("absolute inset-0 w-full h-full", item.bgColor || 'bg-secondary-bg')}>
        {item.mediaType === 'video' && item.mediaSrc && (
          <video
            ref={videoRef}
            src={item.mediaSrc}
            poster={item.posterSrc}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
            preload="metadata"
          />
        )}
        {item.mediaType === 'image' && item.mediaSrc && (
          <Image src={item.mediaSrc} alt={item.id.toString()} fill className="object-cover" />
        )}
      </div>

      <div className={cn("absolute inset-0 z-10 w-full h-full", item.textColor || 'text-text-primary', item.contentClass)}>
        {item.subtext && (
            <div className='flex justify-between font-body text-[10px] uppercase tracking-wider text-text-secondary/80 font-semibold'>
                <span>{item.subtext[0]}</span>
                <span>{item.subtext[1]}</span>
            </div>
        )}
        {item.title && <div className={item.titleClass}>{item.title}</div>}
      </div>
    </a>
  );
};

const CATEGORIES = [
  { name: 'Motion', shortName: 'M', slug: 'motion', count: 21 },
  { name: 'Web design', shortName: 'W', slug: 'web', count: 23 },
  { name: 'Graphic and editorial', shortName: 'G', slug: 'graphic', count: 32 },
];


export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('motion');

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <main id="work" className="px-4 md:px-5 py-6">
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-wrap items-center gap-2">
         {CATEGORIES.map(cat => (
             <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                    "px-3 py-2 rounded-full text-xs md:text-sm font-body transition-colors duration-300 font-medium",
                    activeCategory === cat.slug
                    ? "bg-text-primary text-primary-bg"
                    : "bg-[#1C1C1C] text-[#999999] hover:bg-zinc-800"
                )}
             >
                <span className="md:hidden">{cat.shortName} ({cat.count})</span>
                <span className="hidden md:inline">{cat.name} ({cat.count})</span>
             </button>
         ))}
        </div>

        <div className="items-center gap-2 hidden md:flex">
         <a href="#hero" aria-label="Scroll to top" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1C1C] hover:bg-zinc-800 transition-colors">
            <ArrowUp size={16} />
         </a>
         <a href="#footer" aria-label="Scroll to footer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1C1C] hover:bg-zinc-800 transition-colors">
            <ArrowDown size={16} />
         </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 [grid-auto-flow:dense]">
        {filteredItems.map(item => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}