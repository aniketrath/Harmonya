import React from 'react'

export const Navigation = () => {
  return (
    <div className="flex absolute h-20 inset-x-0 top-0  bg-neutral-900">

        <div className="w-3/5 pl-8 py-5 min-h-full text-neutral-100 ">
            <p className="text-3xl"> Harmonya</p>
        </div>
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-xl px-10 mx-4 py-6 hover:cursor-default">Home</p>
        </div>
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-xl px-10 mx-4 py-6 hover:cursor-default">Solutions</p>
        </div>
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-xl px-10 mx-4 py-6 hover:cursor-default">About</p>
        </div>
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-xl px-10 mx-4 py-6 hover:cursor-default">Career</p>
        </div>
        <div className="text-xl px-10 mx-4 py-3">
            <button className="rounded-lg bg-white w-40 pb-1 h-14 font-bold hover:bg-zinc-600 hover:text-slate-100">Get a Demo</button>
        </div>

    </div>
  )
}

