import './App.scss';
import { useState } from "react";


const items =["BTC", "ETH", "USDT ETHEREUM", "USDT POLYGON", "USDT BSC"];

function App() {

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [option, setOption] = useState('')

  const handleClick = (event) => {
    event.preventDefault();
    setMsg('')
    setName("")
    setOption("")
 }

  return (
  <div className="container lg:w-1/2 w-10/12">
    <form className='flex flex-col row-5 items-center w-full h-fit'>
      <p>WELCOME</p>
      <label className="flex justify-start lg:w-10/12 w-full text-start text-white pl-4 lg:text-md text-sm">Name</label>
      <input 
        type="text" 
        value={name}
        onChange={(event) => {
          let name = event.target.value;
          setName(name)}
        }
        // placeholder="..."
        className='lg:w-10/12 w-full'/>
    <label className="flex justify-start lg:w-10/12 w-full text-start text-white pl-4 lg:text-md text-sm">Comment</label>
      <input 
        type="text" 
        // placeholder="Comment..." 
        value={msg}
        onChange={(event) => {
          let msg = event.target.value;
          setMsg(msg)}
      }
        className='lg:w-10/12 w-full'/>

<label className="flex justify-start lg:w-10/12 w-full text-start text-white pl-4 lg:text-md text-sm">Currency</label>
      <select 
          placeholder="Currency" 
          value={option}
          onChange={(event) => setOption(event.target.value)}
          className="rounded-3xl border border-gray-300 bg-white p-4 text-left shadow-sm focus:border-blue-500 
          focus:outline-none focus:ring-1 
          focus:ring-blur-500 sm:text-sm 
          lg:w-10/12 w-full cursor-pointer">
              {items.map(item => <option>{item}</option>)}
      </select> 

      <button type="submit" className='p-2 m-0 mt-10' onClick={handleClick}>Continue</button>
    </form>

    <div className="drops">
      <div className="drop drop-1"></div>
      <div className="drop drop-2"></div>
      <div className="drop drop-3"></div>
      <div className="drop drop-4"></div>
      <div className="drop drop-5"></div>
    </div>
  </div>

  );
}

export default App;
