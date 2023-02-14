import {END_LOADING, START_LOADING, FETCH_BY_SEARCH,FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from "../constants/actionsTypes";

export default ( state = { isLoading: true, posts:[] }, action) => {
    switch(action.type){
        case END_LOADING:
            return { ...state, isLoading: false };
        case START_LOADING:
            return { ...state, isLoading: true };
        case CREATE:
            return {...state, posts:[...state.posts, action.payload]}
        case LIKE:
        case UPDATE:
            return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}
        case DELETE: 
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload)}
        case FETCH_ALL:
            return { ...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages }
            // return action.payload;
        case FETCH_BY_SEARCH:
            // return action.payload;
            return {...state, posts: action.payload}
        default:
            return state;
    }
}

