import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const friendsArray = [
    { name: 'Junayed Babu', age: 23, height: '68' },
    { name: 'Abdullah Khan', age: 22, height: '65' },
    { name: 'Shovon Mandal', age: 24, height: 63 }
  ];
  const Products = [
    { name: 'Hp core i5 Laptop', price: '$690', color: 'Black' },
    { name: 'Asus core i7 Laptop', price: '$799', color: 'Silver' },
    { name: 'Lenove core i7 Laptop', price: '890', color: 'black' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* simply  use component */}
        <Person name="David Marlo" passion="Dancing"></Person>
        <Person name="Ed Sheeran" passion="Singing"></Person>

        {/* 2nd way to use component, more dainamicaly */}
        <Product item={Products[0]}> </Product>
        <Product item={Products[1]}> </Product>
        <Product item={Products[2]}> </Product>

        {/*  3 rd way to use component, Full dainamicaly*/}
        {
          friendsArray.map(element => <Friend friend={element}></Friend>)
        }

        {/* Use react state  */}
        <Counter> </Counter>

        {/*Daynamic users data calling */}
        <Users></Users>
      </header>
    </div>

  );
}


// simply create and use component
function Person(props) {
  const PersonStyle = {
    border: '3px solid blue',
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '15px',
    margin: '5px',
    width: '440px',
    color: 'white'
  }
  return (
    <div style={PersonStyle}>
      <h2>I am : {props.name}</h2>
      <h4>My passion : {props.passion}</h4>
      <p></p>

    </div>
  )
}


//Second way to create and use component
function Product(props) {
  const ProductStyle = {
    border: '3px solid gray',
    backgroundColor: 'lightblue',
    padding: '15px',
    borderRadius: '15px',
    margin: '5px',
    width: '440px',
    color: 'black',

  }
  const btnStyle = {
    backgroundColor: 'darkblue',
    border: '2px solid lightgray',
    padding: '10px 20px',
    textAlign: 'center',
    color: 'white',
    borderRadius: '10px'
  }
  return (
    <div style={ProductStyle}>

      <h3>Name: {props.item.name} </h3>
      <h5>Price:  {props.item.price} </h5>

      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}


// 3rd way to create and use component
function Friend(props) {
  const friendStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px',
    margin: '3px',
    width: '400px',
    borderRadius: '10px',
  }
  return (
    <div style={friendStyle}>
      <h3>Name : {props.friend.name}</h3>
      <h6>Age : {props.friend.age} </h6>
      <h6>Height : {props.friend.height} </h6>
    </div>

  )
}

// Creat and use a state
function Counter() {
  const [count, setCount] = useState(0);
  const handelBtn = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const handelBtnDecrese = () => {
    const newCount = count - 1;
    setCount(newCount)
  }

  return (
    <div>
      <h1>Count Value:  {count}  </h1>
      <button onClick={handelBtn} style={{ backgroundColor: 'orange', padding: '20px', borderRadius: '10px' }}>Increse Count Value</button>

      <button onClick={handelBtnDecrese} style={{ backgroundColor: 'orangered', padding: '20px', borderRadius: '10px' }}> Decrease Count Value</button>
    </div>
  )
}

// Use API, Daynamic user data
function Users(){
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } )

  return(
    <div>
      <h2>Total Daynamic Users: {users.length} </h2>
      <p>Using API</p>
      
        {/* <div>
          {
            users.map(user => <h2>{user.name}</h2>)
          }
        </div> */}
     
          {
            users.map(user => <div style={{backgroundColor:'gray', padding:'10px', margin:'10px', border:'2px solid lightgray', borderRadius: '10px'}}>
               <h2>{user.name}</h2> 
               <p>{user.email}</p>
            </div>)
          }
        
      
    </div>
  )
}
export default App;
