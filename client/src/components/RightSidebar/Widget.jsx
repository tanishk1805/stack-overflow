import React from 'react'
import pen from '../../assets/pen-solid.svg'
import black from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <img src={pen} width='18' alt='' />
       <p>The next gen web browser has no tabs, only spaces (Ep. 549)</p>
       </div>
       <div className='right-sidebar-div-2'>
        <img src={pen} width='18' alt='' />
       <p>Building a collaborative asynchronous work environment</p>
       </div>
      </div>
      

      <h4>  Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <img src={black} width='18'  alt='' />
       <p>
Improving how we report updates and <br />receive feedback on the Content <br/> Discovery...</p>
      </div>
      

      
        <div className='right-sidebar-div-2'>
        <img src={black} width='18'  alt='' />
       <p>Plagiarism flag and moderator tooling has <br/>launched to Stack Overflow!</p>
      </div>

      <div className='right-sidebar-div-2'>
        <img src={black} width='18'  alt='' />
       <p> Temporary policy: ChatGPT is banned</p>
      </div>
      
      <div className='right-sidebar-div-2'>
        <img src={black} width='18'  alt='' />
       <p>  The [rowname] and [columnname] tags<br/> are being burninated</p>
      </div>

     </div>


     <h4>Hot Network Questions</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <p>38</p>
       <p>
       Can a Knowledge cleric using the Channel Divinity: Read Thoughts feature to cast the Suggestion spell be perceived, for the purposes of Counterspell?
        </p>

      </div>

      <div className='right-sidebar-div-2'>
        <p>20</p>
       <p>
       How can I copy arbitrary part of binary file with reasonable speed?
       </p>

      </div>

      </div>
     </div>
  )
}

export default Widget
