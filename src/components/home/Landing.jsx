import React from 'react'

function Landing() {
  return (
    <>
      <div className="wrapper w-full px-[100px] flex ">

        <div className="left w-[50%]  pt-[200px]">
            {["One Chai", "Please!", "Without Sugar"].map((item, index)=>(
              <div className={` font-[Oswald Regular] text-7xl leading-tight font-bold ${index===9 && 'ml-[200px]'}`}>{item}</div>
            ))}
        </div>

        <div className="right w-[50%] flex items-start justify-center  pt-[100px] ">
            <img src="download.jpeg" className=' w-full h-full p-3 object-cover' alt="" />
        </div>
      </div>
    </>
  )
}

export default Landing
