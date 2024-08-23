'use client';

import Grid from '@/components/grid';
import Header from '@/components/header';
import { mail, username } from '@/components/lib';
import Mouse from '@/components/ui/mouse';
import {
  HeartFillIcon,
  HeartIcon,
  MailIcon,
  MarkGithubIcon,
  TelescopeFillIcon,
  TelescopeIcon,
} from '@primer/octicons-react';
import Link from 'next/link';
import { useState } from 'react';

// bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]

// [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isHeartHovered, setIsHeartHovered] = useState<boolean>(false);
  return (
    <main className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#0095D580,#0095D500)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#806EE380,#806EE300)]">
      <Header />
      <section className="flex md:flex-row flex-col justify-center items-center gap-4 mx-auto px-8 max-w-4xl h-dvh">
        <div className="flex flex-col gap-4 w-full text-center md:text-left">
          <h1 className="font-bold text-4xl leading-tight">
            Design, Build &<br /> Repeat
          </h1>
          <p className="mb-8">
            Hello there
            <br />I am <span className="underline">{username}</span>, a german
            developer focused on everything related to javascript applications.
          </p>
          <div className="flex md:flex-row flex-col justify-center md:justify-normal gap-4 mb-8">
            <Link
              href="#stack"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex flex-1 justify-center items-center gap-2 bg-black dark:bg-white px-4 py-2 rounded-md text-nowrap text-white dark:text-black transition-colors duration-200"
            >
              {isHovered ? <TelescopeFillIcon /> : <TelescopeIcon />}
              <p className="font-medium">Explore</p>
            </Link>
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              className="flex flex-1 justify-center items-center gap-2 hover:bg-black/20 dark:hover:bg-white/20 px-4 py-2 rounded-md text-nowrap transition-colors duration-200"
            >
              <MarkGithubIcon />
              <p className="font-medium">View on GitHub</p>
            </Link>
          </div>
        </div>
        <svg
          className="md:block hidden rounded-xl w-full aspect-square fill-white/80 dark:fill-black/80"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.142 7.54635L17.7497 2.1237C16.6668 1.49848 15.3326 1.49848 14.2497 2.1237L4.85742 7.54635C3.77452 8.17156 3.10742 9.32701 3.10742 10.5774V21.4227C3.10742 22.6732 3.77452 23.8286 4.85742 24.4538L14.2497 29.8765C15.3326 30.5017 16.6668 30.5017 17.7497 29.8765L27.142 24.4538C28.2249 23.8286 28.892 22.6732 28.892 21.4227V10.5774C28.892 9.327 28.2249 8.17156 27.142 7.54635ZM25.3906 9.99927C25.3906 9.64201 25.2 9.31139 24.8906 9.13276L16.4997 4.28827C16.1903 4.10964 15.8091 4.10964 15.4997 4.28827L6.10742 9.71092C5.79802 9.88955 5.60742 10.2197 5.60742 10.5769V21.4222C5.60742 21.7795 5.79802 22.1096 6.10742 22.2883L14.498 27.1326C15.1647 27.5175 15.998 27.0364 15.998 26.2666V16.5773C15.998 16.22 16.1886 15.8899 16.498 15.7112L24.8906 10.8658C25.2 10.6872 25.3906 10.3565 25.3906 9.99927Z"
          />
        </svg>
      </section>
      <Grid id="stack" />
      <footer className="flex justify-between items-end mt-16 p-8 w-full">
        <div className="flex flex-col gap-2">
          <p>
            Made with{' '}
            <span
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
            >
              {isHeartHovered ? (
                <HeartFillIcon size={18} className="animate-ping" />
              ) : (
                <HeartIcon size={18} />
              )}
            </span>{' '}
            by TS
          </p>
          <p>&copy; 2024 Fractial</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href={`mailto:${mail}`}>
            <MailIcon size={24} />
          </Link>
          <Link href={`https://github.com/${username}`} target="_blank">
            <MarkGithubIcon size={24} />
          </Link>
        </div>
      </footer>
      <Mouse />
    </main>
  );
}
