import React from 'react'
import Logo from '../assets/QuizAryaLogo.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()

return (
  <div className='flex flex-row bg-[#0c0626] justify-between items-center p-4'>
    <img src={Logo} onClick={() => navigate('/')} alt='logo' className='lg:w-44 w-36 cursor-pointer rounded-full' />
    <button className='bg-white font-bold rounded-full text-black hover:bg-gradient-to-b from-[#13072e] to-[#3f2182] hover:text-white py-2 px-4 border'>
      Contact Us
    </button>
  </div>
)

}

export default Navbar
