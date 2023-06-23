"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true
  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image className="object-contain" src="/assets/images/logo.svg" alt="Promptopia Logo" width={30} height={30}/>
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop(larger than x-small) Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ?
        (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              {/* resume here */}
            </button>
          </div>
        ) :
        (
          <></>
        ) 
      }
      </div>
    </nav>
  )
}

export default Nav