import * as api from '../../api/index';
import { AUTH } from "../constants/actionsTypes";


export const signin = (formData, navigate) => async(dispatch) => {
   try{
    // const { daat } = await

    navigate("/");
   }catch(error){
    console.log(error);
   }
}


export const signup = (formData, navigate) => async(dispatch) => {
    try{
    //  const { daat } = await
 
     navigate("/");
    }catch(error){
     console.log(error);
    }
 }