import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projectItem = ({title, backgroundImg, projectInfo, projectURL}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-[#033E8C]">
            <Image src={backgroundImg} className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-l md:text-2xl font-bold tracking-wider text-center">{title}</p>
                <p className="pb-4 pt-2 text-center text-sm md:text-lg">{projectInfo}</p>
                <Link href={projectURL}>
                <p className="text-center py-3 px-3 rounded-lg bg-[#80F2E7] text-white font-bold text-sm md:text- cursor-pointer">More info</p>
                </Link>
            </div>
        </div>
  )
}

export default projectItem