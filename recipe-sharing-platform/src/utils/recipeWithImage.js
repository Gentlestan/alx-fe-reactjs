// src/utils/recipesWithImages.js
import bitterleaf from "../assets/images/bitter-leaf.jpeg";
import boli from "../assets/images/boli-groundnut.jpeg";
import efoRiro from "../assets/images/efo-riro.jpeg";
import egusiSoup from "../assets/images/egusi-soup.jpeg";
import jollofRice from "../assets/images/jollof-rice.jpeg";
import moi from "../assets/images/moi-moi.jpeg";
import okra from "../assets/images/okro-soup.jpeg";
import suya from "../assets/images/suya.jpeg";
import nsala from "../assets/images/nsala-soup.jpeg";
import nkwobi from "../assets/images/nkwobi.jpeg";

import recipesData from "../data.json";

const imageMap = {
  "jollof-rice": jollofRice,
  "egusi-soup": egusiSoup,
  "suya": suya,
  "efo-riro": efoRiro,
  "moi": moi,
  "bitterleaf": bitterleaf,
  "boli": boli,
  "okra-soup": okra,
  "nsala-soup": nsala,
  "nkwobi": nkwobi,
};

export const recipesWithImages = recipesData.map((recipe) => ({
  ...recipe,
  image: imageMap[recipe.imageKey],
}));
