import React, { useRef } from 'react';

const UrlForm = ({message, appError, setAppError, sendInfo}) => {
  const titleRef = useRef('')
  const urlRef = useRef('')
  
  const validateFrom = (title, url) => {
    if(title.length > 0 && url.length > 0) {
      sendInfo(title, url)
      clearInputs()
    } else {
      setAppError('Both input fields are required to submit!')
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    validateFrom(titleRef.current.value, urlRef.current.value )
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
          required
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          ref={urlRef}
          required
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
        {message && <p className='success-message'>{message}</p>}
        {appError && <p className='error-message'>{appError}</p>}
      </form>
    )
}

export default UrlForm;
