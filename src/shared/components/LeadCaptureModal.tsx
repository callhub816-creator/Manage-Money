import React, { useState, useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    productType: string;
    affiliateUrl: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, productType, affiliateUrl }) => {
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setShowThankYou(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleRedirect = () => {
        // Create a hidden link to ensure all security and affiliate rel attributes are applied
        const link = document.createElement('a');
        link.href = affiliateUrl;
        link.target = '_blank';
        link.rel = 'nofollow noopener noreferrer sponsored';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
    };

    const handleSuccess = () => {
        setShowThankYou(true);
        // Show thank you state for exactly 2 seconds before redirecting
        setTimeout(() => {
            handleRedirect();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            {showThankYou ? 'Verification Successful' : 'Get Personalized Assistance'}
                        </h2>
                        <p className="text-xs text-slate-500">
                            {showThankYou ? 'Redirecting to the official bank application page...' : `You will be redirected to the official bank website after this step.`}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {showThankYou ? (
                        <div className="py-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                            <p className="text-slate-600">Your details have been securely recorded.</p>
                            <div className="mt-8 flex justify-center">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-6">
                                <p className="text-xs text-blue-800 flex items-start gap-2">
                                    <span className="font-bold">Transparency Note:</span>
                                    <span>ManageMoney is a comparison platform. We provide guidance to help you find the right product. Final approval is solely at the bank's discretion.</span>
                                </p>
                            </div>

                            <LeadCaptureForm
                                productType={productType}
                                onSuccess={handleSuccess}
                                onSkip={handleRedirect}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadCaptureModal;
