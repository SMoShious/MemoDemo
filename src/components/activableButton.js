import React from "react";

function ActivableButton ( props ) {
  
  const {id, label, isActive, isDecorated, isDisabled, customClassName} = props;

  function handleClick () {
    props.onClick(id)
  }

  function handleButtonDecoration (decider) {
    let className = (decider) ? "button buttonBoth" : "button";

    if (isActive) {
      className += " activeButton";
    } else {
      className += " deactivBtn";
    }
    if (customClassName) {
        className += ` ${customClassName}`;
    }
    
    return className;
  }

  return (
    <React.StrictMode>
      <button
        type="button"
        className={
          handleButtonDecoration(isDecorated)
        }
        onClick={handleClick}
        disabled={isDisabled}
      >
        {label}
      </button>
    </React.StrictMode>
  )
}

export default ActivableButton;