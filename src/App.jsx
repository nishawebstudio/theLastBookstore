import { BrowserRouter, Routes, Route } from 'react-router';

import Nav from  './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import BookStore from './components/BookStore';
import Books from './components/Books';

import BookShelf from './pages/BookShelf';

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<><Hero /><About /><BookStore /><Books /></>}></Route>
        <Route path='/bookShelf' element={<BookShelf />}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}