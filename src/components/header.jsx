
import {
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { ListBulletIcon, PhoneIcon } from '@heroicons/react/24/outline'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div className="flex justify-end  top-0 bg-gray-900 h-30">
 <div className="min-w-0 flex-1  top-0"><a className='headerbtn'>   
        <div className="mt-1 flex flex-col justify-end sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
         
         <a  href='#' > <div className="mt-2 flex items-center text-1xl text-gray-500">
 <ListBulletIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className='viewmenu' href="https://www.restaurantlogin.com/admin/public/login " ><button>Login
              </button></a>
          </div></a>                        
          <a >
          <div className="mt-2 flex items-center text-1xl text-gray-500">
          &nbsp;&nbsp;
          <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a className='viewmenu' href=" https://www.google.com/maps/dir/30.7330661,76.7426196/30.7471009,76.7756689/@30.7376485,76.7414185,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"><button> Get Direction &nbsp;&nbsp; </button></a>
          </div> </a> </div> </a>
      </div></div>)}
