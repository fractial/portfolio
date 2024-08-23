import { ButtonHTMLAttributes, ReactNode, useRef, useState } from 'react';

export interface HoverCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  heading?: ReactNode | string;
}

export default function HoverCard({
  children,
  heading,
  ...props
}: HoverCardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      event.relatedTarget !== buttonRef.current &&
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setIsVisible(false);
    }
  };

  return (
    <div
      onBlur={handleBlur}
      className="relative rounded-lg font-medium dark:hover:text-white/50 group"
    >
      <button
        onFocus={() => setIsVisible(true)}
        onClick={() => setIsVisible(false)}
        ref={buttonRef}
        className="flex items-center p-2 cursor-pointer"
        {...props}
      >
        {heading || ''}
      </button>
      <div
        className={`${
          isVisible ? 'visible opacity-100' : 'invisible opacity-0'
        } group-hover:visible group-hover:opacity-100 top-full left-0 absolute bg-white shadow-xl p-4 md:pr-8 rounded-lg w-max text-black transition-opacity duration-300`}
      >
        {children}
      </div>
    </div>
  );
}
