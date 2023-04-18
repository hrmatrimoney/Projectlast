import React from "react"
import { Rating } from "flowbite-react"
export default function Rating5(){
    return(
<Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
    5 out of 5
  </p>
</Rating>
    )
}
