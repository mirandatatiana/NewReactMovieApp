import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const menu = [
        { id: 1, text: 'HOME', to: '/' },
        { id: 2, text: 'TOP RATED', to: '/toprated' },
        { id: 3, text: 'NOW PLAYING', to: '/nowPlaying' },
        { id: 4, text: 'UP COMING', to: '/upcoming' },
        { id: 4, text: 'POPULAR', to: '/popular' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <header className='bg-gradient-to-r from-violet-900 to-fuchsia-800'>
            {/* desktop nav  */}
            <nav className="flex items-center px-12 bg-transparent border-gray-300 py-10 bg-gradient-to-r from-violet-900 to-fuchsia-800">
                {/* brand  */}
                <div className="flex items-center space-x-2 flex-grow">
                    <h1 className="text-2xl font-semibold text-white select-none">ReactTailwind</h1>
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-3">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <button className='text-xl text-white hidden md:flex lg:flex space-x-3 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-violet-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ' >
                                    <a href={item.to} className="text-white text-2xl">{item.text}</a>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-white border focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-gradient-to-r from-violet-900 to-fuchsia-800 shadow-lg mx-6 mt-2 rounded-lg  py-4 block md:hidden lg:hidden">
                        <ul>
                            {menu.map(item => (
                                <a key={item.id} href={item.to} className="text-white text-2xl rounded-md p-2 text-gray-400 hover:bg-violet-950/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                                    <li className="py-2 px-3 w-full  cursor-default">
                                        {item.text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {/* button  */}

                    </nav>
                </Fade>
            )}
        </header>
    )
}


export default Navbar





