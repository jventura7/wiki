'use client';
import { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center space-y-10 px-10">
      <div>
        <label className="mr-2" htmlFor="page-title">
          Page Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border-b border-gray-600 transition duration-500 focus:border-b-orange-400 focus:outline-none"
          id="page-title"
          name="page-title"
          type="text"
          value={title}
        ></input>
      </div>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Enter page..."
        className="h-96 w-full max-w-md rounded-lg border border-black p-2 focus:outline-none md:max-w-3xl"
      ></textarea>
      <button onClick={handleSubmit} className="button">
        Publish
      </button>
    </div>
  );
}
