"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function PortraitImage({
  src,
  fallback,
  alt,
  priority,
  sizes,
}: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <Image
      src={errored ? fallback : src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => setErrored(true)}
      className="object-cover"
      unoptimized={errored}
    />
  );
}
