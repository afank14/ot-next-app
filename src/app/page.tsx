"use client"

import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { verses } from './data/verses';

export default function Home() {
  // Use state to store the verse
  const [randomVerse, setRandomVerse] = useState(verses[0]); // Default to first verse initially

  // Get a random verse on the client side after mounting
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    setRandomVerse(verses[randomIndex]);
  }, []);

  // Function to get a new random verse (can be used with RefreshButton)
  const getNewRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    setRandomVerse(verses[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-amber-600" />
            Old Testament Wisdom
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <div className="flex-1 px-4 py-3 text-amber-700 bg-amber-50 text-sm font-medium flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Today&apos;s Verse
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="mb-4">
              <div className="text-2xl font-serif text-slate-800 mb-2">&quot;{randomVerse.text}&quot;</div>
              <div className="text-amber-600 font-medium">
                {randomVerse.book} {randomVerse.chapter}:{randomVerse.verse}
              </div>
            </div>

            <section>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">Context</h2>
              <p className="text-slate-600">{randomVerse.context}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">Reflection</h2>
              <p className="text-slate-600">{randomVerse.reflection}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">Today&apos;s Challenge</h2>
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-700">
                {randomVerse.challenge}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link 
            href="/verses"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors text-sm font-medium"
          >
            Browse All Verses
          </Link>
          <button
            onClick={getNewRandomVerse}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
          >
            Refresh Verse
          </button>
        </div>
      </main>
    </div>
  );
}