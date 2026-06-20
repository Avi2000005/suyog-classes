/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function CourseTicker() {
  const coursesList = [
    '9th & 10th State Board',
    '9th & 10th CBSE',
    '9th & 10th ICSE',
    '11th & 12th Science Boards',
    'MHT-CET Entrance Batch',
    'IIT-JEE & NEET Foundation'
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-red text-white py-3.5 sm:py-4 font-sans font-extrabold text-xs sm:text-sm tracking-widest uppercase border-y border-red-800 shadow-md select-none z-10">
      <div className="flex w-max">
        {/* First marquee list copy */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {coursesList.map((course, index) => (
            <React.Fragment key={index}>
              <span className="font-display font-extrabold">{course}</span>
              <span className="text-brand-gold text-lg">★</span>
            </React.Fragment>
          ))}
        </div>
        {/* Second copy for seamless looping */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-16 pr-12 sm:pr-16" aria-hidden="true">
          {coursesList.map((course, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="font-display font-extrabold">{course}</span>
              <span className="text-brand-gold text-lg">★</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
