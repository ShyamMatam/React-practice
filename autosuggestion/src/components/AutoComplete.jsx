import React, { useEffect } from 'react'
import { useState } from 'react'
import SuggestionsList from './suggestions-list';


const AutoComplete = ( {
    fetchSuggestions, 
    staticData, 
    placeholder, 
    customLoading = "Loading...", 
    //  customStyles = {}
      onSelect = () => {},
      onChange = () => {},
      onBlur = () => {},
      onFocus = () => {}

}) => {

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
    }

    const getSuggestions = async(query) => {
    setError(null);
    setLoading(true);
    try {
        let result;
        if(staticData) {
            result = staticData.filter((item) => {
                return item.toLowerCase().includes(query.toLowerCase());
            });

        }else if(fetchSuggestions) {
            result = await fetchSuggestions(query);
        } 
        setSuggestions(result);
    } catch(error) {
            setError('failed to fetch suggestions');
            setSuggestions([]);
        
    } finally {
        setLoading(false)
    }
    };

    useEffect(() => {
        if(inputValue.length > 1) {
            getSuggestions(inputValue);
        } else {
            setSuggestions([]);
        }
    }, [inputValue])

    // const fetchSuggestions = async (query) => {
    //     const response = await fetch(
    //         `https://dummyjson.com/recipes/search?q=${query}`
    //     );
    //     if(!response.ok) {
    //         throw new Error("network was not ok");
            
    //     }

    //     const result = await response.json();
    //     return result.recipres;
    // }

  return (
    <div>
      <h1>auto complete</h1>
      <input 
      type='text'
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
    //   onSelect={handleInputChange}
      onBlur={onBlur}
      onFocus = {onFocus}
    //   style={customStyles}
      
      />
           {(suggestions.length > 0 || loading || error) && <ul>
      {error && <div className='error'>{error}</div>}
      {loading && <div className='loading'> {customLoading}</div>}

      <SuggestionsList/>
      </ul>}
    </div>
  )
}

export default AutoComplete
