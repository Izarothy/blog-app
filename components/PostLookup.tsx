import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  image: string;
  slug: string;
  currentDate: string;
  author: string;
};

export const PostLookup = ({
  title,
  image,
  slug,
  currentDate,
  author,
}: Props) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <article className="max-w-sm cursor-pointer flex w-full gap-3">
        <div>
          <Image
            src={image}
            layout="fixed"
            width="80"
            height="70"
            alt="Blog image"
            objectFit="cover"
            className="rounded-lg"
            quality="100"
          />
        </div>
        <div className="flex flex-col justify-between pb-3 w-full">
          <h3 className="text-md dark:[text-shadow:2px_2px_#111] font-semibold">
            {title}
          </h3>
          <div className="flex justify-between text-gray-500 dark:text-gray-300 text-[0.6rem] w-4/5">
            <span className="flex gap-1">
              {/* Calendar SVG  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h4>{currentDate}</h4>
            </span>
            <span className="flex gap-1">
              {/* User SVG  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <h4>{author}</h4>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
