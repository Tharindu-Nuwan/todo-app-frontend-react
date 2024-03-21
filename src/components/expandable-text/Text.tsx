import React from 'react'

interface Props {
    text: string;
}

function Text({text}: Props) {
  return (
    <div>{text}</div>
  )
}

export default Text