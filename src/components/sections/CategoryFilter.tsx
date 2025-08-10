"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "motion", name: "Motion", short: "M", count: 21 },
  { id: "web", name: "Web design", short: "W", count: 23 },
  { id: "graphic", name: "Graphic and editorial", short: "G", count: 32 },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("motion");

  return (
    <div className="mx-auto max-w-[1792px] px-5 sm:px-10 lg:px-[60px] py-6 md:py-5 font-body">
      <div className="flex justify-between items-center">
        <nav>
          <ul className="flex items-center gap-2 md:gap-6">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "transition-colors duration-300 flex items-center justify-center",
                    // Mobile Pill Styles
                    "md:hidden rounded-full h-[34px] w-[68px] text-[15px] font-medium",
                    // Desktop Text Link Styles
                    "hidden md:inline-flex md:bg-transparent md:p-0 md:text-lg",
                    // Conditional styles for active/inactive states
                    activeCategory === category.id
                      ? "bg-white text-black md:text-accent-orange-red md:bg-transparent"
                      : "bg-[#1C1C1C] text-[#898989] md:text-text-secondary md:hover:text-text-primary"
                  )}
                >
                  <span className="md:hidden">{category.short}</span>
                  <span className="hidden md:inline">{category.name}</span>
                  <span className="ml-[2px] md:ml-1">({category.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          {/* Mobile Arrows */}
          <div className="flex md:hidden items-center gap-2">
            <a href="#hero" aria-label="Scroll to top" className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:bg-white/10 transition-colors">
              ↑
            </a>
            <a href="#footer" aria-label="Scroll to bottom" className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:bg-white/10 transition-colors">
              ↓
            </a>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden md:flex items-center gap-4 text-text-secondary text-lg">
            <a href="#hero" aria-label="Scroll to top" className="hover:text-text-primary transition-colors">
              ↑
            </a>
            <a href="#footer" aria-label="Scroll to bottom" className="hover:text-text-primary transition-colors">
              ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
