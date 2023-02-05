import * as api from '../../api/index.js';
import { AUTH } from "../constants/actionsTypes.js";



export const signup = (formData, navigate) => async(dispatch) => {
   try{
   const { data } = await api.signUp(formData);
   // console.log({location:"actions", data,})
   // console.log(decode(data?.result))
   dispatch({ type: AUTH, data});

    navigate("/");
   }catch(error){
    console.log(error);
   }
}



export const signin = (formData, navigate) => async(dispatch) => {
   try{
   console.log({location: "action", formData})
    const { data } = await api.signIn(formData);
    console.log({afterthunk: "action", data})

    dispatch({ type: AUTH, data});

    navigate("/");
   }catch(error){
    console.log(error);
   }
}


