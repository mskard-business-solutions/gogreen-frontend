import BlogPostViewer from '@/components/BlogPostViewer';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const API_BASE_URL = process.env.NEXT_PUBLIC_NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

// Disable caching for demo purposes to see new posts immediately
export const dynamic = 'force-dynamic';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: any;
  coverImage?: string;
  seoKeywords?: string[];
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/posts/${slug}`, {
      headers: { 'Cache-Control': 'no-store' },
    });
    
    return res.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Extract text from content for description
  const extractText = (content: any): string => {
    if (!content || !content.content) return '';
    let text = '';
    for (const node of content.content) {
      if (node.type === 'paragraph' && node.content) {
        for (const child of node.content) {
          if (child.text) text += child.text + ' ';
        }
      }
    }
    return text.slice(0, 160).trim();
  };

  const description = extractText(post.content);
  const keywords = Array.isArray(post.seoKeywords) ? post.seoKeywords.join(', ') : 'irrigation, agriculture, farming, drip irrigation, sprinkler systems';

  return {
    title: `${post.title} | Vidhi greenO2`,
    description: description || post.title,
    keywords: keywords,
    openGraph: {
      title: post.title,
      description: description || post.title,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
      publishedTime: post.publishedAt || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description || post.title,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Extract description for structured data
  const extractText = (content: any): string => {
    if (!content || !content.content) return '';
    let text = '';
    for (const node of content.content) {
      if (node.type === 'paragraph' && node.content) {
        for (const child of node.content) {
          if (child.text) text += child.text + ' ';
        }
      }
    }
    return text.slice(0, 160).trim();
  };

  const description = extractText(post.content);
  const keywords = Array.isArray(post.seoKeywords) ? post.seoKeywords : [];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: description || post.title,
    image: post.coverImage || '',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Vidhi greenO2',
      url: 'https://vidhienterprises.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vidhi greenO2',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vidhienterprises.com/logo.png'
      }
    },
    keywords: keywords.join(', '),
  };

  return (
    <main className="min-h-screen bg-[#f6fff7]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative py-32 bg-gradient-to-br from-[#145a32] to-[#52b788] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <nav className="flex justify-center mb-8">
            <ol className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px]"></i></li>
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><i className="fa fa-chevron-right mx-2 text-[10px]"></i></li>
              <li className="text-[#95d5b2]">{post.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-heading animate-fadeIn max-w-4xl mx-auto">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm gap-4">
            <time dateTime={post.publishedAt || post.createdAt}>
              {post.publishedAt 
                ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })
                : 'Draft'}
            </time>
            <span>•</span>
            <span>By Vidhi Enterprises</span>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <BlogPostViewer content={post.content} />
        </div>
        
        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-success text-white px-8 text-green-900 py-3 rounded-full font-bold hover:bg-[#145a32] transition-all duration-300 shadow-lg hover:shadow-xl hover:text-white"
          >
            <i className="fa fa-arrow-left"></i>
            Back to All Posts
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
