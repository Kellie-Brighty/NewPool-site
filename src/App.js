import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './MainPage'
// import { createMuiTheme } from '@material-ui/core/styles';


const LightTheme = {
  background: '#c2eeff',
  titleColor: 'black',
  upcomingBg: '#D2D9FF',
  subscribeBg: 'white',
  linkColor: 'black'
}

const DarkTheme = {
  background: '#000512',
  titleColor: 'white',
  upcomingBg: 'black',
  subscribeBg: 'black',
  LogoColor: 'white',
  heroImage: 'url("black bg.jpg")',
  appBar: 'black',
  linkColor: 'white',
  btn: 'white',
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#FF3465',
//     },
//     secondary: {
//       main: '#fff',
//     },
//   },
// });


function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Router>
            <Switch>
            <Route>
              <MainPage path='/' theme={theme} setTheme={setTheme} />
            </Route>
            </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App;
