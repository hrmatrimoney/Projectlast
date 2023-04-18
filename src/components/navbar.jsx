
const callouts = [
  {
    description:<p className="discription">
    <h5 style={{
      textAlign:"center",

    }}>Breakfast</h5>
    </p>,
    imageSrc: 'https://cdn.pixabay.com/photo/2017/01/12/14/22/coffee-1974841__340.jpg',
     href: 'http://www.tasty-indian-recipes.com/indian-breakfast/',
  },
  {
   
    description:<p className="discription">
    <h5 style={{
      textAlign:"center",

    }}>Lunch</h5>
    </p>,
    imageSrc: 'https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129__340.jpg',
     href: 'https://www.indianhealthyrecipes.com/recipes/lunch-box/',
  },{
  
    description:<p className="discription">
    <h5 style={{
      textAlign:"center",

    }}>Dinner</h5>
    </p>,
    imageSrc: 'https://cdn.pixabay.com/photo/2016/06/03/14/31/dinner-1433494__340.jpg',
     href: 'https://www.indianhealthyrecipes.com/indian-dinner-recipes/',
  },

    {
      description:<p className="discription">
      <h5 style={{
      textAlign:"center",

    }}>Maha Shivratri Special</h5>
      </p>,
      imageSrc: 'https://media.istockphoto.com/id/514518588/photo/indian-fasting-food-recipes-mahashivratri-food-navratri-food-vrat-food.jpg?s=612x612&w=0&k=20&c=We5VDpeeRY8vIgDljvozDbZjL3RZXy94ikJkyX7C_A8=',
       href: 'http://www.tasty-indian-recipes.com/articles/maha-shivratri-recipes/',
    },
    {
      name: '',
      description:<p className="discription" >
       <h5 style={{
      textAlign:"center",

    }}>Valentine’s Day Special</h5>
      </p>,
      imageSrc: 'https://media.istockphoto.com/id/1294939955/photo/valentines-or-mothers-day-breakfast-table-scene-on-a-dark-wood-background-with-heart-shaped.jpg?s=612x612&w=0&k=20&c=SGlRQunjMg0GV6aDr0bbnRYDXHbpHY15NXxGuv5vcH4=',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'http://www.tasty-indian-recipes.com/articles/valentines-day-recipes/',
    },
    {
      name: '',
      description:<p className="discription">
        <h5 style={{
      textAlign:"center",

    }}>Chinese Food</h5>
       </p>,
      imageSrc: 'https://www.thespruceeats.com/thmb/FUiwQ5hpxo91IhSArHIBIiyKTlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
      href: 'https://www.thespruceeats.com/chinese-food-recipes-4061238' ,
    },

    {
        name: '',
        description:<p className="discription">
            <h5 style={{
      textAlign:"center",

    }}>Biryani</h5>
       </p>,
        imageSrc: 'https://media.istockphoto.com/id/469866881/photo/mutton-gosht-biryani.jpg?s=612x612&w=0&k=20&c=FH6dExVNp_hb9JtJCyGrmKAhPJwQo3UdlMC6gHCbVLg=',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/top-5-biryani-recipes/' ,
      },
      {
        name: '',
        description:<p className="discription">
          <h5 style={{
      textAlign:"center",

    }}>Maharashtrian Food</h5>
      </p>,
        imageSrc: 'https://assets.zeezest.com/blogs/PROD_misal_pav_maharashtra_food_zee_zest_1632233918047_thumb_1000.jpeg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/maharashtrian-recipes/' ,
      },
      {
        name: '',
        description:<p className="discription">
           <h5 style={{
      textAlign:"center",

    }}>Rajasthani Food</h5>
      </p>,
        imageSrc: 'http://www.tasty-indian-recipes.com/wp-content/uploads/2013/08/Rajasthani-Recipes2.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',    
        href: 'http://www.tasty-indian-recipes.com/articles/rajasthani-recipes/' ,
      },
      {
        name: '',
        description:<p className="discription">
           <h5 style={{
      textAlign:"center",

    }}>South Indian Food</h5>
      </p>,
        imageSrc: 'https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=',
        href: 'https://www.vegrecipesofindia.com/recipes/south-indian-recipes/' ,
      },
      {
        name: '',
        description:<p className="discription">
          <h5 style={{
      textAlign:"center",

    }}>Punjabi Food</h5>
      </p>,
        imageSrc: 'https://www.thestatesman.com/wp-content/uploads/2022/02/istockphoto-1.jpg',
        href: 'https://www.vegrecipesofindia.com/recipes/punjabi-recipes/' ,
      },{
        name: '',
        description:<p className="discription">
              <h5 style={{
      textAlign:"center",

    }}>Indian Desert</h5>
      </p>,
        imageSrc: 'https://nomadparadise.com/wp-content/uploads/2022/01/indian-desserts-01-1024x683.jpg.webp',
        href: 'https://www.vegrecipesofindia.com/recipes/desserts-recipes/' ,
      },
  ]
   export default function Navbar() {
    return (
      <div className=" bg-gray-100  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:max-w-none lg:py-32  "> <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative scale-90 hover:scale-110 ease-in duration-500"> <h3 className="">
                    <a href={callout.href}>
                      <span className="absolute inset-0 mt-5 text-sm text-gray-500" />
                      {callout.name}
                      <p className=" text-base font-semibold text-gray-900 inset-0 mt-5 text-sm text-gray-500">{callout.description}</p>
                  <div className="viewall relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-90 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center " />
                  </div> </a></h3></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    )
  }
  