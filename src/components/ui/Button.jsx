import React from 'react';
import '../../styles/Button.css';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    external = false,
    fullWidth = false,
    ...props
}) => {
    const baseClass = `btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`;

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={baseClass}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    {...props}
                >
                    {children}
                </a>
            );
        }
        return (
            <a href={href} className={baseClass} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={baseClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
