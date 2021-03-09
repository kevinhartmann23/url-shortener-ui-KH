import React, { useRef } from 'react';

const UrlForm = ({message, appError, sendInfo}) => {
  const titleRef = useRef('')
  const urlRef = useRef('')
  
  const handleSubmit = e => {
    e.preventDefault();
    sendInfo(titleRef.current.value, urlRef.current.value )
    clearInputs()
  }

  const clearInputs = () => {
    urlRef.current.value = ''
    titleRef.current.value = ''
  }

    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          ref={titleRef}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          ref={urlRef}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
        {message && <p>{message}</p>}
        {appError && <p>{appError}</p>}
      </form>
    )
}

export default UrlForm;
