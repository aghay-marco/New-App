import React from "react";
import Greeting from "./Components/Greeting";
import Website from './Components/Welcome'
const App = () => {
  // const clickHandler = (props) => {
  //   alert("hi" + " " + props)
  // }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', fontSize: 22 }} >

      {/* <Website age={25} handler={() => clickHandler("Mahdi")} />
      <Website name="amir" age={24} handler={() => clickHandler("amir")} /> */}
      <Greeting isLoggedIn={true} />
    </div >
  )
}

export default App;
