import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface HoverCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  heading?: ReactNode | string;
}

export default function HoverCard({
  children,
  heading,
  href = '/',
  ...props
}: HoverCardProps) {
  return (
    <div className="relative rounded-lg font-medium dark:hover:text-white/50 group">
      <Link
        href={href}
        target="_blank"
        className="flex items-center p-2"
        {...props}
      >
        {heading || ''}
      </Link>
      <div className="group-hover:visible top-full left-0 absolute bg-white opacity-0 group-hover:opacity-100 shadow-xl p-4 md:pr-8 rounded-lg w-max text-black transition-opacity duration-300 invisible">
        {children}
      </div>
    </div>
  );
}
