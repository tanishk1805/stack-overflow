import React from 'react'

const Avatar = ({child,backgroundColor,cursor,color,textDecoration,fontSize,px,py,borderRadius,textAlign}) => {
  const style={backgroundColor,
    color:color || 'black',
    textDecoration:'none',
    padding:`${py} ${px} `,
    borderRadius,
    textAlign:'center',
    fontSize,
    cursor:cursor || 'pointer',
   
  }
  return (
    <div style={style}>
        {child}
    </div>
  )
}

export default Avatar;
