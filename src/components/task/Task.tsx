import React, { useState } from 'react'

interface TaskProps {
  title: string,
  description: string,
  tags: number[]
}

function Task({title, description}: TaskProps) {

  return (
    <>
    <h2>{title}</h2>
    <h4>{description}</h4>
    </>
  )
}

export default Task