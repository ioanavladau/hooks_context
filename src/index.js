import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp';

// const App = (props) => {
//   // const array = useState(0); // initial state = 0
//   // what comes back: array of 2: the current state value that's going to change over time & function we can call to update the state

//   // destructure the array
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log("This should only run once!")
//   }, [])
//   // runs once and never again - good for fetching or reading data
//   // complete mirror of componentDidMount


//   // combination between componentDidMount and componentDidUpdate
//   useEffect(() => {
//     console.log("useEffect ran")
//     document.title = count
//   }, [count]) // only run this effect when the count changes

//   const setCustomCount = (e) => {
//     let customString = e.target.value;
//     let eToInt = parseInt(customString);
//     setCount(eToInt);
//   }

//   // const increment = () => {
//   //   setCount(count + 1);
//   // }

//   return (
//     <div>
//       {/* Allow initial count to be configured */}
//       <p>The current {text || 'count'} is { count }</p>
//       <input onClick={(e) => setCustomCount(e)}></input>
//       {/* <button onClick={increment}> +1 </button> */}
//       <button onClick={() => {setCount(count+1)}}>+1</button>
//       <button onClick={() => {setCount(count-1)}}>-1</button>
//       <button onClick={() => {setCount(props.count)}}>Reset</button>
//       <input value={text} onChange={(e) => {setText(e.target.value)}}/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
