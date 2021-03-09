import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([])
  const [appError, setAppError] = useState()

  const fetchUrls = async () => {
    setAppError('')
    
    try {
      const data = await getUrls()
      setUrls(data.urls)
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
          <UrlForm />
        </header>
        {appError && <p>{appError}</p>}
        <UrlContainer urls={urls}/>
      </main>
    );
}

export default App;
