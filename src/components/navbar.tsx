'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { XIcon, MenuIcon } from 'lucide-react'

import { motion} from 'motion/react'
const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Contato",
    href: "/contato",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
  {
    label: "Serviços",
    href: "/servicos",
  }

]
const Navbar = () => {

  const pathname = usePathname()
  const [mobile, setMobile] = useState(false)

  const toggleMobile = () => {
    setMobile(!mobile)
  }
  return (
    <div>
      <div className="flex mx-auto justify-between items-center">
        <Link href="/" className="flex items-center space-x-1">
          <div className="bg-black rounded-full w-6 h-6" />
          <span className="text-xl font-bold">zer0nze</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('hover:text-black', pathname === link.href ? 'text-black' : 'text-neutral-400' )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={toggleMobile}>
          {
            mobile ? ( <XIcon className="w-6 h-6 text-neutral-500" /> ) : ( <MenuIcon className="w-6 h-6 text-neutral-500" /> )
          }
        </button>
      </div>

      <motion.div 
        initial={'close'}
        animate={mobile ? 'open' : 'close'}
        className="md:hidden overflow-hidden"
        variants={{
          open: {
            opacity: 1,
            height: 'auto'
          },
          close: {
            opacity: 0,
            height: 0
          }
        }}
      >
         <div className="flex flex-col space-y-4 pt-4 items-center justify-center h-screen overflow-hidden">
        {
          links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('hover:text-black', pathname === link.href ? 'text-black' : 'text-neutral-400' )}
            >
              {link.label}
            </Link>
          ))
        }  
        </div> 
      </motion.div>
    </div>
  )
}

export { Navbar }
