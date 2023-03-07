import React from 'react'
import Questions from '../components/Questions';
import { useEffect } from 'react';

// import redux store
import {useSelector} from 'react-redux'

export default function Quiz() {

  const state = useSelector(state => state)

  useEffect(() => {
    console.log(state)
  });

  // Next button event handler
  function onNext(){
    console.log('on next click')
  }
  // Prev button event handler
  function onPrev(){
    console.log('on prev click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions></Questions>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
