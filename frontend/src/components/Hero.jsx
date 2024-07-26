import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-1 lg:mt-10 bg-indigo-300">
            {/* hero section */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide ">
                INCLUSION:
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-transparent bg-clip-text">
                    {" "}
                    Vasudhaiva Kutumbakam
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-wrap max-w-4xl">
                Marginalized communities face significant hurdles, primarily due to a
                fundamental lack of awareness and access to information. The digital divide and language barriers further
                restrict their participation, creating a cascading effect that limits broader societal involvement.
                Addressing these challenges is crucial for creating a more inclusive and equitable future.            </p>
            <div className="flex justify-center my-10">
                <Link to='/articles' className="py-3 px-4 rounded-md border bg-slate-400">Articles</Link>
                <Link to='/login' className="bg-gradient-to-r  from-indigo-400 to-indigo-800 py-3 px-4 mx-5 rounded-md cursor-pointer">Login / Signup</Link>
            </div>
        </div>
    )
}

export default Hero;
