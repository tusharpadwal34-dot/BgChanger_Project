import { useState } from 'react'

function App() {
  const [color,setColor] = useState("Black")

  return (
    <>
      <div className="w-screen h-screen duration-200"
      style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
            onClick={()=>setColor("aqua")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"aqua"}}>aqua</button>

            <button
            onClick={()=>setColor("crimson")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"crimson"}}>crimson</button>

            <button
            onClick={()=>setColor("royalblue")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"royalblue"}}>Blue</button>

            <button
            onClick={()=>setColor("seagreen")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"seagreen"}}>Green</button>

            <button
            onClick={()=>setColor("goldenrod")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"goldenrod"}}>Gold</button>

            <button
            onClick={()=>setColor("darkorchid")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"darkorchid"}}>Purple</button>

            <button
            onClick={()=>setColor("hotpink")}
            className="outline-none px-4 rounded-full text-white shadow-lg"
            style={{backgroundColor:"hotpink"}}>Pink</button>

          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
