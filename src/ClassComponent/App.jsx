import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";



export default class App extends Component {
  constructor(){
    super()
    this.state={
      lang:"hi",
      search:""
    }
  }
  changeLanguage=(data)=>{
    this.setState({lang:data})
  }
  changeSearch=(data)=>{
    this.setState({search:data})
  }
 
  render() {
    return (
      <BrowserRouter>
        <Navbar  changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
        <Routes>
          <Route path="/" element={<Home search={this.state.search} lang={this.state.lang} q="All" />} />
          <Route path="/All" element={<Home search={this.state.search} lang={this.state.lang} q="All" />} />
          <Route path="/Politics" element={<Home search={this.state.search} lang={this.state.lang} q="Politics" />} />
          <Route path="/Crime" element={<Home search={this.state.search} lang={this.state.lang} q="Crime"/>} />
          <Route path="/Education" element={<Home search={this.state.search} lang={this.state.lang} q="Education" />} />
          <Route path="/Entertainment" element={<Home search={this.state.search} lang={this.state.lang} q="Entertainment" />} />
          <Route path="/Science" element={< Home search={this.state.search} lang={this.state.lang} q="Science" />} />
          <Route path="/Technology" element={<Home search={this.state.search} lang={this.state.lang} q="Technology" />} />
          <Route path="/Sport" element={<Home search={this.state.search} lang={this.state.lang} q="Sport" />} />
          <Route path="/IPL" element={<Home search={this.state.search} lang={this.state.lang} q="IPL" />} />
          <Route path="/Jokes" element={<Home search={this.state.search} lang={this.state.lang} q="Jokes" />} />
          <Route path="/Covid-19" element={<Home search={this.state.search} lang={this.state.lang} q="Covid-19" />} />
          <Route path="/India" element={<Home search={this.state.search} lang={this.state.lang} q="India"  />} />
          <Route path="/World" element={<Home search={this.state.search} lang={this.state.lang} q="World" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }
}
