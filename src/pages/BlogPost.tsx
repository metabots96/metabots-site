import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';
import { getPostBySlug } from '../lib/blog';
import { Button } from '../components/Button';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const postData = await getPostBySlug(slug);
        if (postData) {
          setPost(postData);
        } else {
          navigate('/blog', { replace: true });
        }
      }
    };
    fetchPost();
  }, [slug, navigate]);

  if (!post) {
    return null;
  }

  return (
    <main className="bg-black py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          onClick={() => navigate('/blog')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <div className="flex items-center mb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-white font-medium">{post.author.name}</p>
            <div className="flex text-sm text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
              <span className="mx-1">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-8">
          {post.title}
        </h1>

        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  );
}