// rafce is the short cut command to crate the format
import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-extrabold'>
          {/* return to the root pages like a href in html */}
          <Link href="/">Cataka_in_riga Blog</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link href="/articles/new" className='bg-orange-300 px-3 py-3 rounded-md'>Post</Link>
        </nav>
      </div>
      </header>
  )
}

export default Header;