"use client"
import React, { useState } from 'react';
import { Scroll, BookOpen, Search, Home } from 'lucide-react';
import Link from 'next/link';
import { verses } from '../data/verses';

function VersesPage() {
  const categories = Array.from(new Set(verses.map(verse => verse.category)));
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVerses = verses.filter(verse => {
    const matchesCategory = activeCategory === 'all' || verse.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      verse.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verse.book.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verse.context.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-amber-600" />
            Old Testament Wisdom
          </h1>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Categories</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search verses, books, or context..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredVerses.map(verse => (
            <div key={verse.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl font-serif text-slate-800">&quot;{verse.text}&quot;</div>
                  <span className="ml-3 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                    {verse.category.charAt(0).toUpperCase() + verse.category.slice(1)}
                  </span>
                </div>
                <div className="text-amber-600 font-medium">
                  {verse.book} {verse.chapter}:{verse.verse}
                </div>
              </div>

              <div className="space-y-4">
                <section>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Context</h3>
                  <p className="text-slate-600">{verse.context}</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Reflection</h3>
                  <p className="text-slate-600">{verse.reflection}</p>
                </section>
              </div>
            </div>
          ))}

          {filteredVerses.length === 0 && (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Scroll className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No verses found</h3>
              <p className="text-slate-600">
                Try adjusting your search or category filters to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default VersesPage;