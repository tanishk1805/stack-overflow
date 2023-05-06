import React from 'react'
import WidgetTag from './WidgetTag'
import Widget from './Widget'
import './RightSidebar.css'
const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
      <Widget />
      <WidgetTag />
    </div>
  )
}

export default RightSidebar
