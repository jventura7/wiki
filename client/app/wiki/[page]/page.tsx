'use client';
import usePage from '@/hooks/usePage';
import { Dispatch, SetStateAction, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface pageContentType {
  pageContent: string;
  setPageContent: Dispatch<SetStateAction<string>>;
}

export default function Page({ params }: { params: { page: string } }) {
  const [edit, setEdit] = useState<boolean>(false);

  const { pageContent, setPageContent }: pageContentType = usePage(params.page);

  return (
    <>
      {edit ? (
        <div className="flex w-full flex-col items-center space-y-10">
          <textarea
            onChange={(e) => setPageContent(e.target.value)}
            className="h-96 w-full max-w-md rounded-lg border border-black p-2 focus:outline-none"
            value={pageContent}
          ></textarea>
          <button className="button">Publish</button>
        </div>
      ) : (
        <div className="flex flex-col items-center px-20 md:items-start">
          <ReactMarkdown className="markdown">{pageContent}</ReactMarkdown>
          <button onClick={() => setEdit(true)} className="button">
            Edit
          </button>
        </div>
      )}
    </>
  );
}
