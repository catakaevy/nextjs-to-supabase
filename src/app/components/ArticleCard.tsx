import React from 'react'
import { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type ArticleCardProps = {
    article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='shadow my-4 flex flex-col' key={article.id}> 
        <Link href={`articles/${article.id}`} className='hover:opacity-75'>
            {/* If you want to refer to the external Link like this you need to declare at the config file */}
            <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
            alt='' 
            width={1280}
            height={300}
            />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
            <Link href="#" className='text-blue-700 pb-4 font-bold'>
            Technology
            </Link>
            <Link href={`articles/${article.id}`} className='text-slate-900 text-3xl font-bold hover:text-gray-500'>
            {article.title}
            </Link>
            <p className='text-sm pb-3 text-slate-900'>
            Published on {new Date(article.createdAt).toLocaleString()}
            </p>
            <Link href={`articles/${article.id}`} className='text-slate-900 pb-6'>
            {/* Set up the number limitation of character  */}
            {article.content.length > 70 ? article.content.substring(0, 70) + "..." 
            : article.content}
            </Link>
            <Link href={`articles/${article.id}`} className='text-pink-800'>Check out more 👀</Link>
        </div>
    </article>
  )
}

export default ArticleCard