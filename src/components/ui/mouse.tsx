import { ArrowDownIcon } from '@primer/octicons-react';
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
      className="right-0 bottom-0 z-50 fixed flex flex-col justify-center items-center gap-8 p-8 animate-linear pointer-events-none"
      style={{ opacity }}
    >
      <p className="-rotate-90">Scroll down</p>
      <ArrowDownIcon size={24} />
    </div>
  );
}
