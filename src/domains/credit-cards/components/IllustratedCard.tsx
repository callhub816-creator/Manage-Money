import React from 'react';

interface IllustratedCardProps {
    bank: string;
    name: string;
    className?: string;
}

/**
 * IllustratedCard Component
 * 
 * Renders a bank-inspired, illustrated credit card visual.
 * - Follows strict compliance rules: non-official, clearly illustrative.
 * - Uses minimalist shapes, custom gradients, and abstract patterns.
 * - No real card numbers, chips, or signatures.
 */
const IllustratedCard: React.FC<IllustratedCardProps> = ({ bank, name, className = "" }) => {
    // Determine card style based on bank and name
    const getCardStyle = () => {
        const bankName = bank.toLowerCase();
        const cardName = name.toLowerCase();

        // HDFC Styles
        if (bankName.includes('hdfc')) {
            if (cardName.includes('millennia')) {
                return {
                    gradient: 'from-[#004a8c] to-[#00a1e3]',
                    accent: 'bg-white/10',
                    pattern: 'grid',
                    textColor: 'text-white'
                };
            }
            if (cardName.includes('regalia')) {
                return {
                    gradient: 'from-[#141b41] to-[#2c3e50]',
                    accent: 'bg-[#d4af37]/20',
                    pattern: 'waves',
                    textColor: 'text-white'
                };
            }
            return {
                gradient: 'from-[#004a8c] to-[#01305a]',
                accent: 'bg-white/5',
                pattern: 'dots',
                textColor: 'text-white'
            };
        }

        // Axis Styles
        if (bankName.includes('axis')) {
            return {
                gradient: 'from-[#8e1b3d] to-[#6d132e]',
                accent: 'bg-white/10',
                pattern: 'circles',
                textColor: 'text-white'
            };
        }

        // SBI Styles
        if (bankName.includes('sbi') || bankName.includes('state bank')) {
            if (cardName.includes('cashback')) {
                return {
                    gradient: 'from-[#008080] to-[#004d40]', // Teal for Cashback
                    accent: 'bg-yellow-400/10',
                    pattern: 'lines',
                    textColor: 'text-white'
                };
            }
            return {
                gradient: 'from-[#00549c] to-[#003d73]', // Classic SBI Blue
                accent: 'bg-white/10',
                pattern: 'dots',
                textColor: 'text-white'
            };
        }

        // IDFC FIRST
        if (bankName.includes('idfc')) {
            return {
                gradient: 'from-[#9b151e] to-[#c41e2a]',
                accent: 'bg-amber-400/20',
                pattern: 'diamond',
                textColor: 'text-white'
            };
        }

        // AU LIT
        if (bankName.includes('au ')) {
            return {
                gradient: 'from-[#f37021] to-[#e84e1b]',
                accent: 'bg-blue-900/10',
                pattern: 'geometric',
                textColor: 'text-white'
            };
        }

        // Default Fallback
        return {
            gradient: 'from-slate-700 to-slate-900',
            accent: 'bg-white/10',
            pattern: 'dots',
            textColor: 'text-white'
        };
    };

    const style = getCardStyle();

    const renderPattern = (pattern: string) => {
        switch (pattern) {
            case 'grid':
                return (
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                );
            case 'waves':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 60" preserveAspectRatio="none">
                        <path d="M0 20 Q 25 10 50 20 T 100 20 V 60 H 0 Z" fill="white" />
                        <path d="M0 30 Q 25 20 50 30 T 100 30 V 60 H 0 Z" fill="white" opacity="0.5" />
                    </svg>
                );
            case 'circles':
                return (
                    <div className="absolute inset-0 opacity-10 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-white" />
                        <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full border-2 border-white" />
                    </div>
                );
            case 'lines':
                return (
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)' }} />
                );
            case 'diamond':
                return (
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }} />
                );
            case 'geometric':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,0 100,0 50,50" fill="white" />
                        <polygon points="100,100 0,100 50,50" fill="white" opacity="0.5" />
                    </svg>
                );
            default:
                return (
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                );
        }
    };

    return (
        <div className={`w-full max-w-sm aspect-[1.586/1] rounded-2xl relative overflow-hidden shadow-xl select-none group/card ${className}`}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient}`} />

            {/* Abstract Patterns */}
            {renderPattern(style.pattern)}

            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-50" />

            {/* Card Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold tracking-widest text-white/80 uppercase">
                        {bank.split(' ')[0]} {/* Simple text-only bank identifier */}
                    </div>
                    <div className="w-8 h-8 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-4 h-3 bg-white/20 rounded-sm" /> {/* Illustrative small element */}
                    </div>
                </div>

                {/* Middle Section - Abstract Design Element */}
                <div className={`w-12 h-12 rounded-full ${style.accent} flex items-center justify-center`}>
                    <div className="w-6 h-6 rounded-full border border-white/20" />
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <p className="text-[10px] font-medium text-white/60 tracking-wider">CARD NAME</p>
                        <p className="text-sm font-bold text-white tracking-wide uppercase">{name}</p>
                    </div>
                    <div className="text-white/40 text-xs">
                        •••• ••••
                    </div>
                </div>
            </div>

            {/* Subtle Bottom Border Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
};

export default IllustratedCard;
