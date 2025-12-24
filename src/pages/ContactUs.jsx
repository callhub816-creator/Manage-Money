import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/Legal.css';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us. We will get back to you shortly.");
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Manage Money</title>
                <meta name="description" content="Get in touch with Manage Money team for any queries regarding credit cards, loans, or financial tools." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-10">
                        <h1 className="page-title">Contact Us</h1>
                        <p className="page-subtitle">We are here to help you with your financial journey.</p>
                    </div>

                    <div className="contact-layout" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Contact Info */}
                        <div className="contact-info display-flex flex-column gap-6">
                            <Card className="h-full">
                                <h2 className="text-xl mb-6">Get in Touch</h2>
                                <div className="contact-methods display-flex flex-column gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 rounded-full text-primary">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                            <p className="text-muted">support@managemoney.online</p>
                                            <p className="text-sm text-muted mt-1">Response time: 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-green-50 rounded-full text-accent">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">WhatsApp Support</h3>
                                            <p className="text-muted">+91 98765 43210</p>
                                            <p className="text-sm text-muted mt-1">Mon-Fri, 10 AM - 6 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-50 rounded-full text-secondary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                                            <p className="text-muted">
                                                Manage Money Financial Services,<br />
                                                Tech Park, Sector 44,<br />
                                                Gurugram, Haryana - 122002
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form">
                            <Card className="h-full">
                                <h2 className="text-xl mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="display-flex flex-column gap-4">
                                    <Input label="Your Name" placeholder="John Doe" required />
                                    <Input label="Email Address" type="email" placeholder="john@example.com" required />
                                    <div className="input-group">
                                        <label className="input-label">Subject</label>
                                        <select className="input-field select-field">
                                            <option>General Inquiry</option>
                                            <option>Credit Card Support</option>
                                            <option>Loan Assistance</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">Message</label>
                                        <textarea
                                            className="input-field"
                                            rows="4"
                                            placeholder="How can we help you?"
                                            style={{ resize: 'vertical', minHeight: '100px', fontFamily: 'inherit' }}
                                            required
                                        ></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" fullWidth className="mt-2">
                                        <Send size={18} className="mr-2" /> Send Message
                                    </Button>
                                </form>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
