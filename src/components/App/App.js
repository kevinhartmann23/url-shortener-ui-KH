import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([])
  const [appError, setAppError] = useState()

  async function fetchData() {
    try {
      const data = await getUrls()
      setUrls(data)
    } catch (error) {
      setAppError(error)
    }
  }

  useEffect(async () => {
    fetchData()
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
