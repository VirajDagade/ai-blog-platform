import React from "react";
import { assets, footer_data } from "../assets/assets";

function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Column 1: Logo + Description (spans 2 columns for more space) */}
        <div className="md:col-span-2">
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-3">
            QuickBlog is your go-to platform for the latest insights in tech,
            lifestyle, and innovation. Join our community to stay updated with
            expert articles, tutorials, and news that matter.
          </p>
        </div>

        {/* Columns 2, 3, 4: Footer Sections (evenly spaced) */}
        {footer_data.slice(0, 3).map((section, index) => (
          <div key={index} className="md:col-span-1">
            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              {section.title}
            </h3>
            <ul className="text-sm space-y-1">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;

// case-sensitive rename test
