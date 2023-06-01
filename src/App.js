import React, { useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast} from "react-toastify"
import { useEffect } from "react";
import Card from "./components/Card";

const App = () => {


   const[Courses, setCourses] = useState(null);
  useEffect ( () =>{
    const fetchData = async() => {
      try{
          const res = await fetch (apiUrl);
          const output = await res.json();
          // save data into a varibale
          setCourses(output.data)
          console.log("courses value update");
          console.log(Courses);

      } 
      catch(error){
       toast.error("something went wrong");
      }
    }
    fetchData();
  },[]);


  return(
    <div>
      <Navbar/>

      <Filter filterData= {filterData}/>

      <Cards Courses={Courses}/>

      <Card/>
      
    
    </div>
  );
};

export default App;
