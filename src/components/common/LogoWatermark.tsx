'use client';
import Image from 'next/image';

type Position = 'center' | 'topRight' | 'bottomLeft';

export default function LogoWatermark({
  size = 640,
  opacity = 0.06,
  rotation = -8,
  position = 'center',
}: {
  size?: number;
  opacity?: number;
  rotation?: number;
  position?: Position;
}) {
  const posClass =
    position === 'center'
      ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      : position === 'topRight'
      ? 'top-8 right-8'
      : 'bottom-8 left-8';

  return (
    <div className={`absolute ${posClass} z-0 pointer-events-none select-none`}>
      <Image
        src="/LOGO.png"
        alt=""
        width={size}
        height={size}
        className="grayscale blur-[0.5px] mix-blend-overlay"
        style={{ opacity, transform: `rotate(${rotation}deg)` }}
        priority={false}
      />
    </div>
  );
}