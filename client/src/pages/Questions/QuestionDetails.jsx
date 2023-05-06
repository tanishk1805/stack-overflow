import React from 'react'
import { useParams ,Link,useNavigate,useLocation} from 'react-router-dom';
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers';
import './Questions.css'

import copy from 'copy-to-clipboard'
import moment from 'moment'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { postAnswer,deleteQuestion,handleVotes } from '../../actions/question';

const QuestionDetails = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const location=useLocation();
    
    const url='http://localhost:3000'
    const questionList=useSelector(state=>state.questionReducer)
   
    
 /*   var questionList=[{
        _id:'1',
        votes:3,
        upVotes:4,
        downVotes:3,
        noOfAnswers:2,
        questionTitle:"What is a function",
        questionBody:'What is meant to be ',
        userId:1,
        questionTags:["java","nodejs","react","mongo"],
        userPosted:"tgts",
        askedOn:"jan 1",
        answer:[{
           answerBody:"Answer",
           userAnswered:"mohan",
           answeredOn:"jan 5",
           userId:2,
        }]
      },{
        _id:'2',
        votes:3,
        noOfAnswers:2,
        upVotes:4,
        downVotes:3,
        userId:1,
        questionTitle:"What is a function",
        questionBody:'What is meant to be ',
        questionTags:["java","nodejs","react","mongo"],
        userPosted:"tgts",
        askedOn:"jan 1",
        answer:[{
          answerBody:"Answer",
          userAnswered:"mohan",
          answeredOn:"jan 5",
          userId:2,
       }]
      },
    {
      _id:'3',
      votes:3,
      noOfAnswers:2,
      upVotes:4,
        downVotes:3,
        userId:1,
      questionTitle:"What is a function",
      questionBody:'What is meant to be ',
      questionTags:["java","nodejs","react","mongo"],
      userPosted:"tgts",
      askedOn:"jan 1",
      answer:[{
        answerBody:"Answer",
        userAnswered:"mohan",
        answeredOn:"jan 5",
        userId:2,
     }]
    }];
    */
   const[Answer,setAnswer]=useState('');
   const User=useSelector((state)=>(state.currentUserReducer))
   const handleAnswer=(e,answerLength)=>{
    e.preventDefault()
    if(User===null){
      alert("Login or signup to continue");
      navigate('/Auth')
    }
    else{
      if(Answer===''){
        alert("Please write answer before posting")
      }
      else{
        dispatch(postAnswer({id,userAnswered:User.result.name,noOfAnswers:answerLength+1,answerBody:Answer,userId:User?.result?._id}))
      }
    }


   }
   const handleShare=()=>{
    copy(url+location.pathname);
    alert('Copied url'+url+location.pathname);
   }
   const handleDelete=()=>{
    dispatch(deleteQuestion(id,navigate))
   }
 
  const handleUpVote=()=>{
          dispatch(handleVotes(id,'upvote',User.result._id));
  } 
  const handleDownVote=()=>{
    dispatch(handleVotes(id,'downvote',User.result._id));
  } 
  return (

    <div className='question-details-page'>
      {
        questionList.data.length===null?<h1>Loading....</h1>:
        <>
        {
            questionList.data.filter(element=>element._id===id).map(question=>(
                <div key={question._id}>
                    <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                            <div className='question-votes'>
                            <img src={upvote} alt="upvote" width='18' onClick={handleUpVote}/>
                            <p>{question.upVote.length-question.downVote.length}</p>
                            <img src={downvote} alt="downvote" width='18' onClick={handleDownVote}/>
                            </div>
                            <div style={{width:'100%'}}>
                            
                                
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag)=>(
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }

                                    </div>
                                    <div className='question-actions-user'>
                                        <div>

                                            <button type='button' onClick={handleShare}>Share</button>
                                            
                                
                                            {User?.result?._id===question?.userId &&(
                                              <button type='button' onClick={handleDelete}>Delete</button>
                                            )}
                                              
                                        </div>
                                    <div>
                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                   
                                    <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}><Avatar px='8px' py='5px' child={question.userPosted.charAt(0).toUpperCase()} backgroundColor='orange' color='white'/>
                                    <div>{question.userPosted}</div>
                                    </Link>
                                    </div> 
                                    </div> 
                            </div>
                        </div>


                    </section>

                   {
                    question.answer.length!==null && 
                   ( <section>
                      <h3>{question.answer.length} Answers</h3>
                      <DisplayAnswers question={question} handleShare={handleShare}/>
                    </section>
                   )
                   }
                   {
                    <section className='post-ans-container'>
                      <h3>Your Answer</h3>
                      <form onSubmit={(e)=>{handleAnswer(e, question.answer.length)}}>
                        <textarea name='' id='' col='30' rows='10' onChange={(e)=>setAnswer(e.target.value)}></textarea>
                        <div>
                        <input type='Submit' className='post-ans-btn' value='Post your answer here' />
                        </div>
                      </form>
                      <p>Not the answer you're looking for? Browse other questions tagged question {question.questionTags.map((tag)=>(
                        <Link to='/tag' className="ans-tags" key={tag}> {tag} </Link>
                      ))} or 
                      <Link style={{textDecoration:"none" ,color: "#009dff"}}to='/AskQuestion'> ask your own question</Link>
                      </p>
                    </section>
                   }
                </div>
            ))
        }
     
        </>
      }


    </div>
  )
}

export default QuestionDetails
