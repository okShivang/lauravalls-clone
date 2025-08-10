import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="overflow-hidden text-text-primary"
    >
      <div className="mx-auto w-full max-w-[1920px] px-5 py-7 md:px-10 md:py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-8">
          <h1
            id="hero-title"
            className="font-heading shrink-0 text-accent-orange-red font-black uppercase text-[clamp(6rem,18.5vw,12.5rem)] leading-[0.8] tracking-[-0.02em]"
          >
            LV—©<br />2025
          </h1>
          
          <div className="flex shrink-0 items-start gap-x-8 md:pt-10 md:pl-8 lg:gap-x-[4.5rem]">
            <div className="font-body text-[13px] font-semibold uppercase leading-[1.3] tracking-[0.05em]">
              <p>Laura</p>
              <p>Valls</p>
            </div>
            <div className="font-body text-[13px] font-medium uppercase leading-[1.3] tracking-[0.05em] text-text-secondary">
              <p>Visual &amp;</p>
              <p>Motion</p>
              <p>Designer</p>
            </div>
            <div className="font-body text-[13px] font-medium uppercase leading-[1.3] tracking-[0.05em] text-text-secondary">
              <p>Sthlm</p>
              <p>Sweden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;