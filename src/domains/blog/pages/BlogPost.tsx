import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';
import blogs from '../../../data/blogs.json';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={`${blog.title} | ManageMoney`}
                description={blog.description}
            />

            {/* Hero Section */}
            <div className="relative h-[400px]">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-blue-400 font-semibold mb-4 hover:text-blue-300 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase">
                                {blog.category}
                            </span>
                            <span className="text-slate-300 text-sm">{blog.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {blog.title}
                        </h1>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                {blog.author[0]}
                            </div>
                            <div className="text-white">
                                <p className="font-semibold">{blog.author}</p>
                                <p className="text-slate-400 text-xs">Financial Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div
                    className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-img:rounded-3xl"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Newsletter / CTA Section */}
                <div className="mt-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Enjoyed this article?</h3>
                        <p className="text-slate-600 mb-8">
                            Subscribe to our newsletter and get the latest financial tips and insights delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
