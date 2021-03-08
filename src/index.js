import React from 'react'
import styles from './styles.module.css'

/* require vs import  */

// using require
const ReactDOM = require('react-dom')

// using import: uncommnet to test
// import ReactDOM from 'react-dom'

const ReactDom = require('react-dom')

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
