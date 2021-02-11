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
  category: "Resturant"
  },
  {
  title: "Fleming's Prime Steakhouse & Wine Bar",
  description: "Fine Dining Resturant",
  addresss: "4000 Medina Rd. Akron Oh 44333",
  phone: "(330)670-5200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Blue Point Grille",
  description: "Fine Dining Resturant",
  addresss: "700 W St. Clair Ave, Cleveland, Oh. 44113",
  phone: "(216)875-7827",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Morton's Steakhouse",
  description: "Fine Dining Resturant",
  addresss: "1600 W 2nd St, Cleveland, Oh. 44113",
  phone: "(216)621-6200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Morton's Steakhouse",
  description: "Fine Dining Resturant",
  addresss: "1600 W 2nd St, Cleveland, Oh. 44113",
  phone: "(216)621-6200",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Marble Room",
  description: "Fine Dining Resturant",
  addresss: "623 Euclid ave",
  phone: "(216)523-7000",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Alley Cat Oyster Bar",
  description: "Fine Dining Resturant",
  addresss: "1056 Old River Rd. Cleveland, Oh 44113",
  phone: "(216)574-9999",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "FResturant"
  },
  {
    title: "Western Reserve Meadery",
  description: "Winery",
  addresss: "2135 Columbus Rd Suite C, Cleveland, Oh. 44113",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Sarah's Vineyard",
  description: "Winery",
  addresss: "1204 W Steels Corners Rd. Cuyahoga Falls, Oh, 44223",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Sarah's Vineyard",
  description: "Winery",
  addresss: "1204 W Steels Corners Rd. Cuyahoga Falls, Oh, 44223",
  phone: "(216)716-2500",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "The Cleveland Brewery",
  description: "Brewery",
  addresss: "777 E 185th st. Cleveland, OH. 44119",
  phone: "(216)534-6992",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },

  {
    title: "Masthead Brewing Co.",
  description: "Brewery",
  addresss: "1261 Superior Ave, Cleveland, OH 44114",
  phone: "(216)206-6176",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },

  {
    title: "Forest City Brewery",
  description: "Brewery",
  addresss: "2135 Columbus Rd. Cleveland, OH 44113",
  phone: "(216)228-9116",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Goldhorn Brewery",
  description: "Brewery",
  addresss: "1361 E 55th St. Cleveland, OH 44103",
  phone: "(216)465-1352",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Brick and Barrel",
  description: "Brewery",
  addresss: "1844 Columbus Rd. Cleveland, OH 44113",
  phone: "(216)331-3308",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "The Velvet Tango Room",
  description: "Cocktail Bar",
  addresss: "2095 Columbus Rd, Cleveland Oh. 44113",
  phone: "(216)241-8869",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Porco Lounge",
  description: "Cocktail Bar",
  addresss: "2527 W 25th St, Cleveland, Oh. 44113",
  phone: "(216)802-9222",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "The Spotted Owl",
  description: "Cocktail Bar",
  addresss: "710 Jefferson ave, Cleveland, Oh 44113",
  phone: "(216)795-5595",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "LBM",
  description: "Cocktail Bar",
  addresss: "12301 Madison Ave, Lakewood, OH, 44107",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Garden City",
  description: "Cocktail Bar",
  addresss: "3386 Tuttle Rd, Shaker Heights, OH 44122",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Don Gi's Pizzeria",
  description: "Pizzeria",
  addresss: "2159 Broadview rd, Cleveland, OH 44109",
  phone: "(216)712-4692",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Pizza 216",
  description: "Pizzeria",
  addresss: "401 Euclid Ave Clevelandm OH 44114",
  phone: "(216)741-7992",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Gionini's Pizza",
  description: "Pizzeria",
  addresss: "3314 Warren Rd, Cleveland 44111",
  phone: "(216)941-2700",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Ohio City Pizzeria",
  description: "Pizzeria",
  addresss: "3223 Lorain ave, Cleveland 44113",
  phone: "(216)281-5252",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Ohio City Pizzeria",
  description: "Pizzeria",
  addresss: "3223 Lorain ave, Cleveland 44113",
  phone: "(216)281-5252",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Resturant"
  },
  {
    title: "Top Golf",
  description: "Fun",
  addresss: "5820 Rockside Woods Bvld N, Independance, OH 44131",
  phone: "(216)619-2464",
  state: "Ohio",
  startDate: "",
  endDate: "",
  category: "Golf Range"
  },

  {
    title: "Macy's",
  description: "Shopping",
  addresss: "111 N State S",
  phone: "(312) 781-1000",
  state: "Illnois",
  startDate: "",
  endDate: "",
  category: "Retail"
  },

  {
    title: "Nordstrom Rack",
  description: "Shopping",
  addresss: "24 N State St",
  phone: "(312) 377-5500",
  state: "Illnois",
  startDate: "",
  endDate: "",
  category: "Retail"
  },

  {
    title: "SEPHORA",
  description: "Shopping",
  addresss: "108 N State St Unit 134, Chicago, IL 60602",
  phone: "(312) 263-8688",
  state: "Illnois",
  startDate: "",
  endDate: "",
  category: "Retail"
  },
  {
    title: "Disney Store",
  description: "Toy Store",
  addresss: "108 N State St ",
  phone: "(312) 269-4776",
  state: "Illnois",
  startDate: "",
  endDate: "",
  category: "Retail"
  },
  {
    title: "Neiman Marcus",
  description: "Toy Store",
  addresss: "737 N Michigan Ave",
  phone: "(312) 642-5900",
  state: "Illnois",
  startDate: "",
  endDate: "",
  category: "Retail"
  },
  {
    title: "Gold's Gym - Destin",
  description: "Fitness",
  addresss: "12200 Emerald Coast Pkwy, Miramar Beach, FL 32550",
  phone: "(850) 837-7071",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },

  {
    title: "Planet Fitness",
  description: "Fitness",
  addresss: "4315 Florida Ave S, Lakeland, FL 33813",
  phone: "(863) 816-6800",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },
  {
    title: "Powerhouse Gym Athletic Club",
  description: "Fitness",
  addresss: "3251-A W Hillsborough Ave, Tampa, FL 33614",
  phone: "(813) 875-1600",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },

  {
    title: "Optimum Gym",
  description: "Fitness",
  addresss: "3020 W Kennedy Blvd B, Tampa, FL 33609",
  phone: "(813) 876-4000",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },

  {
    title: "VKNG ROW",
  description: "Fitness",
  addresss: "701 W Platt St, Tampa, FL 33606",
  phone: "(813) 260-0174",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },

  {
    title: "VKNG ROW",
  description: "Fitness",
  addresss: "701 W Platt St, Tampa, FL 33606",
  phone: "(813) 260-0174",
  state: "Floria",
  startDate: "",
  endDate: "",
  category: "Gym"
  },
  


];
places.collection.insertMany(seedData)