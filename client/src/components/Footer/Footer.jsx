import { GithubLogo, FacebookLogo, InstagramLogo } from 'phosphor-react';
import React from 'react'

const Footer = () => {
    return (
        <div className='text-center'> 
            <div className='bg-[#577c72] w-full mx-auto py-1 px-2 grid lg:grid-cols-3 text-gray-300 '>
            <p > ©2023  Giftlab</p>
            <div>
                <ul className='flex justify-between mx-auto w-[75%] py-4'>
                    <li><a href="https://www.facebook.com/"><FacebookLogo size={30} /></a></li>
                    <li><a href="https://www.instagram.com/"><InstagramLogo size={30} /></a></li>
                    <li><a href="https://github.com/Lishakuinkel/giftlab"><GithubLogo size={30} /></a></li>
                </ul>

            </div>
        </div></div>
    )
}

export default Footer