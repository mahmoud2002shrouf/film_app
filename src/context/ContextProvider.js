import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext({
  shows: false,
  show: () => {},
  close: () => {},
  showbox: false,
  showboxT: () => {},
  showboxF: () => {},
  datasearch: '',
  setdataing: (data) => {},
})

const ContextProvider = (props) => {
  const [shows, setshow] = useState(false)
  const [showbox, setshowbox] = useState(false)
  const [datasing, setdata] = useState({ name: '' })
  const handelshow = () => {
    setshow(true)
  }
  const handelclose = () => {
    setshow(false)
  }
  const showboxT = () => {
    setshowbox(true)
  }
  const showboxF = () => {
    setshowbox(false)
  }
  const handelsearch = (data) => {
    setdata(data)
  }

  const data = {
    shows: shows,
    show: handelshow,
    close: handelclose,
    showbox: showbox,
    showboxT: showboxT,
    showboxF: showboxF,
    setdataing: handelsearch,
    datasearch: datasing,
  }
  return <Context.Provider value={data}>{props.children}</Context.Provider>
}

export default ContextProvider
