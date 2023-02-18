import React from 'react'

export default function Quiz() {

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

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
