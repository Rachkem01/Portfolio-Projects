
import React from "react"
import Start from "./Start"
import Quiz from "./Quiz"
import Result from "./Results"
import { DataProvider } from "./Context"

function GlobalProvider (){
return(
  
    <DataProvider>
        <Start/>
        <Quiz/>
        <Result/>
    </DataProvider>
)
}
export default GlobalProvider