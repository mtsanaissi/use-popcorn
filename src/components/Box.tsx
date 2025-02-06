import { useState } from 'react';

interface BoxProps {
    title: string;
    children: React.ReactNode;
}

export const Box = ({ title, children }: BoxProps) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="rounded-lg border border-primary/20 shadow-sm w-full">
            <div
                role="button"
                tabIndex={0}
                onClick={() => setIsVisible(!isVisible)}
                className="flex items-center justify-between px-4 py-2 hover:bg-primary/5 transition-colors cursor-pointer"
                aria-expanded={isVisible}
                aria-controls="box-content"
            >
                <h3 className="text-lg font-semibold text-primary mb-0">{title}</h3>
                <span className="text-accent font-mono text-lg">
                    {isVisible ? '−' : '+'}
                </span>
            </div>

            {isVisible && (
                <div
                    id="box-content"
                    className="p-4 pt-2 border-t border-primary/10 text-primary/90"
                >
                    {children}
                </div>
            )}
        </div>
    );
};