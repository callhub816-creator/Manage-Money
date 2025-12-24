import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Home.css';

const BlogPost = () => {
    const { id } = useParams();

    // In a real app, fetch data based on ID. 
    // For now, we'll static display appropriate for any ID or a generic one.
    const post = {
        title: "How to Improve Your CIBIL Score Quickly",
        category: "Credit Score",
        date: "Dec 15, 2023",
        author: "Finance Expert",
        content: `
            <p class="mb-4">Maintaining a good CIBIL score is crucial for getting loans and credit cards approved quickly. A score above 750 is generally considered good.</p>
            
            <h2 class="text-xl font-bold mb-3 mt-6">1. Pay Your Dues on Time</h2>
            <p class="mb-4">Late payments are the biggest reason for a dip in your credit score. Ensure you pay your credit card bills and loan EMIs on or before the due date.</p>

            <h2 class="text-xl font-bold mb-3 mt-6">2. Maintain Low Credit Utilization</h2>
            <p class="mb-4">Try not to use more than 30% of your total credit limit. High utilization suggests credit hungriness and can lower your score.</p>

            <h2 class="text-xl font-bold mb-3 mt-6">3. Monitor Your Credit Report</h2>
            <p class="mb-4">Check your report regularly for errors. If you find any discrepancies, raise a dispute with the credit bureau immediately.</p>

            <h2 class="text-xl font-bold mb-3 mt-6">4. Avoid Multiple Loan Applications</h2>
            <p class="mb-4">Every time you apply for a loan, a hard inquiry is made. Too many inquiries in a short span can negatively impact your score.</p>

            <p class="mt-6 font-semibold">Start implementing these tips today and see your score rise!</p>
        `
    };

    return (
        <>
            <Helmet>
                <title>{post.title} - Manage Money</title>
                <meta name="description" content="Read this guide on Manage Money." />
            </Helmet>

            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="mb-6">
                        <Link to="/blog" className="flex items-center text-muted hover:text-primary transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Guides
                        </Link>
                    </div>

                    <Card className="p-8 md:p-12">
                        <div className="mb-6">
                            <span className="bg-blue-50 text-primary px-3 py-1 rounded text-sm font-medium">{post.category}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>

                        <div className="flex items-center gap-6 text-sm text-muted mb-8 pb-8 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <User size={16} /> <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} /> <span>{post.date}</span>
                            </div>
                        </div>

                        <div className="blog-content text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                            <div className="flex gap-4">
                                <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"><Facebook size={20} /></button>
                                <button className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100"><Twitter size={20} /></button>
                                <button className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100"><Linkedin size={20} /></button>
                                <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100"><Share2 size={20} /></button>
                            </div>
                        </div>
                    </Card>

                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-bold mb-4">Ready to improve your finances?</h3>
                        <div className="flex justify-center gap-4">
                            <Button href="/cibil-score" variant="primary">Check Free CIBIL</Button>
                            <Button href="/personal-loans" variant="outline">Compare Loans</Button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default BlogPost;
