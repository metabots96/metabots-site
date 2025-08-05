import { BlogPost } from '../types/blog';

// Simulated database - replace with actual CMS/database later
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    slug: 'future-of-ai-in-business',
    excerpt: 'Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.',
    content: `
# The Future of AI in Business

Artificial intelligence is transforming how businesses operate...

## Key Trends

1. Automated Customer Service
2. Predictive Analytics
3. Process Automation

## Impact on Industries

AI is revolutionizing various sectors...
    `,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    date: '2024-03-16',
    readTime: '5 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    }
  },
  // Add more posts as needed
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return posts.find(post => post.slug === slug);
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  return posts.slice(0, limit);
}