import axios from 'axios'
const API=axios.create({baseURL:"http://localhost:5001"});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
  return req;
  })
  

export const logIn=(authData)=>API.post('/user/login',authData);
export const signUp=(authData)=>API.post('/user/signup',authData);



export const postQuestion=(questionData)=>API.post('/Question/Ask',questionData);
export const getAllQuestions=()=>API.get('/Question/get');

export const postAnswer=(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId});
export const deleteQuestion=(id)=>API.delete(`/Question/delete/${id}`)

export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{answerId,noOfAnswers});
export const handleVotes=(id,value,userId)=>API.patch(`/Question/vote/${id}`,{value,userId});

export const getAllUsers=()=>API.get('/user/getAllUsers');
export const updatedProfile=(id,updatedData)=>API.patch(`user/updateProfile/${id}`,updatedData);