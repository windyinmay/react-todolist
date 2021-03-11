import React from 'react';

export const buttonThemes = {
    blue: {
      color: 'white',
      backgroundColor: 'blue'
    },
    black: {
      color: 'white',
      backgroundColor: 'black'
    }
  }
  
  export default React.createContext({
    theme:buttonThemes.blue,
    switchTheme:() => {}
  })

  
  