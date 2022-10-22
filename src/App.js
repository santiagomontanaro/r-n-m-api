import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import './App.css'

function App() {
  const apiUrl = 'https://rickandmortyapi.com/api/character'

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  let infoUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data.info)
    setCharacters(data.results)
  }

  const onNext = () => {
    fetch(info.next)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results)
        setInfo(res.info)
      })
  }

  const onPrev = () => {
    fetch(info.prev)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results)
        setInfo(res.info)
      })
  }

  useEffect(() => {
    infoUrl(apiUrl)
  }, []);

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<>
          <Navbar data={characters} />
          <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrev={onPrev} />
        </>} />
        <Route path="/characters" element={<>
          <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrev={onPrev} />
        </>} />
        <Route path="/characters/:name/:id" element={<Info characters={characters} />} />
      </Routes>
    </div>
  );
}

export default App;
