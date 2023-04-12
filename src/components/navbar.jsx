/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: 'Breakfast',
    description:<p className="discription">
    
    </p>,
    imageSrc: '',
     href: '',
  },
  {
    name: 'Lunch',
    description:<p className="discription">
    
    </p>,
    imageSrc: '',
     href: '',
  },{
    name: 'Dinner',
    description:<p className="discription">
    
    </p>,
    imageSrc: '',
     href: '',
  },

    {
      name: 'Maha Shivratri Special',
      description:<p className="discription">
      
      </p>,
      imageSrc: 'https://media.istockphoto.com/id/514518588/photo/indian-fasting-food-recipes-mahashivratri-food-navratri-food-vrat-food.jpg?s=612x612&w=0&k=20&c=We5VDpeeRY8vIgDljvozDbZjL3RZXy94ikJkyX7C_A8=',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'http://www.tasty-indian-recipes.com/articles/maha-shivratri-recipes/',
    },
    {
      name: 'Valentine’s Day Special',
      description:<p className="discription" >
       
      </p>,
      imageSrc: 'https://media.istockphoto.com/id/1294939955/photo/valentines-or-mothers-day-breakfast-table-scene-on-a-dark-wood-background-with-heart-shaped.jpg?s=612x612&w=0&k=20&c=SGlRQunjMg0GV6aDr0bbnRYDXHbpHY15NXxGuv5vcH4=',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'http://www.tasty-indian-recipes.com/articles/valentines-day-recipes/',
    },
    {
      name: 'Chinese Food',
      description:<p className="discription">
       </p>,
      imageSrc: 'https://www.thespruceeats.com/thmb/FUiwQ5hpxo91IhSArHIBIiyKTlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
      href: 'https://www.thespruceeats.com/chinese-food-recipes-4061238' ,
    },

    {
        name: 'Biryani',
        description:<p className="discription">
       </p>,
        imageSrc: 'https://media.istockphoto.com/id/469866881/photo/mutton-gosht-biryani.jpg?s=612x612&w=0&k=20&c=FH6dExVNp_hb9JtJCyGrmKAhPJwQo3UdlMC6gHCbVLg=',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/top-5-biryani-recipes/' ,
      },
      {
        name: 'Maharashtrian Food',
        description:<p className="discription">
      </p>,
        imageSrc: 'https://assets.zeezest.com/blogs/PROD_misal_pav_maharashtra_food_zee_zest_1632233918047_thumb_1000.jpeg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/maharashtrian-recipes/' ,
      },
      {
        name: 'Rajasthani Food',
        description:<p className="discription">
      </p>,
        imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2013/08/Rajasthani-Recipes2.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/rajasthani-recipes/' ,
      },
      {
        name: 'South Indian Food',
        description:<p className="discription">
      </p>,
        imageSrc: 'https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=',
        href: 'https://www.vegrecipesofindia.com/recipes/south-indian-recipes/' ,
      },
      {
        name: 'Punjabi Food',
        description:<p className="discription">
      </p>,
        imageSrc: 'https://www.thestatesman.com/wp-content/uploads/2022/02/istockphoto-1.jpg',
        href: 'https://www.vegrecipesofindia.com/recipes/punjabi-recipes/' ,
      },{
        name: 'Indian Desert',
        description:<p className="discription">
      </p>,
        imageSrc: 'https://nomadparadise.com/wp-content/uploads/2022/01/indian-desserts-01-1024x683.jpg.webp',
        href: 'https://www.vegrecipesofindia.com/recipes/desserts-recipes/' ,
      },
  ]
  
  
  export default function Navbar() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Our Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  