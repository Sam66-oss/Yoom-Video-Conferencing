import React, {ReactNode} from 'react'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const Rootlayout = ({children} : {children :
ReactNode }) => {
  return (
    <main>
        <Navbar/>
        {children}
        Footer 
    </main>
  )
}

export default Rootlayout