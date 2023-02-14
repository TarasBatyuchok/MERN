import * as api from '../../api/index';
import {FETCH_BY_SEARCH, FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from "../constants/actionsTypes";
// action creators

export const getPost =(page) => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts(page);
        //  console.log({location: "getPost-action", data:data})
        dispatch({ type: FETCH_ALL, payload: data })
    }catch(error){
        console.log(error.message);
    }
};

export const getPostsBySearch =(searchQuery) => async (dispatch) =>{
  try{
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    // console.log({location:"search", data:data});

    dispatch({ type: FETCH_BY_SEARCH, payload:data})
  }catch (error){
     console.log(error);
  }

};

export const createPost = (post) => async( dispatch ) => {
    try{
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data});
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) =>{
  try{
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id});
  } catch(error){
    console.log(error)
  }
}
export const likePost =(id) => async(dispatch)=>{
  try{
    const { data } = await api.likePost(id);
    dispatch({type: LIKE, payload: data});
  }catch(error){
    console.log(error);
  }

}


