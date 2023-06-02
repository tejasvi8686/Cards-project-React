import React from 'react'
import Card from './Card'

export const Cards = (props) => {
  let courses = props.courses;
  
  function getCourses(){
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.foreach(courseData => {
        allCourses.push(courseData);
      })

    })
    return allCourses;
  }
  return (
    <div>{
    getCourses().map( (courses) (
      <Card key ={courses.id} course = {courses}/>
    ))
    }
    </div>
  )
}
export default Cards;
