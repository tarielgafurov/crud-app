import { useState } from 'react';
import Todos from './Components/Todo/Todos';
import Header from './Layout/Header/Header';
import List from './Components/Todo/List'
import { Routes, Route } from "react-router-dom"



function App() {

  const [isOpenForm , setIsOpenForm] = useState(false)

  const openFormHandler = () => {
      setIsOpenForm((prev) => !prev)
  }


  return (
    <div className="App">
      <Header openForm={openFormHandler} />
      {isOpenForm && <Todos close={openFormHandler} />}
      <Routes>
        <Route path="/viewList" element={<List/>} />
      </Routes>
      
      

    </div>
  );
}

export default App;
