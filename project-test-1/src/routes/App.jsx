import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from '../pages/HomePage';
import DetailToDo from '../pages/DetailToDo'

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="detail/:list_id" element={<DetailToDo/>} />
        <Route path="*" element={<div>404 Error not Found</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
