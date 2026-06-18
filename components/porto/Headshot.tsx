'use client';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Shows /img/headshot.png once it exists; until then it falls back to a
 * styled "RW" monogram so the layout never shows a broken image.
 */
export function Headshot() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-secondary/50 shadow-sm">
      {!failed ? (
        <Image
          src="/img/headshot.png"
          alt="Rico Wijaya"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-background">
          <span className="select-none text-6xl font-bold tracking-tight text-muted-foreground/60">
            RW
          </span>
        </div>
      )}
    </div>
  );
}
