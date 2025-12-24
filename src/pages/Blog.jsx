import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, User, Calendar } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Home.css';

const blogPosts = [
    {
        id: 1,
        title: "How to Improve Your CIBIL Score Quickly",
        excerpt: "A low CIBIL score can lead to loan rejections. Follow these simple tips to boost your credit score above 750.",
        category: "Credit Score",
        date: "Dec 15, 2023",
        author: "Finance Expert",
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=CIBIL+Score"
    },
    {
        id: 2,
        title: "Top 5 Lifetime Free Credit Cards in India",
        excerpt: "Stop paying annual fees! Check out our curated list of the best lifetime free credit cards with great rewards.",
        category: "Credit Cards",
        date: "Dec 12, 2023",
        author: "Team Manage Money",
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Credit+Cards"
    },
    {
        id: 3,
        title: "Personal Loan vs. Credit Card Loan: Which is Better?",
        excerpt: "Confused between a personal loan and a loan on credit card? We compare interest rates and tenure to help you decide.",
        category: "Loans",
        date: "Dec 10, 2023",
        author: "Finance Expert",
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Loans"
    }
];

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Financial Guides & Blog - Manage Money</title>
                <meta name="description" content="Read expert financial advice, tips on credit cards, loans, and CIBIL score improvement." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="page-title">Financial Insights</h1>
                        <p className="page-subtitle">Expert guides to help you make smart money decisions.</p>
                    </div>

                    <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="hover-card h-full flex flex-col p-0 overflow-hidden">
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                        <BookOpen size={48} opacity={0.5} />
                                    </div>
                                    {/* <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> */}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-muted mb-3">
                                        <span className="bg-blue-50 text-primary px-2 py-1 rounded">{post.category}</span>
                                        <div className="flex items-center gap-1"><Calendar size={12} /> {post.date}</div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted text-sm mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-auto self-start" href={`/blog/${post.id}`}>
                                        Read More <ArrowRight size={16} className="ml-1" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
