import React from 'react'
import { useGlobalContext } from '../context';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { makeRGBSTR } = useGlobalContext();
  return (
    <main
    className="min-h-screen w-full flex justify-center items-start transition-all duration-500 ease-linear font-outfit"
    style={{
      background: makeRGBSTR(),
    }}
  >
    <Toaster position="bottom-center" reverseOrder={false} />
    <Outlet />
    </main>
  )
}

export default Layout