import React from "react";
import Image from "next/image";
import Link from "next/link";

// This interface should match your BlogType in data.ts
interface BlogProps {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
}

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg bg-[#1b1021] transition-all duration-500 hover:translate-y-[-10px]">
      <div className="relative h-[200px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-gray-400">{blog.date}</span>
        <h3 className="text-xl font-bold text-white mt-2 mb-4">{blog.title}</h3>
        <p className="text-gray-300 mb-4">{blog.summary}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="text-purple-500 hover:text-purple-400"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
