"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
    ];
    
    const socialLinks = [
        { 
            name: "GitHub", 
            path: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com", 
            icon: <FaGithub className="w-5 h-5" />
        },
        { 
            name: "Twitter", 
            path: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://twitter.com", 
            icon: <FaTwitter className="w-5 h-5" />
        },
        { 
            name: "Medium", 
            path: process.env.NEXT_PUBLIC_MEDIUM_URL ?? "https://medium.com", 
            icon: <FaMedium className="w-5 h-5" />
        },
    ];
    
    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg h-16" : "bg-transparent h-20"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                        Daniel Green
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.path}
                            className="text-gray-300 hover:text-white transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>
                
                {/* Social Links - Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    {socialLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FiX className="w-6 h-6" />
                    ) : (
                        <FiMenu className="w-6 h-6" />
                    )}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-300 hover:text-white text-lg font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        
                        <div className="flex space-x-6 pt-4 border-t border-gray-800">
                            {socialLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}