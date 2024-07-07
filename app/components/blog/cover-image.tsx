import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full max-h-svh", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630} // Ajustamos la altura aquí
      loading='lazy'
    />
  );

  return (
    <div className='sm:mx-0 max-h-min'>
      <Suspense
        fallback={
          <div className='w-full h-[630px] bg-gray-200 animate-pulse'></div>
        }
      >
        {slug ? (
          <Link href={`/posts/${slug}`} aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </Suspense>
    </div>
  );
};

export default CoverImage;
