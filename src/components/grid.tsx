import Image from 'next/image';
import { HTMLAttributes, useEffect, useState } from 'react';
import { username } from './lib';

export default function Grid({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok)
          throw new Error(`GET Error fetching repositories ${response.status}`);

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
        return;
      }
    };

    fetchRepositories();
  }, []);
  return (
    <div
      className="gap-4 grid grid-cols-3 *:bg-[#0095D5]/20 dark:*:bg-[#806EE3]/20 mx-auto px-8 *:p-4 *:rounded-xl max-w-4xl"
      {...props}
    >
      <div className="col-span-3 md:col-span-2">
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=${username}&text_color=fff&icon_color=fff&border_color=ffffff00&bg_color=ffffff00&theme=dark&hide_title=true&show_icons=true&line_height=18`}
          alt="userstats"
          width={50}
          height={50}
          className="w-full invert dark:invert-0"
          unoptimized
        />
      </div>
      <div className="flex justify-between items-center col-span-3 md:col-span-1">
        <p>
          <span className="font-bold text-6xl">{user?.public_repos || 0}</span>{' '}
          public repositories
        </p>
      </div>
      <div className="*:brightness-0 gap-4 grid grid-cols-4 md:grid-cols-2 col-span-3 md:col-span-1 md:*:p-4 *:w-full *:aspect-square *:grayscale *:invert-0 dark:*:invert">
        <Image src="/nextjs.svg" alt="nextjs" width={50} height={50} />
        <Image src="/git.svg" alt="git" width={50} height={50} />
        <Image src="/rust.svg" alt="rust" width={50} height={50} />
        <Image src="/figma.svg" alt="figma" width={50} height={50} />
      </div>
      <div className="col-span-3 md:col-span-2">
        <Image
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&text_color=fff&border_color=ffffff00&bg_color=ffffff00&theme=dark&hide_title=true&line_height=18`}
          alt="userstats"
          width={50}
          height={50}
          className="w-full invert dark:invert-0"
          unoptimized
        />
      </div>
    </div>
  );
}
