import axios from 'axios';

const API = axios.create({ baseURL:'http://localhost:5000' });


// const url = "http://localhost:5000/posts";



// All post
export const fetchPosts = () => API.get('/posts');

// create post
export const createPost =(newPost) => API.post('/posts', newPost)

// create edite
export const updatePost =(id ,updatedPost) => API.patch(`/posts/${id}`, updatedPost);
//delete post
export const deletePost =(id) => API.delete(`/posts/${id}`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const likePost  =(id) => API.patch(`/posts/${id}/likePost`);


export const signIn =( formData ) => API.post('/user/signin', formData);
export const signUp =( formData ) => API.post('/user/signup', formData);