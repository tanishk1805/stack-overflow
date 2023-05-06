import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import{Link} from 'react-router-dom'
import QuestionDetails from './QuestionDetails'
import { useParams } from 'react-router-dom'
import './Questions.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswers = ({question,handleShare}) => {
  const User=useSelector((state)=>(state.currentUserReducer));
  const dispatch=useDispatch();
  const {id}=useParams();
  const handleDelete=(answerId,noOfAnswers)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1));
  }
  return (
    <div>
      {
        question.answer.map((ans)=>(
            <div className="display-ans" key={ans.userId} >
              <p>{ans.answerBody} </p>
              <div className="question-actions-user">
                <div>
                 <button type='button' onClick={handleShare}>Share</button>
                 {User?.result?._id===ans?.userId &&(
                    <button type='button' onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>Delete</button>
                  )}
                </div>
                    <div>
                        <p> answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}><Avatar px='8px' py='5px' child={ans.userAnswered.charAt(0).toUpperCase()} backgroundColor='green' color='white'/>
                                    <div>{ans.userAnswered}</div>                                    </Link>
                    </div>
              </div>

            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswers
