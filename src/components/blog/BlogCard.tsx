import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-gray-800 hover:border-[#c084fc]/50 transition-all duration-300">
      <Link to={`/blog/${post.slug}`}>
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={post.coverImage}
            alt={post.title}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              <span className="mx-1">·</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white hover:text-[#c084fc] transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-base text-gray-300">
                {post.excerpt}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={post.author.avatar}
                alt={post.author.name}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">
                {post.author.name}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}