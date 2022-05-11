import React from 'react';
import Home from './Components/Home/home';
import {Routes, Route, Navigate} from 'react-router-dom';
import UpdateItem from './Components/Update/updateItem';
import DeleteItem from './Components/delete/deleteItem';
import AddItem from './Components/addItem/AddItem';

function App() {
  return (
    <Routes>
      <Route path="/crudApp/" element={<Navigate replace to="/crudApp/home" />} />
      <Route path="/crudApp/home" element={<Home />} />
      <Route path='/crudApp/update_item/:id' element={<UpdateItem  />} />
      <Route path='/crudApp/delete_item/:id' element={<DeleteItem  />} />
      <Route path='/crudApp/item/new/' element={<AddItem />} />
    </Routes>
  );
}
export default App;
