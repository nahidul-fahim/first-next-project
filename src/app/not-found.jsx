import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='space-y-4'>
            <h2 className='text-[orange] text-4xl font-bold'>404 Error</h2>
            <p>Oops! Page was not found!</p>
            <Link href={"/"} className='font-bold text-[#7474ff] border-b-2 pb-1 border-[#6c6cff] mt-5'>Return Home</Link>
        </div>
    );
};

export default NotFound;