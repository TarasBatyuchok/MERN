import axios from 'axios';


const url = "http://localhost:5000/posts";





// create post
export const createPost =(newPost) => axios.post(url, newPost)
// All post
export const fetchPosts = () => axios.get(url);
// create edite
export const updatePost =(id ,updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//delete post
export const deletePost =(id) => axios.delete(`${url}/${id}`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost  =(id) => axios.patch(`${url}/${id}/likePost`);