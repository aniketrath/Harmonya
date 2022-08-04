import React from 'react'

export const Landing = () => {
    return (
        <div className=" h-screen static">
            <div className="min-h-screen bg-neutral-900">

                <div className="pt-[33vh]">
                    <p className="text-stone-300 w-1/3 text-[4.8rem] font-[400] ml-[20vh] ">
                        Supercharge your product data
                    </p>
                    <p className="text-2xl mt-[3vh] ml-[12vh] text-stone-500 w-1/4 pt-4">Harmonya helps brands and retailers move at the speed of commerce</p>

                </div>
                <div className="text-xl ml-[12%] py-20 w-1/3">
                    <button className="rounded-lg bg-white w-40 pb-1 h-14 font-bold hover:bg-zinc-600 hover:text-slate-100">Get a Demo</button>
                </div>
                <div className="absolute bottom-[20%] right-[5%]">
                    <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7" />
                    </svg>
                </div>

            </div>
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 h-4"></div>

        </div>
    )
}
