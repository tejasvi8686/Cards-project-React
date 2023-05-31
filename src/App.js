import React, { useEffect } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./componentsCards"
import { useEffect } from "react";

const App = () => {


   const[Courses, setCourses] = useState
  useEffect (() =>{
    const fetchData = async() => {
      try{
          const res = await fetch (apiUrl);
          const data = await res.json();
          // save data into a varibale
      } 
      catch(error){
       toast.error("something went wrong");
      }
    }
    fetchData();
  },[]);


  return(
    <div>
      <Navbar>

      </Navbar>

      <Filter>
      filterData={filterData}
      </Filter>
   

      <Cards>

      </Cards>

    </div>
  );
};

export default App;
