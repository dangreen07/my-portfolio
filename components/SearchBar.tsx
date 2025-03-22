'use client';

import { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { SanityDocument } from 'next-sanity';

interface SearchBarProps {
  posts: SanityDocument[];
}

export default function SearchBar({ posts }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5); // Limit to 5 results
  }, [posts, searchTerm]);
  
  return (
    <div className="relative">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search articles by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full py-3 px-5 pl-12 bg-gray-800/50 text-gray-200 rounded-full border border-gray-700/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      {showResults && filteredPosts.length > 0 && (
        <div className="absolute mt-2 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 overflow-hidden shadow-lg z-50">
          <ul>
            {filteredPosts.map(post => (
              <li key={post._id}>
                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="block px-4 py-3 text-gray-200 hover:bg-gray-700/50 hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {showResults && searchTerm && filteredPosts.length === 0 && (
        <div className="absolute mt-2 w-full rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-4 shadow-lg z-50">
          <p className="text-gray-300 text-center">No posts found matching &ldquo;{searchTerm}&rdquo;</p>
        </div>
      )}
    </div>
  );
} 