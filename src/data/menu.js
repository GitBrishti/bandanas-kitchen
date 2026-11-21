
export const whatsappNumbers = [
  { label: "7407224410", number: "917407224410" },
];

export const googleReviewLink =
  "https://maps.app.goo.gl/CF5BEdBvNj9ULXHY6?g_st=aw";

/* ==========================================
   MENU CATEGORIES
   ========================================== */

export const categories = [
  "Bhaja-Bhuji",
  "Dimer-Sombhar",
  "Bhaat",
  "China-Town",
  "Murgir-Bahar",
  "Mutton-Bahar",
  "Motso-Mukhi",
  "Niramish Aahar",
  "Bengali-Breads",
  "Biriyani",
  "Mishti-Mukh",
];

export const categoryLabels = {
  "Bhaja-Bhuji": "Snacks",
  "Dimer-Sombhar": "Egg",
  Bhaat: "Rice",
  "China-Town": "Chinese",
  "Murgir-Bahar": "Chicken",
  "Mutton-Bahar": "Mutton",
  "Motso-Mukhi": "Fish",
  "Niramish Aahar": "Veg",
  "Bengali-Breads": "Breads",
  Biriyani: "Biryani",
  "Mishti-Mukh": "Desserts",
};

/* ==========================================
   COMPLETE FOOD MENU

   Format:
   [
     Original dish name,
     Portion,
     Price,
     English description
   ]

   The original names, portions and prices
   are preserved.
   ========================================== */

const rawMenu = {
  "Bhaja-Bhuji": [
    [
      "Chicken Cheese Ball",
      "1 Pcs",
      30,
      "Cheese-Stuffed Chicken Ball",
    ],
    [
      "Chicken Egg Devil",
      "1 Pcs",
      65,
      "Chicken and Egg Croquette",
    ],
    [
      "Chicken Strip",
      "1 Pcs",
      15,
      "Crispy Chicken Strip",
    ],
    [
      "Chicken Pokora",
      "1 Pcs",
      25,
      "Chicken Fritters",
    ],
    [
      "Duck Egg Devil",
      "1 Pcs",
      80,
      "Duck Egg Croquette",
    ],
    [
      "Chicken Singara",
      "1 Pcs",
      40,
      "Chicken-Stuffed Savoury Pastry",
    ],
    [
      "Narkel Patties",
      "1 Pcs",
      35,
      "Coconut-Stuffed Savoury Pastry",
    ],
    [
      "Prawn Potoler Dorma Fry",
      "1 Pcs",
      40,
      "Fried Pointed Gourd Stuffed with Prawns",
    ],
    [
      "Chennar Potoler Dorma Fry",
      "1 Pcs",
      40,
      "Fried Pointed Gourd Stuffed with Cottage Cheese",
    ],
    [
      "Bhetki Fish Fry",
      "1 Pcs",
      180,
      "Crispy Fried Bhetki Fish Fillet",
    ],
  ],

  "Dimer-Sombhar": [
    [
      "Dim Curry",
      "2 Pcs",
      110,
      "Bengali Egg Curry",
    ],
    [
      "Dim er Jhol",
      "2 Pcs",
      100,
      "Egg Curry in Light Gravy",
    ],
    [
      "Dim Posto",
      "2 Pcs",
      150,
      "Eggs in Poppy Seed Gravy",
    ],
    [
      "Dim Bhapa",
      "2 Pcs",
      150,
      "Steamed Eggs in Spiced Gravy",
    ],
    [
      "Omlette Curry",
      "2 Pcs",
      100,
      "Omelette in Spiced Curry",
    ],
  ],

  Bhaat: [
    [
      "Sada Bhaat (Doodhsagar chhaler)",
      "750 ml",
      50,
      "Steamed Doodhsagar Rice",
    ],
    [
      "Sada Bhaat (Basmati chhaler)",
      "750 ml",
      70,
      "Steamed Basmati Rice",
    ],
    [
      "Basanti Pulao",
      "750 ml",
      140,
      "Bengali Sweet Yellow Rice",
    ],
    [
      "Bangali Niramish Fried Rice",
      "750 ml",
      130,
      "Bengali-Style Vegetarian Fried Rice",
    ],
    [
      "Jeera Rice",
      "750 ml",
      120,
      "Cumin-Flavoured Rice",
    ],
    [
      "Koraisutir Pulao",
      "750 ml",
      110,
      "Green Peas Pulao",
    ],
  ],

  "China-Town": [
    [
      "Veg Fried Rice",
      "750 ml",
      120,
      "Vegetable Fried Rice",
    ],
    [
      "Egg Fried Rice",
      "750 ml",
      130,
      "Egg Fried Rice",
    ],
    [
      "Chicken Fried Rice",
      "750 ml",
      150,
      "Chicken Fried Rice",
    ],
    [
      "Egg Chicken Fried Rice",
      "750 ml",
      155,
      "Egg and Chicken Fried Rice",
    ],
    [
      "Prawn Fried Rice",
      "750 ml",
      165,
      "Prawn Fried Rice",
    ],
    [
      "Egg Prawn Fried Rice",
      "750 ml",
      170,
      "Egg and Prawn Fried Rice",
    ],
    [
      "Mixed Fried Rice",
      "750 ml",
      190,
      "Mixed Fried Rice",
    ],
    [
      "Veg Chowmein",
      "750 ml",
      120,
      "Vegetable Stir-Fried Noodles",
    ],
    [
      "Egg Chowmein",
      "750 ml",
      130,
      "Egg Stir-Fried Noodles",
    ],
    [
      "Chicken Chowmein",
      "750 ml",
      150,
      "Chicken Stir-Fried Noodles",
    ],
    [
      "Egg Chicken Chowmein",
      "750 ml",
      155,
      "Egg and Chicken Noodles",
    ],
    [
      "Prawn Chowmein",
      "750 ml",
      165,
      "Prawn Stir-Fried Noodles",
    ],
    [
      "Egg Prawn Chowmein",
      "750 ml",
      170,
      "Egg and Prawn Noodles",
    ],
    [
      "Mixed Chowmein",
      "750 ml",
      190,
      "Mixed Stir-Fried Noodles",
    ],
    [
      "Chilly Chicken Dry",
      "4 Pcs",
      120,
      "Dry Chilli Chicken",
    ],
    [
      "Chilly Chicken Gravy",
      "4 Pcs",
      120,
      "Chilli Chicken in Gravy",
    ],
    [
      "Garlic Chicken Dry",
      "4 Pcs",
      125,
      "Dry Garlic Chicken",
    ],
    [
      "Garlic Chicken Gravy",
      "4 Pcs",
      125,
      "Garlic Chicken in Gravy",
    ],
    [
      "Kung Pao Chicken Dry",
      "4 Pcs",
      140,
      "Dry Kung Pao Chicken",
    ],
    [
      "Kung Pao Chicken Gravy",
      "4 Pcs",
      140,
      "Kung Pao Chicken in Sauce",
    ],
    [
      "Drums of Heaven",
      "4 Pcs",
      160,
      "Crispy Chicken Lollipops",
    ],
  ],

  "Murgir-Bahar": [
    [
      "Murgi Kosha",
      "2 Pcs",
      120,
      "Slow-Cooked Bengali Chicken Curry",
    ],
    [
      "Dhonepata Kanchalonka Murgi",
      "",
      null,
      "Chicken with Coriander and Green Chillies",
    ],
    [
      "Doi Murgi",
      "2 Pcs",
      130,
      "Chicken in Yogurt Gravy",
    ],
    [
      "Murgir Rosolla",
      "2 Pcs",
      115,
      "Bengali Chicken in Light Spiced Gravy",
    ],
    [
      "Moharani Murgi",
      "2 Pcs",
      150,
      "Rich Royal-Style Chicken Curry",
    ],
    [
      "Aam Kasundi Murgi",
      "2 Pcs",
      140,
      "Chicken with Mango Mustard Sauce",
    ],
    [
      "Sorse Murgi",
      "2 Pcs",
      140,
      "Chicken in Mustard Gravy",
    ],
    [
      "Murgir Rezala",
      "2 Pcs",
      150,
      "Chicken in Aromatic Mughlai Gravy",
    ],
    [
      "Gondho-Raj Murgi",
      "2 Pcs",
      140,
      "Chicken Flavoured with Gondhoraj Lime",
    ],
  ],

  "Mutton-Bahar": [
    [
      "Kosha Mangso",
      "2 Pcs",
      350,
      "Slow-Cooked Bengali Mutton Curry",
    ],
    [
      "Kala Bhuna",
      "2 Pcs",
      350,
      "Dark-Roasted Spiced Mutton",
    ],
    [
      "Mangser Patla Laal Jhol",
      "2 Pcs",
      320,
      "Mutton in Light Red Curry",
    ],
    [
      "Rogan Josh",
      "2 Pcs",
      375,
      "Aromatic Kashmiri-Style Mutton Curry",
    ],
    [
      "Mangser Gorgora",
      "2 Pcs",
      375,
      "Traditional Bengali Mutton Curry",
    ],
  ],

  "Motso-Mukhi": [
    [
      "Ilish Bhapa",
      "1 Pcs",
      475,
      "Steamed Hilsa in Spiced Gravy",
    ],
    [
      "Sorse Ilish",
      "1 Pcs",
      475,
      "Hilsa Fish in Mustard Gravy",
    ],
    [
      "Ilish Tel Jhol",
      "1 Pcs",
      450,
      "Hilsa in Light Oil-Based Curry",
    ],
    [
      "Pabda Bhapa",
      "1 Pcs",
      150,
      "Steamed Pabda Fish",
    ],
    [
      "Doi Katla",
      "1 Pcs",
      150,
      "Catla Fish in Yogurt Gravy",
    ],
    [
      "Katla Rezala",
      "1 Pcs",
      175,
      "Catla Fish in Aromatic Rezala Gravy",
    ],
    [
      "Dudh Rui",
      "1 Pcs",
      165,
      "Rohu Fish in Milk-Based Gravy",
    ],
    [
      "Dudh Katla",
      "1 Pcs",
      175,
      "Catla Fish in Milk-Based Gravy",
    ],
    [
      "Khirodh Katla",
      "1 Pcs",
      175,
      "Catla Fish in Rich Milk-Based Gravy",
    ],
    [
      "Gondho-RAJ Katla",
      "1 Pcs",
      175,
      "Catla Fish Flavoured with Gondhoraj Lime",
    ],
    [
      "Katla Kalia",
      "1 Pcs",
      150,
      "Rich Bengali Catla Fish Curry",
    ],
    [
      "Patla Laal Jhol Katla",
      "1 Pcs",
      140,
      "Catla Fish in Light Red Curry",
    ],
    [
      "Patla Laal Jhol Rui",
      "1 Pcs",
      130,
      "Rohu Fish in Light Red Curry",
    ],
    [
      "Chingrir Malaikari",
      "1 Pcs",
      250,
      "Prawns in Creamy Coconut Gravy",
    ],
    [
      "Laupata Chingri",
      "1 Pcs",
      175,
      "Prawns Cooked with Bottle Gourd Leaves",
    ],
    [
      "Lau Chingri",
      "1 Pcs",
      100,
      "Prawns with Bottle Gourd",
    ],
    [
      "Mocha Chingri",
      "1 Pcs",
      140,
      "Prawns with Banana Blossom",
    ],
    [
      "Alu Potol Chingri",
      "1 Pcs",
      120,
      "Prawns with Potato and Pointed Gourd",
    ],
    [
      "Ol Chingri Kosha",
      "1 Pcs",
      120,
      "Spiced Prawns with Elephant Foot Yam",
    ],
    [
      "Macher matha die bandhakopi",
      "1 Pcs",
      100,
      "Cabbage Cooked with Fish Head",
    ],
    [
      "Katla Macher Murighonto",
      "1 Pcs",
      150,
      "Bengali Fish Head Curry",
    ],
    [
      "Prawn Potoler Dorma",
      "1 Pcs",
      50,
      "Pointed Gourd Stuffed with Prawns",
    ],
    [
      "Macher matha die daal",
      "1 Pcs",
      100,
      "Lentils Cooked with Fish Head",
    ],
  ],

  "Niramish Aahar": [
    [
      "Shukto",
      "500 ml",
      100,
      "Traditional Bengali Mixed Vegetable Stew",
    ],
    [
      "Alu Posto",
      "500 ml",
      120,
      "Potatoes in Poppy Seed Paste",
    ],
    [
      "Phulkopir Kosha",
      "500 ml",
      80,
      "Spiced Dry Cauliflower Curry",
    ],
    [
      "Bandhakopir Torkari",
      "500 ml",
      80,
      "Bengali Cabbage Curry",
    ],
    [
      "Phulkopir Roast",
      "500 ml",
      80,
      "Bengali-Style Roasted Cauliflower",
    ],
    [
      "Alu Potoler Kosha",
      "500 ml",
      60,
      "Spiced Potato and Pointed Gourd Curry",
    ],
    [
      "Mochar Ghonto",
      "500 ml",
      80,
      "Traditional Banana Blossom Curry",
    ],
    [
      "Bori Die Lau",
      "500 ml",
      75,
      "Bottle Gourd with Lentil Dumplings",
    ],
    [
      "Shahi Paneer",
      "4 Pcs",
      150,
      "Cottage Cheese in Rich Creamy Gravy",
    ],
    [
      "Paneer er Dalna",
      "4 Pcs",
      130,
      "Bengali Cottage Cheese Curry",
    ],
    [
      "Chanar Dalna",
      "4 Pcs",
      150,
      "Fresh Cottage Cheese Curry",
    ],
    [
      "Kanchkolar Kofta Curry",
      "4 Pcs",
      150,
      "Raw Banana Dumplings in Curry",
    ],
    [
      "Kankrol Posto",
      "500 ml",
      110,
      "Spine Gourd in Poppy Seed Paste",
    ],
    [
      "Potol Posto",
      "500 ml",
      110,
      "Pointed Gourd in Poppy Seed Paste",
    ],
    [
      "Potol Bhorta (With Onion & Garlic)",
      "300 ml",
      60,
      "Mashed Pointed Gourd with Onion and Garlic",
    ],
    [
      "Begun Basanti",
      "500 ml",
      100,
      "Bengali-Style Spiced Eggplant",
    ],
    [
      "Pepe Bhorta (With Onion & Garlic)",
      "300 ml",
      60,
      "Mashed Papaya with Onion and Garlic",
    ],
    [
      "Dhokar Dalna",
      "4 Pcs",
      150,
      "Lentil Cakes in Bengali Curry",
    ],
    [
      "Alu Soyabean Kosha",
      "500 ml",
      100,
      "Spiced Potato and Soybean Curry",
    ],
    [
      "Chilly Soyabean",
      "500 ml",
      130,
      "Indo-Chinese Chilli Soybean",
    ],
    [
      "Chilly Paneer",
      "4 Pcs",
      140,
      "Indo-Chinese Chilli Cottage Cheese",
    ],
    [
      "Veg Daal",
      "500 ml",
      70,
      "Vegetable Lentil Curry",
    ],
    [
      "Aam Daal",
      "500 ml",
      60,
      "Lentils with Raw Mango",
    ],
    [
      "Daal",
      "500 ml",
      50,
      "Bengali Lentil Curry",
    ],
    [
      "Channar Potoler Dorma",
      "1 Pcs",
      50,
      "Pointed Gourd Stuffed with Cottage Cheese",
    ],
    [
      "Ghugni",
      "500 ml",
      70,
      "Bengali Yellow Peas Curry",
    ],
    [
      "Chana Masala",
      "500 ml",
      80,
      "Spiced Chickpea Curry",
    ],
    [
      "Chholar Daal",
      "500 ml",
      90,
      "Bengali Bengal Gram Lentils",
    ],
    [
      "Sada Alur Torkari",
      "500 ml",
      50,
      "Light Bengali Potato Curry",
    ],
    [
      "Alur Dum",
      "500 ml",
      70,
      "Bengali Spiced Potato Curry",
    ],
    [
      "Kashmiri Alur Dum",
      "500 ml",
      100,
      "Kashmiri-Style Potato Curry",
    ],
  ],

  "Bengali-Breads": [
    [
      "Trikon Porota",
      "1 Pcs",
      12,
      "Triangular Layered Flatbread",
    ],
    [
      "Porota",
      "1 Pcs",
      10,
      "Bengali Layered Flatbread",
    ],
    [
      "Luchi",
      "1 Pcs",
      10,
      "Deep-Fried Bengali Flatbread",
    ],
    [
      "Radhaballavi",
      "1 Pcs",
      25,
      "Lentil-Stuffed Bengali Fried Bread",
    ],
  ],

  Biriyani: [
    [
      "Chicken Biriyani",
      "1 Pcs/1.5 L",
      200,
      "Aromatic Rice with Chicken",
    ],
    [
      "Mutton Biriyani",
      "1 Pcs/1.5 L",
      320,
      "Aromatic Rice with Mutton",
    ],
    [
      "Special Mutton Biriyani",
      "2 Pcs/2.5 L",
      500,
      "Special Mutton Biryani",
    ],
    [
      "Special Chicken Biriyani",
      "2 Pcs/2.5 L",
      300,
      "Special Chicken Biryani",
    ],
    [
      "Healthy Chicken Biriyani",
      "1 Pcs/1.5 L",
      250,
      "Lightly Prepared Chicken Biryani",
    ],
  ],

  "Mishti-Mukh": [
    [
      "Chhaler Payesh",
      "300 ml",
      120,
      "Bengali Rice Pudding",
    ],
    [
      "Simui er Payesh",
      "300 ml",
      100,
      "Vermicelli Milk Pudding",
    ],
    [
      "Khir",
      "300 ml",
      150,
      "Traditional Thickened Milk Dessert",
    ],
  ],
};

/* ==========================================
   EXPORT MENU ITEMS
   ========================================== */

export const menuItems = Object.entries(rawMenu).flatMap(
  ([category, dishes]) =>
    dishes.map(
      ([name, quantity, price, englishName], index) => ({
        id: `${category}-${index}`,
        name,
        englishName,
        category,
        quantity,
        price,
      })
    )
);

/* ==========================================
   WHATSAPP ORDERING
   ========================================== */

export function orderOnWhatsApp(item, number) {
  const message = [
    "Hello Bandana's Kitchen!",
    "",
    "I would like to order:",
    `Dish: ${item.name}`,
    `Menu portion: ${item.quantity || "Please confirm"}`,
    `Price: ${
      item.price == null
        ? "Please confirm"
        : `₹${item.price}`
    }`,
    "",
    "Please confirm availability, order quantity and delivery.",
  ].join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;
}
