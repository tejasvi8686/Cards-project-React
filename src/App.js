import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data";
import { useState,useEffect } from "react";
import Spiner from "./components/Spiner";
import { toast } from "react-toastify";


const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading, setLoading] = useState(true);


   async function fetchData () {
    setLoading(true);
    try{
        let response  = await fetch(apiUrl);
        let output = await response.json();
        //output ->
        setCourses(output.data);
    }
    catch(error){
     toast.error("network mai koi dikkat hai");

    }
    setLoading(false);
   }

   useEffect ( () => {
    fetchData();
   },[])


  return (<div>

  <div>
    <Navbar/>
  </div>

  
  <div>
    <Filter filterData={filterData}/>
  </div>

  
  <div>
   {
     loading ? (<Spiner/>) : (<Cards courses ={courses}/>)
   }
  </div>

  </div>
  );
};

export default App;
