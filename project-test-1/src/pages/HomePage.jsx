import React, { useState, useEffect } from 'react'
import Header from "../Components/Header";
import axios from "axios";

const HomePage = () => {
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("TO DO LIST");


return (
    <>
      <Header/>
      <div className='w-full h-screen overflow-auto grid justify-center'>
        <p className='text-4xl  text-center font-bold'>{content}</p>
        {/* <div className='grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-3'></div> */}
        <table class="table-auto border p-4">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task 1</td>
            <td>Normal</td>
            <td>Started</td>
            <td>Date</td>
            <td>Date</td>
          </tr>
         
        </tbody>
      </table>
      </div>
      
    </>
  );
}

export default HomePage;