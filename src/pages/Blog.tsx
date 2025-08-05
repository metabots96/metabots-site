import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogPost as BlogPostType } from '../types/blog';
import { getAllPosts } from '../lib/blog';
import { BlogPost } from './BlogPost';

export function Blog() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Background>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              {/* Hero Section */}
              <div className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    Latest Insights
                    <span className="block text-[#c084fc]">From Our Experts</span>
                  </h1>
                  <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                    Stay updated with the latest trends, insights, and best practices in AI technology.
                  </p>
                </div>
              </div>

              {/* Blog Grid Section */}
              <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <BlogGrid posts={posts} />
                </div>
              </div>
            </main>
          } />
          <Route path=":slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Background>
  );
}