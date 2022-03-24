// Importando Hooks
import { useEffect, useState } from "react";
// Importando componentes
import LineChart from "./charts/LineChart" 
import BarChart from "./charts/BarChart" 
// Importando estilos
import './../styles/component/contentDash.scss'

const ContentDash = () => {
  return (
    <>
        <div className='contentDash'>
          <div className='charts'>
            <LineChart/>
            <BarChart/>
            <LineChart/>
          </div>
        </div>
    </>
  )
}

export default ContentDash;