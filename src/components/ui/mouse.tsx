import { ArrowLeftIcon } from '@primer/octicons-react';
import { useEffect, useState } from 'react';

export default function Mouse() {
  const [opacity, setOpacity] = useState<number>(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 0.5 - scrollY / 1000);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="right-1/2 md:right-0 bottom-12 z-50 md:fixed absolute animate-[bounce_2s_infinite] pointer-events-none"
      style={{ opacity }}
    >
      <div className="flex flex-row justify-center items-center gap-2 md:p-6 lg:p-12 w-0 -rotate-90">
        <ArrowLeftIcon size={24} />
        <p className="md:block hidden text-nowrap">Scroll down</p>
      </div>
    </div>
  );
}
