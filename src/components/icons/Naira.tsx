import React from "react";

export const Naira = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* N shape */}
        <path d="M6 19V5" />
        <path d="M18 19V5" />
        <path d="M6 19L18 5" />
        {/* Two horizontal lines for Naira symbol */}
        <path d="M4 10H20" />
        <path d="M4 14H20" />
    </svg>
);
