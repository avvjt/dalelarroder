'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { ArrowDownIcon } from '../layouts/icons/arrow-down-icon';
import { ScrollContext } from '../providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Abhi, I&apos;m a software developer, and I love building
        things for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div
            ref={ref}
            className="flex cursor-default flex-col space-y-2 -mt-36"
          >
            <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
              Abhi
            </h1>
            <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
              I build things for the WEB and APPS
            </h2>
            <Link
              href="/about"
              className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
            >
              Read more about me &rarr;
            </Link>
          </div>
          <motion.div
            animate={{
              transform: `translateY(${progress * 10}vh)`,
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
          >
            <div
              role="presentation"
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() => {
                const intro = document.querySelector('#intro');

                intro?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDownIcon size={20} />
            </div>
          </motion.div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
}
