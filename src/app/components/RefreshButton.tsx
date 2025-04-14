'use client';

export default function RefreshButton() {
  return (
    <button
      className="text-gray-500 hover:text-gray-600"
      onClick={() => window.location.reload()}
    >
      Get Another Verse
    </button>
  );
} 