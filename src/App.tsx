import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-900 text-white p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="https://placehold.co/50x50" alt="Logo" className="h-8 w-8 mr-2"/>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#" className="text-white hover:text-gray-400">Home</a>
                            <div className="relative">
                                <button onClick={() => setIsAboutOpen(!isAboutOpen)} className="text-white hover:text-gray-400 flex items-center">
                                    About us <i className="fas fa-chevron-down ml-1"></i>
                                </button>
                                {isAboutOpen && (
                                    <div className="absolute bg-gray-800 mt-2 rounded shadow-lg">
                                        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Our Team</a>
                                        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Our Story</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="text-white hover:text-gray-400">Resources</a>
                            <a href="#" className="text-white hover:text-gray-400">Colabs</a>
                            <a href="#" className="text-white hover:text-gray-400">Products</a>
                            <a href="#" className="text-white hover:text-gray-400">Blog</a>
                            <a href="#" className="text-white hover:text-gray-400">Shop</a>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden mt-4">
                            <a href="#" className="block text-white hover:text-gray-400">Home</a>
                            <div className="relative">
                                <button onClick={() => setIsAboutOpen(!isAboutOpen)} className="block w-full text-left text-white hover:text-gray-400 flex items-center">
                                    About us <i className="fas fa-chevron-down ml-1"></i>
                                </button>
                                {isAboutOpen && (
                                    <div className="bg-gray-800 mt-2 rounded shadow-lg">
                                        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Our Team</a>
                                        <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Our Story</a>                                                                        
                                    </div>
                                )}
                            </div>
                            <a href="#" className="block text-white hover:text-gray-400">Resources</a>
                            <a href="#" className="block text-white hover:text-gray-400">Colabs</a>
                            <a href="#" className="block text-white hover:text-gray-400">Products</a>
                            <a href="#" className="block text-white hover:text-gray-400">Blog</a>
                            <a href="#" className="block text-white hover:text-gray-400">Shop</a>
                        </div>
                    )}
                </nav>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
