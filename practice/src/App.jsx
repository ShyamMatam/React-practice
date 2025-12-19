import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { createContext, useContext, useState } from 'react'
import "./App.css";

// step-1

// const themeContext = createContext('light')

// step-2

// const ThemeButton = () => {
//   const theme = useContext(themeContext);
//   return <>
//   <div>
//     <button style={{background : theme === "dark" ? "#fff123" : "#aaa"}}>click me</button>
//   </div>
//   </>
// }

// function App() {

//   return (
//     <>
//       <themeContext.Provider value='dark'>
//         <ThemeButton/>
//       </themeContext.Provider>

//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useHref } from 'react-router-dom'

// const App = () => {

//   // const ref = useRef(0);
//   const inputRef = useRef(null)
//   // const handleClick = () => {
//   //   ref.current++;
//   //   alert(`button clikced ${ref.current}`)
//   // }
//   const handleClick = () => {
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input ref={inputRef}/>
//       <button onClick={handleClick}>click me</button>

//     </div>
//   )
// }

// export default App

// import React from 'react'

// const Expensive = ({num}) => {

//   const squared =useMemo(()=> {
//       console.log('calculating')
//       return num * num;
//     },[num]);
//     return <p>squared: {squared}</p>
//   }

// const App = () => {
//   const [num, setNum] = useState(2)
//   return (
//     <div>
//       <Expensive num={num}/>
//       <button onClick={() => setNum(num + 1)}>clik me</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// function Button({handleClick}) {
//   return <><button onClick={handleClick}>clickme</button></>
//     }

// const App = () => {
// const [count, setCount] = useState(0);

//  const increment = useCallback(() => {
//   setCount((pre => pre +1))
//  })

//   return (
//     <div>
//       <p>{count}</p>
//       <Button handleClick={increment}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>Name</label>
//       <input id={id} type='text'/>
//     </div>
//   )
// }

// export default App;

// what is useId

//useEffect and fetch data

//  import { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); //

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         // Handle non-OK network responses
//         if (!res.ok) {
//           throw new Error("Network response was not ok"); //
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data); // `setUsers` is the correct function to update the `users` state
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error); // Capture the error in state
//         setLoading(false);
//       });
//   }, []);

//   // Conditional rendering based on state
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   // Display error message if the fetch failed
//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <ul>
//         {users.map((user) => ( // Corrected syntax for `map` function with parentheses
//           <li key={user.id}>{user.name}</li> // The `key` prop is crucial for list items
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

//useRef
// import { useRef } from 'react';
// const App = () => {
// const inputRef = useRef(null);

// const handleClick = () => {
// inputRef.current.focus();
// }

// return (
//   <>
//   <input ref={inputRef} type='text' placeholder='type here'/>

//   <button onClick={handleClick}>Focus</button>
//   </>
// )
// }
//

//Forms

// const Forms = () => {
//   const [name, setName] = useState('');

//   const handleChange = (e) => {
//     setName(e.target.value);

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`hello ${name}`);
//   };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
// <input type='text' value={name} onChange={handleChange}></input>
// <button type="submit">submit</button>
//     </form>
//     </>
//   )
// }

// export default Forms;

// prop drilling

// const Props = () => {
//   const name = "shyam";
//   const email = "matam01@gmail.com";
//   return (
//     <>
//     <Child name ={name} email = {email}
//     />
//     </>
//   )
// }

// export default Props;

// const Child = ({name, email}) => {
//   return (
//     <>
//     <GrandChild name = {name} email = {email}/>
//     </>
//   )
// }

// const GrandChild = ({name, email}) => {
//   return (
//     <>
//     <h1>{name}</h1>
//     <h1>{email}</h1>
//     </>
//   )
// }

//router-dom

// import { Routes, Link, Route, BrowserRouter} from 'react-router-dom'

// function Home() {
//   return <h1>home</h1>
// }

// function About() {
//   return <h1>About</h1>
// }

// function Contact() {
//   return <h1>Contact</h1>
// }

// function App() {
//   return (
//  <BrowserRouter>

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         </Routes>

// </BrowserRouter>
//   )
// }

// export default App;

// fetching data using fetch

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     fetch("https://api.restful-api.dev/objects")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         console.log(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>hello</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.data
//               ? Object.entries(user.data).map(([key, value]) => (
//                   <div key={key}>
//                     {key}: {value}
//                   </div>
//                 ))
//               : "No data"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import TabForm from "./machinecoding/tabform/compoenets/TabForm";
import Pagination from "./machinecoding/pagination/components/Pagination";
import SearchFilter from "./machinecoding/searchfilter/SearchFilter";
import TodoApp from "./machinecoding/todo/TodoApp";
import Acoordion from "./machinecoding/accordion/components/Acoordion";
import Chips from "./machinecoding/chips/Chips";
import ProgressBar from "./machinecoding/progress-bar/Progress-Bar";
import Pb from "./machinecoding/progress-bar/Progress-Bar";
import DataTable from "./machinecoding/data-table/DataTable";

const App = () => {

  //Accordion
  const items = [
    {title : "javascript-1",
      content : "js1"
    },
    {title : "javascript2",
      content : "js2"
    },
    {title : "javascript3",
      content : "js3"
    },
    {title : "javascript4",
      content : "js4"
    },
    {title : "javascript5",
      content : "js5"
    }

  ]
  return (
    <div>
      {/* <TabForm/> */}
      {/* <Pagination/> */}
      {/* <SearchFilter/> */}
      {/* <TodoApp/> */}
     {/* <Acoordion items={items}/> */}
     {/* <Chips/> */}
     {/* <Pb/> */}
     <DataTable/>
    </div>
  )
}

export default App
