import * as api from '../api'

export const getAllUsers=()=>async(dispatch)=>{
    try {
        const{data}=await api.getAllUsers();
        dispatch({type:'FETCH_USERS',payload:data});
        
    } catch (error) {
        console.log(error);
    }
}

export const updatedProfile=(id,updatedData)=>async(dispatch)=>{
    try {
        const{data}=await api.updatedProfile(id,updatedData);
        dispatch({type:'UPDATE_CURRENT_USER',payload:data});
        
    } catch (error) {
        
    }
}