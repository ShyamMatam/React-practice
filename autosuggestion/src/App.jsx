import React, { useEffect, useState } from "react";
import AutoComplete from "./components/autocomplete";
import "./App.css"


// NOTE : avoid CACHE
const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  //cache always take a object and always preserve the prev in object
  const [cache, setCache] = useState({})

  const fetchData = async () => {
    
    //it will check the cache[input] first, if it present, it will fetch data  it, if not it will go to next
    if(cache[input]) {
    console.log("Cache Returned", input)
      setCache(cache[input]);
      return;
    }
    
    //next - 
    console.log("Api call",input)
    const res = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const data = await res.json();
    setResults(data?.recipes || []);
    setCache(prev => ({...prev, [input]: data?.recipes}))
  };

  useEffect(() => {
   const timer = setTimeout(fetchData ,300);

   //it is for when user still types after 300ms , so after it will clear 300ms, and start again
   return () => {
    clearInterval(timer);
   }
  }, [input]);

  return (
    <div>
      <h1>Auto complete</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
        //when clicked outside, it will close
        onBlur={() => setShowResults(false)}
      />
     { showResults && <div className="results-container">
        {results.map((r) => (
          <span className="results-name" key={r.id}>{r.name}</span>
        ))}
      </div>}
    </div>
  );
};

export default App;
