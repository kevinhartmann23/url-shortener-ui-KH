import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({urls, removeUrl}) => {
  
  const handleClick = (event) => {
    event.preventDefault()
    removeUrl(event.target.id)
  }
  
  const urlEls = urls.map((url) => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
        <button id={url.id} onClick={handleClick}>Delete</button>
      </div>
    )
  });

  return (
    <section>
     { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
