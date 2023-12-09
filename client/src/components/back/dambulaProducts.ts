//this object will be replaced by an api call
import placeHolderImage from "../../assets/images/productImages/beef.png";
import placeHolderImage1 from "../../assets/images/productImages/chicken.png";

//import vegetablesPlaceHolderImage from "/productImages/vegetables.jpg";


import cabbageImage  from "../../assets/images/productImages/cabbage.png"
import cabbageImage_1  from "../../assets/images/productImages/cabbage_1.png"
import cabbageImage_2  from "../../assets/images/productImages/cabbage_2.png"

import carrotImage  from "../../assets/images/productImages/carrot.png"
import carrotImage_2  from "../../assets/images/productImages/carrot_2.png"

import peasImage  from "../../assets/images/productImages/peas.png"

export interface SalesItems  {
    itemId: string |number,
    itemName: string,
    initialPrice: number,
    sellingPrice: number,
    itemImage: string[],
    ratings: number,
    quantity: number,
    vendorId: number | string,
    category: string
    description: string,
    reviews?: string[]
}

export type DambulaProducts = {
    category: string,
    products: SalesItems[],
}

const placeHolderDescription: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur corporis tempora quas nemo, soluta aperiam id sunt ipsa porro eius eveniet expedita pariatur itaque corrupti ex labore minus, maiores hic?
Temporibus, beatae odit perferendis, quam optio, dolorem saepe id accusantium dicta ex consectetur reprehenderit neque. Odio expedita doloribus laudantium nostrum provident fugiat voluptatibus veniam eos ea. Est dolore nobis nihil!
Consequatur dolorem quasi tempore accusantium tempora error dolores necessitatibus cumque aspernatur facere, officia dignissimos voluptatibus quidem aperiam exercitationem laboriosam id placeat nostrum. Hic voluptas eos quod ipsa id. Neque, eius!`

const dambulaProducts: DambulaProducts [] = [
    {
        category: "poultryBeef",
        products :
        [
        {
            itemId: 1,
            itemName: "Beef",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage],
            ratings: 4.5,
            quantity: 0,
            vendorId: "213ee2dedsQ",
            category: "Beef",
            description: placeHolderDescription,
            reviews: ["I loved the delivery"]
        },
        {
            itemId: 2,
            itemName: "Chicken",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 3,
            itemName: "Chicken Kienyenji",
            initialPrice: 800,
            sellingPrice: 700,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 1,
            itemName: "Beef",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage],
            ratings: 4.5,
            quantity: 0,
            vendorId: "213ee2dedsQ",
            category: "Beef",
            description: placeHolderDescription,
            reviews: ["I loved the delivery"]
        },
        {
            itemId: 2,
            itemName: "Chicken",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 3,
            itemName: "Chicken Kienyenji",
            initialPrice: 800,
            sellingPrice: 700,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 1,
            itemName: "Beef",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage],
            ratings: 4.5,
            quantity: 0,
            vendorId: "213ee2dedsQ",
            category: "Beef",
            description: placeHolderDescription,
            reviews: ["I loved the delivery"]
        },
        {
            itemId: 2,
            itemName: "Chicken",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 3,
            itemName: "Chicken Kienyenji",
            initialPrice: 800,
            sellingPrice: 700,
            itemImage: [placeHolderImage1],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        ],
    },
    {
        category: "fruitsVegetables",
        products :
        [
        {
            itemId: 1,
            itemName: "Cabbage",
            initialPrice: 80,
            sellingPrice: 70,
            itemImage: [cabbageImage, cabbageImage_1, cabbageImage_2],
            ratings: 4.5,
            quantity: 0,
            vendorId: "213ee2dedsQ",
            category: "vegetables",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 2,
            itemName: "Carrots",
            initialPrice: 100,
            sellingPrice: 90,
            itemImage: [carrotImage, carrotImage_2],
            ratings: 5.0,
            quantity: 0,
            vendorId: "kjdsnfjksdnfkjl32",
            category: "Poultry",
            description: placeHolderDescription,
            reviews: [],
        },
        {
            itemId: 3,
            itemName: "Peas",
            initialPrice: 120,
            sellingPrice: 100,
            itemImage: [peasImage],
            ratings: 4.5,
            quantity: 0,
            vendorId: "asnjdnasda3",
            category: "Honey",
            description: placeHolderDescription,
            reviews: [],
        },
        ],
    }
]

export default dambulaProducts
