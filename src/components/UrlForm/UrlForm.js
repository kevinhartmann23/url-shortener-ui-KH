import React, { useState, useEffect, useRef } from 'react';
import { postUrl } from '../../apiCalls';

const UrlForm = () => {
  const titleRef = useRef('')
  const urlRef = useRef('')
  const [appError, setAppError] = useState()
  const [message, setMessage] = useState()

  const sendInfo = async () => {
    setAppError('')

    const body = {
      "long_url": urlRef.current.value,
      "title": titleRef.current.value
    }

    try {
      const post = await postUrl(body)
      setMessage(post.short_url)
    } catch (error) {
      setAppError(error.message)
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    sendInfo()
  }

  const clearInputs = () => {
    
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
      </form>
    )
}

export default UrlForm;
