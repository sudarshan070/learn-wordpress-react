import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import BookReview from './components/BookReview';
import Books from "./components/Books";


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Books} />
      <Route exact path='/book/:id' component={BookReview} />
    </BrowserRouter>
  );
}

export default App;
