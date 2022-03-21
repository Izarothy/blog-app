import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
  title: string;
  image: string;
  slug: string;
  content: string;
};

export const PostLookup = ({ title, image, slug, content }: Props) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <article className="max-w-sm cursor-pointer flex w-full gap-3 dark:border border-gray-500 rounded-lg">
        <div>
          <Image
            src={image}
            layout="fixed"
            width="70"
            height="70"
            alt="Blog image"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-md  [text-shadow:2px_2px_#111] ">{title}</h3>
          <p className="text-[0.6rem]">{content?.slice(0, 50)}...</p>
        </div>
      </article>
    </Link>
  );
};
