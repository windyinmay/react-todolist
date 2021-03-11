import React, {useContext} from 'react';
import themeContext, {buttonThemes} from '../contexts/themeContext';

function HeaderButton(props) {
  const {theme, switchTheme} = useContext(themeContext);
  return (
    <div>
      <button
        style={{backgroundColor: theme.backgroundColor, color: theme.color}}
        onClick={switchTheme}
      >Press me</button>
    </div>
  );
}

export default HeaderButton;
