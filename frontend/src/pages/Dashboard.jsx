import React from 'react'
import {Navbar} from '../components/Navbar'
import BlogCard  from '../components/BlogCard'
import { useState, useEffect, useContext } from "react";
import { getPosts, deletePost } from "../api/posts";
import { AuthContext } from "../contexts/AuthContext";

export const Dashboard = () => {

  const [posts, setPosts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id, token);
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      alert("Error deleting post");
    }
  };

//    const [blogs, setBlogs] = useState([]);


//    useEffect(() => {
//     const mockBlogs = [
//       {
//         id: 1,
//         title: "How to Learn React Fast",
//         author: "Badhri",
//         date: "Oct 29, 2025",
//        description: "Quick tips and steps to get better at React in record time.",
       
//       },
//       {
//         id: 2,
//         title: "Tailwind CSS Basics",
//         author: "Badhri",
//         date: "Oct 28, 2025",
//         description: "A quick intro to building modern UIs with Tailwind CSS.",
        
//       },
//       {
//         id: 3,
//         title: "Understanding JavaScript Closures",
//         author: "Badhri",
//         date: "Oct 27, 2025",
//         description: "Master one of JavaScript’s most powerful features — closures.",
//       },
      
//     ];

//     setBlogs(mockBlogs);
//   }, []);

// console.log(blogs);


  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.length > 0 ? (
          posts.map((p) => (
            <BlogCard key={p._id} blog={p} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found</p>
        )}
    </div>
    </div>
    </>
  )
}
