"use client";
import { deleteArticle } from '@/blogAPI';
import React from 'react'
import { useRouter } from 'next/navigation';

type DeleteButtonProps = {
    id: string;
}

const DeleteButton = ( { id }: DeleteButtonProps ) => {
    const router = useRouter();

    const handleDelete = async () => {
        // await deleteArticle(id);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        await fetch(`${API_URL}/api/blog/${id}`, {
          method: "DELETE",
        });

        router.push("/");
        router.refresh();
    };
  return (
    <div className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline'
    onClick={handleDelete}
    >
        Delete
    </div>
  )
}

export default DeleteButton