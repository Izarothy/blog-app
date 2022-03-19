import { url } from 'inspector';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
  title: string;
  image?: string;
  slug: string;
  createdAt: string;
};

export const PostLookup = ({ title, image, createdAt, slug }: Props) => {
  const [creationDate, setCreationDate] = useState('');
  const date = new Date(createdAt);

  useEffect(() => {
    // Display in format "monthname day year"
    if (date) setCreationDate(date.toDateString().slice(3, 15));
  }, []);

  return (
    <Link href={`/posts/${slug}`}>
      <article
        className="relative h-36 rounded-md px-3 cursor-pointer"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="absolute right-2 top-2 text-sm text-gray-200">
          {creationDate}
        </span>
        <h3 className="text-lg bottom-2 absolute [text-shadow:2px_2px_#111] max-w-[60%]">
          {title}
        </h3>
      </article>
    </Link>
  );
};
