import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', height:"100vh"}}>

      <div className="Col1" style={{backgroundColor: 'grey', width: '75%', height: '100%'}}>
        <iframe title="DOC" width="100%" height="100%" src={`${process.env.DOC}`}></iframe>
      </div>

      <div className="Col2" style={{width: '25%', display: 'flex', flexDirection: 'column'}}>
        <iframe title="YOUTUBE" width="100%" height="300" src={`https://www.youtube-nocookie.com/embed/${process.env.ID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe  title="CHAT"allowfullscreen="" frameborder="0" height="100%" src={`https://www.youtube.com/live_chat?v=${process.env.ID}&embed_domain=${process.env.DOMAIN}`} width="100%"></iframe>
      </div>

    </div>
  );
}

export default App;
