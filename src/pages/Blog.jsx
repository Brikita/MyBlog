import React from 'react' 
import "./blog.css"
import BlogPost from './BlogPost';
import  { useState, useEffect } from 'react';
//import { useForm } from "react-hook-form"
import axios from 'axios';



export default function Blog() {
    const [blogPosts, setBlogPosts] =useState( [
      ]);

      useEffect(() => {
        fetchBlogPosts();
      }, []);
    
      const fetchBlogPosts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/blog/posts');
          setBlogPosts(response.data);
        } catch (error) {
          console.log('Error fetching blog posts:', error);
        }
      };
    

      const [search, setSearch]= React.useState('')
      const [searchResults, setSearchResults] = React.useState([])
      React.useEffect(
          () => {
            const filteredResults = blogPosts.filter((post) => post.content.toLowerCase().includes(search.toLowerCase())
            || post.title.toLowerCase().includes(search.toLowerCase()));
        
  
              setSearchResults(filteredResults.reverse())
          },[blogPosts, search])
      
        const handleLike = (postId) => {
          setBlogPosts((prevPosts) =>
            prevPosts.map((post) => {
              if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
              }
              return post;
            })
          );
        };
      
      
        
          
      
    return (
        <div className='Blog--Container'>
            <div className='searchBar'>
            <form className='searchForm' 
                  onSubmit={function(event){
                     event.preventDefault()
                   }}>
                   <input
                   className='searchInput'
                   id='search'
                   type="text"
                   placeholder='Search for'
                   onChange={function(event){
                    setSearch(event.target.value)
                   }}
                   />
                   <button className='searchbutton'><i className='fa fa-search'></i></button>
           </form>
           </div>

        <h1>Welcome to My Blogging Website</h1>
        <div className="blog-posts">
        {searchResults.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} image={post.image} id={post.id} />
      ))}
            
</div>
       
      </div>
    )
}