import React from 'react'
import Image from 'next/image'
import Rstudio from '../../public/assets/Rstudio.png'
import Excel from '../../public/assets/excel.png'
import Powerbi from '../../public/assets/powerbi.png'
import Python from '../../public/assets/python.png'
import SQL from '../../public/assets/sql.png'
import Tableau from '../../public/assets/tableau.png'

const skills = () => {
  return (
    <div>
        <div>
            <p className='text-4xl font-bold py-5'>Technical Skills</p>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-3 items-center justify-center md:justify-between px-9'>
            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 my-3 px-4 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={Rstudio} />
                <p className='font-bold self-center place-self-center text-2xl px-5'>R Studio</p>

            </div>
            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 my-3 px-4 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={Excel} />
                <p className='font-bold self-center text-2xl px-5'>Excel</p>

            </div>
            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 px-4 my-3 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={Powerbi} />
                <p className='font-bold self-center text-2xl px-5'>Power BI</p>
            </div>

            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 px-4 my-3 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={Python} />
                <p className='font-bold self-center text-2xl px-5'>Python </p>
            </div>

            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 px-4 my-3 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={SQL} />
                <p className='font-bold self-center text-2xl px-5'>SQL</p>
            </div>

            <div className='w-[60vw] md:w-[25vw] bg-[#023059] py-5 px-4 my-3 flex-row flex'>
                <Image className='h-[20vh] w-[20vw] md:w-[10vw]' src={Tableau} />
                <p className='font-bold self-center text-2xl px-5'>Tableau</p>
            </div>
        </div>
    </div>
  )
}

export default skills