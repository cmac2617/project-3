const mongoose = require("mongoose");
const places = require("../models/places");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/database"
);

const placesSeed = [
  {
  title: "ThornCreek Winery",
  description: "Winery",
  addresss: "155 Treat Rd., Aurora, OH 44202",
  phone: "(330)562-9245",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Wine"
  },
  {
  title: "Fleming's Prime Steakhouse & Wine Bar",
  description: "Fine Dining Resturant",
  addresss: "4000 Medina Rd. Akron Oh 44333",
  phone: "(330)670-5200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Blue Point Grille",
  description: "Fine Dining Resturant",
  addresss: "700 W St. Clair Ave, Cleveland, Oh. 44113",
  phone: "(216)875-7827",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Morton's Steakhouse",
  description: "Fine Dining Resturant",
  addresss: "1600 W 2nd St, Cleveland, Oh. 44113",
  phone: "(216)621-6200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Morton's Steakhouse",
  description: "Fine Dining Resturant",
  addresss: "1600 W 2nd St, Cleveland, Oh. 44113",
  phone: "(216)621-6200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Marble Room",
  description: "Fine Dining Resturant",
  addresss: "623 Euclid ave",
  phone: "(216)523-7000",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Alley Cat Oyster Bar",
  description: "Fine Dining Resturant",
  addresss: "1056 Old River Rd. Cleveland, Oh 44113",
  phone: "(216)574-9999",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Fine Dining"
  },
  {
    title: "Western Reserve Meadery",
  description: "Winery",
  addresss: "2135 Columbus Rd Suite C, Cleveland, Oh. 44113",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Wine"
  },
  {
    title: "Sarah's Vineyard",
  description: "Winery",
  addresss: "1204 W Steels Corners Rd. Cuyahoga Falls, Oh, 44223",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Wine"
  },
  {
    title: "Sarah's Vineyard",
  description: "Winery",
  addresss: "1204 W Steels Corners Rd. Cuyahoga Falls, Oh, 44223",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Wine"
  },
  {
    title: "The Cleveland Brewery",
  description: "Brewery",
  addresss: "777 E 185th st. Cleveland, OH. 44119",
  phone: "(216)534-6992",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Brewery"
  },

  {
    title: "Masthead Brewing Co.",
  description: "Brewery",
  addresss: "1261 Superior Ave, Cleveland, OH 44114",
  phone: "(216)206-6176",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Brewery"
  },

  {
    title: "Forest City Brewery",
  description: "Brewery",
  addresss: "2135 Columbus Rd. Cleveland, OH 44113",
  phone: "(216)228-9116",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Brewery"
  },
  {
    title: "Goldhorn Brewery",
  description: "Brewery",
  addresss: "1361 E 55th St. Cleveland, OH 44103",
  phone: "(216)465-1352",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Brewery"
  },
  {
    title: "Brick and Barrel",
  description: "Brewery",
  addresss: "1844 Columbus Rd. Cleveland, OH 44113",
  phone: "(216)331-3308",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Brewery"
  },
  {
    title: "The Velvet Tango Room",
  description: "Cocktail Bar",
  addresss: "2095 Columbus Rd, Cleveland Oh. 44113",
  phone: "(216)241-8869",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Bar"
  },
  {
    title: "Porco Lounge",
  description: "Cocktail Bar",
  addresss: "2527 W 25th St, Cleveland, Oh. 44113",
  phone: "(216)802-9222",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Bar"
  },
  {
    title: "The Spotted Owl",
  description: "Cocktail Bar",
  addresss: "710 Jefferson ave, Cleveland, Oh 44113",
  phone: "(216)795-5595",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Bar"
  },
  {
    title: "LBM",
  description: "Cocktail Bar",
  addresss: "12301 Madison Ave, Lakewood, OH, 44107",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Bar"
  },
  {
    title: "Garden City",
  description: "Cocktail Bar",
  addresss: "3386 Tuttle Rd, Shaker Heights, OH 44122",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Bar"
  },
  {
    title: "Don Gi's Pizzeria",
  description: "Pizzeria",
  addresss: "2159 Broadview rd, Cleveland, OH 44109",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Pizza"
  },
  {
    title: "Pizza 216",
  description: "Pizzeria",
  addresss: "401 Euclid Ave Clevelandm OH 44114",
  phone: "(216)741-7992",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Pizza"
  },
  {
    title: "Gionini's Pizza",
  description: "Pizzeria",
  addresss: "3314 Warren Rd, Cleveland 44111",
  phone: "(216)941-2700",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Pizza"
  },
  {
    title: "Ohio City Pizzeria",
  description: "Pizzeria",
  addresss: "3223 Lorain ave, Cleveland 44113",
  phone: "(216)281-5252",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Pizza"
  },

];
places.collection.insertMany(seedData)