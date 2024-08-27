import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { logo, sun} from '../assets'
import {navlinks} from '../constants'

const Sidebar = () => {
    const navigate = useNavigate()
    const [isActive, setisActive] = useState(dashboard)
  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      Sidebar
    </div>
  )
}

export default Sidebar
