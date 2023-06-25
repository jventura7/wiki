'use client';
import { useState, useEffect } from 'react';

export default function usePage(entry: string) {
  const [pageContent, setPageContent] = useState<string>('');

  useEffect(() => {
    const getPageContent = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/page/${entry}`
      );
      const page = await response.json();
      setPageContent(page['entry']);
    };
    getPageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pageContent, setPageContent };
}
