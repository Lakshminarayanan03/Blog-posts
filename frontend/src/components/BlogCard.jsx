import React from 'react'

const BlogCard = ({ blog, onDelete }) => {
  return (
    <>
    <div className='bg-white text-black max-w-md mx-auto shadow-md hover:shadow-xl m-4 rounded-lg w-full'>
        <div className='flex flex-col justify-between flex-grow p-5'>
            <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
            <p className='text-grey-600 text-sm mb-3'>{blog.description}</p>
            
            <div className='flex justify-between items-center text-sm text-gray-500'>
                <span >{blog.author}</span>
                <span>{blog.date}</span>
            </div>

            <div>
                <button onClick={() => onDelete(blog._id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition mt-4'>Delete</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard;