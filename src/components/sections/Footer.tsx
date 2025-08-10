"use client";

import { ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer id="footer" className="bg-accent-orange-red text-black font-body">
            <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-10 md:py-24">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-32">
                    {/* Left Column: Newsletter */}
                    <div>
                        <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                            Get notified about new template launches straight to your inbox.
                        </h2>
                        <form
                            className="mt-12"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div className="relative flex items-center">
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border-0 border-b border-black bg-transparent py-4 text-lg font-body placeholder:text-black/80 focus:border-black focus:outline-none focus:ring-0"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 p-2"
                                    aria-label="Subscribe"
                                >
                                    <ArrowRight className="h-6 w-6 text-black" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Contact */}
                    <div className="flex flex-col">
                        <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                            Let&apos;s talk.
                        </h2>
                        <a
                            href="mailto:info@lauravalls.es"
                            className="mt-2 font-heading text-4xl font-semibold leading-tight tracking-tight lg:text-5xl"
                        >
                            info@lauravalls.es
                        </a>
                    </div>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="mt-24 border-t border-black pt-8">
                    <p className="font-body text-base">
                        Designed and built by Laura Valls, ©2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;