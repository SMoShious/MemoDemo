import React from "react";

function ActivableButton ( props ) {
  
  const {id, label, isActive, isDecorated} = props;

  function handleClick () {
    props.onClick(id)
  }

  function handleButtonDecoration (decider) {
    let className = (decider) ? "button buttonBoth" : "button";

    if (isActive)
      return className + " activeButton";
    else
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
      >
        {label}
      </button>
    </React.StrictMode>
  )
}

export default ActivableButton;