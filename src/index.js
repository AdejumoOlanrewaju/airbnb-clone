import React from 'react'
import ReactDOM from 'react-dom'
import '../src/css/index.css'
import App from './App'


ReactDOM.render(<App />, document.getElementById("root"))


// class Motor {
//  constructor (name, year){
//     this.name = name
//     this.year = year
//  }
//    age(){
//     let date = new Date()
//      return date.getFullYear() - this.year
//    }
// }
//   
//  const mymotor = new Motor("Ford", 2022);
//   document.getElementById("motor").innerHTML = mymotor.name + " " + mymotor.year
//  
// 
// 
// class Car {
//   constructor (name, year){
//    this.name = name
//    this.year = year
//    }
//      age(x){
//    return x - this.year
//  }
//  let date = new Date()
//  let year = date.getFullYear()
//  
//  let mycar = new Car("Tesla", 2022)
// 
//  document.getElementById("motor").innerHTML = "My car is" + mycar.age(year) + "years old"
// 
// 
// 
// 
// 
// 
// 
// 