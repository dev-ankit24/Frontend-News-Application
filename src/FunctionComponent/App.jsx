import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";



export default function App(){
  let [lang,setLang]=useState("hi")
  let [search,setSearch]=useState("")
  function changeLanguage(data){
    setLang(data)
  }
  function changeSearch(data){
    setSearch(data)
  }

    return (
      <BrowserRouter>
        <Navbar  changeLanguage={changeLanguage} changeSearch={changeSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} lang={lang} q="All" />} />
          <Route path="/All" element={<Home search={search} lang={lang} q="All" />} />
          <Route path="/Politics" element={<Home search={search} lang={lang} q="Politics" />} />
          <Route path="/Crime" element={<Home search={search} lang={lang} q="Crime"/>} />
          <Route path="/Education" element={<Home search={search} lang={lang} q="Education" />} />
          <Route path="/Entertainment" element={<Home search={search} lang={lang} q="Entertainment" />} />
          <Route path="/Science" element={< Home search={search} lang={lang} q="Science" />} />
          <Route path="/Technology" element={<Home search={search} lang={lang} q="Technology" />} />
          <Route path="/Sport" element={<Home search={search} lang={lang} q="Sport" />} />
          <Route path="/IPL" element={<Home search={search} lang={lang} q="IPL" />} />
          <Route path="/Jokes" element={<Home search={search} lang={lang} q="Jokes" />} />
          <Route path="/Covid-19" element={<Home search={search} lang={lang} q="Covid-19" />} />
          <Route path="/India" element={<Home search={search} lang={lang} q="India"  />} />
          <Route path="/World" element={<Home search={search} lang={lang} q="World" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }

