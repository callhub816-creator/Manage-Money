import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';
import blogs from '../../../data/blogs.json';

const BlogList: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <SEO
                title="Financial Blogs & Guides | ManageMoney"
                description="Stay updated with the latest financial tips, loan guides, credit card reviews, and money-saving strategies."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Financial Insights & Guides</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Empower yourself with expert knowledge on personal finance, credit scores, and smart investing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.slug}`}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase">
                                        {blog.category}
                                    </span>
                                    <span className="text-slate-400 text-sm">{blog.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                    {blog.description}
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold text-sm">
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
