import React from 'react';
import Home from './Components/Home/home';
import {Routes, Route, Navigate} from 'react-router-dom';
import UpdateItem from './Components/Update/updateItem';
import DeleteItem from './Components/delete/deleteItem';
import AddItem from './Components/addItem/AddItem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path='/update_item/:id' element={<UpdateItem  />} />
      <Route path='/delete_item/:id' element={<DeleteItem  />} />
      <Route path='/item/new/' element={<AddItem />} />
    </Routes>
  );
}
export default App;
