import React, {useState, useEffect} from 'react'
import bitterleaf  from "../assets/images/bitter-leaf.jpeg"
import boli from "../assets/images/boli-groundnut.jpeg"
import efoRiro from "../assets/images/efo-riro.jpeg"
import egusiSoup from "../assets/images/egusi-soup.jpeg"
import jollofRice from "../assets/images/jollof-rice.jpeg"
import moi from "../assets/images/moi-moi.jpeg"
import okra from "../assets/images/okro-soup.jpeg"
import suya from "../assets/images/suya.jpeg"
import nsala from "../assets/images/nsala-soup.jpeg"
import nkwobi from "../assets/images/nkwobi.jpeg"

import recipesData from "../data.json"



export const Home = () => {
  const [recipes, setRecipes] = useState([])

  const imageMap = {
    "https://via.placeholder.com/150": [
      jollofRice,
      egusiSoup,
      suya,
      efoRiro,
      moi,
      bitterleaf,
      boli,
      okra,
      nsala,
      nkwobi,
    ],
  };

  useEffect(() => {
    // Replace image URLs with local imports
    const updatedRecipes = recipesData.map((recipe, index) => ({
      ...recipe,
      image: imageMap["https://via.placeholder.com/150"][index],
    }));
    setRecipes(updatedRecipes);
  }, []);

  return (
    <div className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2'>
        {recipes.map((recipe)=>
            <div className='max-w-sm mx-auto bg-gray-800 p-4 rounded-lg shadow'>
              <h2 className='text-center mb-2'>{recipe.title}</h2>
            <img
            src={recipe.image}
            alt={recipe.title}
            className="mb-2 w-36 h-36 object-cover rounded-full mx-auto bg-white overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            />
              <p className='text-sm'>{recipe.summary}</p>
              
            </div>
        )}
    </div>
  )
}
