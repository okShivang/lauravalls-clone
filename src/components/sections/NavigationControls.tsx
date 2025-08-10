import React from 'react';

const NavigationControls = () => {
  return (
    <aside className="fixed top-10 right-12 z-40 hidden lg:flex flex-col items-center space-y-4">
      {/* Scroll Controls */}
      <div className="flex flex-col items-center space-y-2.5">
        <a
          href="#hero"
          aria-label="Scroll to top"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-neutral-400 transition-colors hover:border-white hover:text-white"
        >
          <span className="text-xl font-light leading-none">↑</span>
        </a>
        <a
          href="#footer"
          aria-label="Scroll to bottom"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600 text-neutral-400 transition-colors hover:border-white hover:text-white"
        >
          <span className="text-xl font-light leading-none">↓</span>
        </a>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-6 bg-neutral-600" />

      {/* Social Links */}
      <div className="flex flex-col items-center space-y-3">
        <a
          href="https://www.instagram.com/p/DCFc6rUuQ-L/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] uppercase-spaced text-neutral-400 transition-colors hover:text-white"
        >
          Instagram ↗
        </a>
        <a
          href="https://www.behance.net/gallery/162057935/Animated-illustrations"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[11px] uppercase-spaced text-neutral-400 transition-colors hover:text-white"
        >
          Behance ↗
        </a>
      </div>
    </aside>
  );
};

export default NavigationControls;
