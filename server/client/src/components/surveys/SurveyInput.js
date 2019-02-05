import React from 'react'

function SurveyInput(props) {
    // console.log('redux\'s props are: ', props)
  return (
    <div>
      <input {...props.input}/>
    </div>
  )
}

export default SurveyInput
