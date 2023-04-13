import { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import {
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { ListBulletIcon, PhoneIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Header() {
  return (
    <div className="flex justify-end sticky top-0 bg-gray-900 h-30">
     <div className="min-w-0 flex-1 sticky top-0">
        
        
        <a className='headerbtn'>   
        <div className="mt-1 flex flex-col justify-end sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
         
         <a  href='#' > <div className="mt-2 flex items-center text-1xl text-gray-500">
 <ListBulletIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className='viewmenu'><button>View Menu 
              {/* <Link to="/menu"> View Menu </Link> */}
              </button></a>
          </div></a>                        
          <a >
          <div className="mt-2 flex items-center text-1xl text-gray-500">
          &nbsp;&nbsp;<MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className='viewmenu'><button> Get Direction </button></a>
          </div> </a> 
          <a >
          <div className="mt-2 flex items-center text-1xl text-gray-500">
           &nbsp; &nbsp;
           <PhoneIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className='viewmenu'><button> Call Now  &nbsp; &nbsp;</button></a>
          </div></a>
          
        </div> </a>
      </div>
     
      
    </div>
  )
}
