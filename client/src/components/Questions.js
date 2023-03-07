import React, { useState, useEffect } from 'react'
import data from '../database/data'

// Custom Hook
import { useFetchQuestion } from '../hooks/fetchQuestion'

export default function Questions() {

  const [checked, setChecked] = useState(undefined)
  const [{isLoding, apiData, serverError}] = useFetchQuestion();
  const question = data[0]

  useEffect(() => {
    // console.log(isLoding)
    // console.log(apiData)
    // console.log(serverError)
  });

  function onSelect() {
    // console.log('radio button change')
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>{question.question}</h2>

      <ul key={question.id}>
        {
          question.options.map((q, i)=>(
            <li key={i}>
              <input type="radio" value={false} name="options" id={`q${i}-option`} onChange={onSelect()}></input>

              <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
              <div className='check'></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
