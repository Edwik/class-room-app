import React, {useEffect} from 'react';
import $ from "jquery";
import './App.css';

function App() {

  useEffect( ()=>{
    $("#doc").attr("src",!process.env.DOC ? 'https://docs.google.com/document/d/1eDRx91Pcub4GODmj403Jm7n03dlSRnWdwpUo8O-sDdk/edit' : process.env.DOC);
    $("#youtube").attr("src",!process.env.YOUTUBE ? 'https://www.youtube.com/embed/LU0kvA6Cmeo;autoplay=1' : process.env.YOUTUBE+'?rel=0&amp;autoplay=1');
    $("#chat").attr("src",!process.env.CHAT ? 'https://www.youtube.com/live_chat?v=4ysArLvNHMg&embed_domain=class-room-app.herokuapp.com' : process.env.CHAT);
  },[])

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', height:"100vh"}}>

      <div className="Col1" style={{backgroundColor: 'grey', width: '75%', height: '100%'}}>
        <iframe id="doc" title="DOC" width="100%" height="100%" src=""></iframe>
      </div>

      <div className="Col2" style={{width: '25%', display: 'flex', flexDirection: 'column'}}>
        <iframe id="youtube" title="YOUTUBE" width="100%" height="300" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe  id="chat" title="CHAT"allowfullscreen="" frameborder="0" height="100%" width="100%"></iframe>
      </div>

    </div>
  );
}

export default App;
