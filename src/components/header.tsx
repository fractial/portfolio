'use client';

import { username } from '@/app/page';
import HoverCard from '@/components/ui/hover-card';
import {
  MailIcon,
  RepoForkedIcon,
  RepoIcon,
  SparkleFillIcon,
  StackIcon,
} from '@primer/octicons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const mail = 'timo.staab0@gmail.com';

export default function Header() {
  const [repositories, setRepositories] = useState<any | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
        );

        if (!response.ok)
          throw new Error(`GET Error fetching repositories ${response.status}`);

        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error(error);
        return;
      }
    };

    fetchRepositories();
  }, []);
  return (
    <header className="absolute flex justify-center md:justify-start items-center gap-4 px-8 w-full h-24">
      <Link href="/">
        <Image
          src="/fractial.svg"
          alt="Fractial Logo"
          width={40}
          height={40}
          className="hover:scale-110 transition-transform duration-300"
          priority
        />
      </Link>
      <div className="md:flex hidden">
        <HoverCard
          href={`https://github.com/${username}`}
          heading={
            <>
              <p className="mr-1">Projects</p>
              <SparkleFillIcon size={12} />
            </>
          }
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <Link
                href={`https://github.com/${username}?tab=repositories`}
                className="hover:text-blue-500"
              >
                <div className="flex items-center gap-4">
                  <RepoIcon size={24} />
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Repositories</h1>
                    <p className="text-sm">Find all my repos</p>
                  </div>
                </div>
              </Link>
              <Link
                href={`https://github.com/fractial?tab=repositories&type=fork`}
                className="hover:text-blue-500"
              >
                <div className="flex items-center gap-4">
                  <RepoForkedIcon size={24} />
                  <div className="flex flex-col">
                    <h1 className="font-semibold">Forks</h1>
                    <p className="text-sm">Find all my forks</p>
                  </div>
                </div>
              </Link>
            </div>
            {repositories && (
              <>
                <div className="border-zinc-200 mx-4 border-l-2" />
                <ul className="flex flex-col gap-2">
                  <h1 className="font-semibold">Latest</h1>
                  {repositories
                    .slice(0, 5)
                    .map((repo: { name: string; html_url: string }) => (
                      <li
                        key={repo?.name}
                        className="text-sm hover:text-[#0095D5]"
                      >
                        <Link href={repo?.html_url}>
                          {repo?.name.charAt(0).toUpperCase() +
                            repo?.name.slice(1)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
        </HoverCard>
        <HoverCard heading="Uses">
          <Link
            href="#stack"
            className="flex items-center gap-4 hover:text-[#0095D5]"
          >
            <StackIcon size={24} />
            <div className="flex flex-col">
              <h1>Stacked</h1>
              <p className="text-sm">My tech stack</p>
            </div>
          </Link>
        </HoverCard>
        <HoverCard heading="Contact" href={`mailto:${mail}`}>
          <Link
            href={`mailto:${mail}`}
            className="flex items-center gap-4 hover:text-[#0095D5]"
          >
            <MailIcon size={24} />
            <div className="flex flex-col">
              <h1>Mail</h1>
              <p className="text-sm">{mail}</p>
            </div>
          </Link>
        </HoverCard>
      </div>
    </header>
  );
}
