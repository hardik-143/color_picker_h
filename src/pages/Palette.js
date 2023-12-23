import React from 'react'
import { useParams } from 'react-router-dom'

const Palette = () => {
    const {paletteSTR} = useParams()
    
    console.log(paletteSTR)
  return (
    <section className="w-[90%] max-w-[1200px] py-5 px-3 md:px-5 overflow-hidden">
        <div className="text-black bg-white p-4 rounded-xl shadow-[0px_4px_15px_rgba(150,150,150,0.32)] relative">
            aslkd
        </div>
    </section>
  )
}

export default Palette