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
      name: 'Maha Shivratri Special',
      description:<p className="discription">
       Best Restaurants in Chandigarh for Dinner !!<br></br>Best Restaurants in Chandigarh for Family Dinner !!<br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
      imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2014/02/Boondi-Ladoo.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'http://www.tasty-indian-recipes.com/articles/maha-shivratri-recipes/',
    },
    {
      name: 'Valentine’s Day Recipes',
      description:<p className="discription">
       <br></br>Best Restaurants in Chandigarh for Family Dinner !!<br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
      imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2014/02/Valentine-day-recipes.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'http://www.tasty-indian-recipes.com/articles/valentines-day-recipes/',
    },
    {
      name: 'Chinese Food Recipes',
      description:<p className="discription">
       Best Restaurants in Chandigarh for Dinner !!<br></br><br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
      imageSrc: 'https://www.thespruceeats.com/thmb/FUiwQ5hpxo91IhSArHIBIiyKTlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
      href: 'https://www.thespruceeats.com/chinese-food-recipes-4061238' ,
    },

    {
        name: 'Biryani Recipes',
        description:<p className="discription">
       Best Restaurants in Chandigarh for Dinner !!<br></br>Best Restaurants in Chandigarh for Family Dinner !!<br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
        imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2014/02/Vegetable-Dum-Biryani.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/top-5-biryani-recipes/' ,
      },
      {
        name: 'Maharashtrian Recipes',
        description:<p className="discription">
       Best Restaurants in Chandigarh for Dinner !!<br></br>Best Restaurants in Chandigarh for Family Dinner !!<br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
        imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2013/08/Maharashtrian-Recipes.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/maharashtrian-recipes/' ,
      },
      {
        name: 'Rajasthani Recipes',
        description:<p className="discription">
       Best Restaurants in Chandigarh for Dinner !!<br></br>Best Restaurants in Chandigarh for Family Dinner !!<br></br>Family Restaurant in Chandigarh!!<br></br>Best Indian Food Restaurant in Chandigarh !!<br></br>Best Places to eat in Chandigarh !!<br></br>"Best Food in Chandigarh!!<br></br>Best Restaurant in Chandigarh!!<br></br>Backhouse Restaurant!!<br></br>
      </p>,
        imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2013/08/Rajasthani-Recipes2.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/rajasthani-recipes/' ,
      },
  ]
  
  
  export default function Navbar() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
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
  