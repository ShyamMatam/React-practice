import React from 'react'

const SuggestionsList = ({
    suggestions = [],
    highlight,
    datakey,
    onSuggestionClick,
}) => {
  return (
    <React.Fragment>
      {suggestions.map((suggestion, index) => {
      const currSuggestion = datakey ? suggestion[datakey] : suggestion;

      return (
        <li
        key={index}
        onClick={() => onSuggestionClick(suggestion)}
        className='suggestion-item'
        >{currSuggestion}</li>
      )
      })}
    </React.Fragment>
  )
}

export default SuggestionsList
