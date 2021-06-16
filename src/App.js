import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MemeList from './MemeList.js'
import logo from './logo.png';

export default function App() {
  const [memes, setMemes] = useState([
    {
      id: 1,
      upvotes: 7,
      downvotes: 3,
    },
    {
      id: 2,
      upvotes: 3,
      downvotes: 3,
    },
    {
      id: 3,
      upvotes: 3,
      downvotes: 3,
    },
    {
      id: 4,
      upvotes: 3,
      downvotes: 3,
    },
  ]);

  function updateMeme(updatedMem) {
    const newMems = memes.map((mem) => {
      if (mem.id === updatedMem.id) {
        return updatedMem;
      }
      return mem;
    });
    setMemes(newMems);
  }

  return (
    <Router>
      <div>
        <nav>
          <div className="topnav">
            <ul>
              <li><img src={logo} className="App-logo" alt="logo" /></li>
              <li><Link to="/">MemeApp</Link></li>
              <li><Link to="/">Główna</Link></li>
              <li><Link to="/hot">Hot</Link></li>
              <li className="site-slogan"><p>Najlepsze memy w powiecie!</p></li>
            </ul>
          </div>
        </nav >
        <body className="App-body">
          <Switch>
            <Route path="/hot">
              <MemeList memes={memes} updateMeme={updateMeme} isHot={true} />
            </Route>
            <Route path="/">
              <MemeList memes={memes} updateMeme={updateMeme} isHot={false} />
            </Route>
          </Switch>
        </body>
      </div >
    </Router >
  );
}