import React from 'react'

const WidgetTag = () => {
  const tags=['c++','python','javascript','html','css','java','jquery','mongodb','mongoose','react','node','express','mongoose']
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
      tags.map((tag)=>(<p key={tag}>{tag}</p>))
      }
     </div>
    </div>
  )
}

export default WidgetTag
