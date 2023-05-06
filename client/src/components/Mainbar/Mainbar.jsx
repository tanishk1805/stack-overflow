import React from 'react'
import{useLocation,useNavigate} from 'react-router-dom';
import './Mainbar.css'
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const Mainbar = () => {
  const location =useLocation();
const navigate=useNavigate();
const user=1;
const alerti=()=>{
  if (user===null){alert("Log in or signup first");
  navigate('/Auth');
}
else{
  navigate('/AskQuestion')
}
};
const questionList=useSelector(state=>state.questionReducer)
/*console.log(questionLis);
  var questionList=[{
    _id:1,
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
       answerdOn:"jan 5",
       userId:2,
    }]
  },{
    _id:2,
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
      answerdOn:"jan 5",
      userId:2,
   }]
  },
{
  _id:3,
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
    answerdOn:"jan 5",
    userId:2,
 }]
}];
*/

  return (
    <div className='main-bar'>
      <div className='main-bar-headers'>
        {
          location.pathname ==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>

        }
        <button onClick={alerti}
       className='ask-btn'>Ask Question</button>

      </div>
     
      <div>{questionList.data===null?<h1>Loading...</h1>:
     <>
     <p> {`${ questionList.data.length } Questions`}</p>
        <QuestionList  questionList={questionList.data}/>
     </>
      }
     </div>
    </div>
  )
}

export default Mainbar
