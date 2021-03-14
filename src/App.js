import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Header from './components/Header';
import themeContext, {buttonThemes} from './contexts/themeContext';


function App() {
  const[context, setContext] = useState({
    theme:buttonThemes.blue,
    switchTheme: () => {
        setContext(currentValue => (
          {
          ...currentValue,
          theme: currentValue.theme === buttonThemes.blue ? buttonThemes.black : buttonThemes.blue
          }
        )
      )
    }
  })
  return (
    <div className="App">

      <Todolist/>
      <themeContext.Provider value={context}>
        <Header />
      </themeContext.Provider>
    </div>
  );
}

export default App;
