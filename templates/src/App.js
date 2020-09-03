module.exports = `import React, { useState, useEffect} from 'react'
import logo from './logo.png'
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const userStyles = makeStyles(() => ({
  app: {
    height: '100vh',
    backgroundColor: '#FFF'
  },
  appHeader: {
    textAlign: 'center'
  },
  appLogo: {
    display: 'block',
    height:'12.5em',
    width: '12.5em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-3.5em',
    marginLeft: '-6.1em',
    animation: \`$spin 3000ms linear infinite\`
  },
  appIntro: {
    textAlign:'center',
    margin: '80px 0'
  },
  "@keyframes spin": {
    "from": {
      opacity: 1,
      transform: 'rotate(0deg)'
    },
    "to": {
      opacity: 1,
      transform: "rotate(360deg)"
    }
  }
}))

function App() {
  const classes = userStyles()
  return (
    <>
      <div className={classes.app}>
        <div >
          <img src={logo} className={classes.appLogo} alt="logo" />
          <h2 className={classes.appHeader}>Welcome to React</h2>
        </div>
        <Typography className={classes.appIntro}>
        To get started, edit <code>src/App.js</code> and save to reload.
        </Typography>
      </div>
    </>
  )
}
export default App
`