import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([])
  const [appError, setAppError] = useState()
  const [message, setMessage] = useState()

  const fetchUrls = async () => {
    setAppError('')
    setMessage('')
    
    try {
      const data = await getUrls()
      setUrls(data.urls)
    } catch (error) {
      setAppError(error.message)
    }
  }

  const sendInfo = async (title, url) => {
    setAppError('')
    setMessage('')

    const body = {
      "long_url": url,
      "title": title
    }

    try {
      const post = await postUrl(body)
      setUrls([...urls, post])
      setMessage(`Url successfully shortened to ${post.short_url}!`)
    } catch (error) {
      setAppError(error.message)
    }
  }
  
  useEffect(() => {
    fetchUrls()
  }, [])
    
  return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm message={message} appError={appError} sendInfo={sendInfo}/>
        </header>
        <UrlContainer urls={urls}/>
      </main>
    );
}

export default App;
