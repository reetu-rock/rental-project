import React, { useEffect } from 'react'
import data from './testData/Data.json';
import Dashboard from './containers/dashboard/dashboard' 

const App = () => {
  useEffect(() => {
    window.localStorage.setItem("rentalData", JSON.stringify(data))
  },[])

 return <div><Dashboard/></div>
}

export default App