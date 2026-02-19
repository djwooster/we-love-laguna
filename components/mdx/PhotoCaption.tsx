import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export function PhotoCaption({ src, alt, caption }: Props) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg sm:rounded-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-warm-400 font-sans italic leading-relaxed px-4 sm:px-0">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
