import React from 'react'
import AOS from 'aos';
import Applications from '../Icons/Applications.svg'
import Data from '../Icons/Data.svg'
import 'aos/dist/aos.css';
AOS.init();

export const ApplicationCards = () => {
    return (
        <div className="flex h-96">
            <div className="w-1/2 ml-[20%] mt-[4%]" data-aos="fade-up" data-aos-duration="600">
                <a href="." className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" >
                    <div>
                        <img
                            className=" mr-[1vh]"
                            src={Data}
                            alt="oops"
                            width="35vh" />

                    </div>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-900">
                        Data</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-lg ">Automatically augmenting product data with industry
                        and consumer generated concepts.
                    </p>
                </a>

            </div>
            <div className="w-1/2 mt-[4%]" data-aos="fade-up" data-aos-duration="600">
                <a href="." className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" >
                    <div>
                        <img
                            className=" mr-[1vh]"
                            src={Applications}
                            alt="oops"
                            width="35vh" />
                    </div>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-900">
                        Applications</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">A flexible application suit addressing industry specific needs
                        and use cases.</p>
                </a>
            </div>
        </div>
    )
}
export default ApplicationCards;
