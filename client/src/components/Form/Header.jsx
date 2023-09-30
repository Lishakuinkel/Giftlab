import React from 'react';
import {Link} from 'react-router-dom';
import darklogo from '../../assets/darklogo.png'

const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}) => {
  return (
    <div className="mb-10">
    <div className="flex justify-center">
        <img 
            alt="logo"
            className="h-44 w-44"
            src={darklogo}/>
    </div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600">
    {paragraph} {' '}
    <Link to={linkUrl} className="font-medium text-[#3a685b] hover:text-[#64a579]">
        {linkName}
    </Link>
    </p>
</div>
  )
}

export default Header