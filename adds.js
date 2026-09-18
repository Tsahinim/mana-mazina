/* נוצר אוטומטית מ-build/make_adds.py. הערכים הם למנה אחת.
   v=true: אומת מול USDA FoodData Central (SR Legacy). v=false: ממתין לאימות. */
const ADDS = [
 {
  "id": "yellow_grated",
  "label": "גבינה צהובה מגוררת",
  "amount": "חופן, 30 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 107,
  "protein": 7.5,
  "calcium": 210,
  "iron": 0.1,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Cheese, gouda"
 },
 {
  "id": "yellow_slice",
  "label": "גבינה צהובה בפרוסות",
  "amount": "פרוסה, 25 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 89,
  "protein": 6.2,
  "calcium": 175,
  "iron": 0.1,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Cheese, gouda"
 },
 {
  "id": "bulgarian",
  "label": "גבינה בולגרית מפוררת",
  "amount": "קובייה, 30 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 30,
  "protein": 4.2,
  "calcium": 120,
  "iron": 0.1,
  "vitc": 0,
  "v": false,
  "src": "pending: Israeli label, Bulgarian cheese 5%"
 },
 {
  "id": "mozzarella",
  "label": "מוצרלה או גבינה מותכת",
  "amount": "חופן, 30 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 90,
  "protein": 6.7,
  "calcium": 152,
  "iron": 0.1,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Cheese, mozzarella, whole milk"
 },
 {
  "id": "cream_cheese",
  "label": "גבינת שמנת",
  "amount": "כף גדושה, 20 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 70,
  "protein": 1.2,
  "calcium": 19,
  "iron": 0.0,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Cheese, cream"
 },
 {
  "id": "cottage",
  "label": "קוטג'",
  "amount": "3 כפות, 50 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "חלבון",
   "סידן"
  ],
  "kcal": 49,
  "protein": 5.5,
  "calcium": 42,
  "iron": 0.0,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Cheese, cottage, creamed"
 },
 {
  "id": "cooking_cream",
  "label": "שמנת לבישול ברוטב",
  "amount": "2 כפות, 30 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 48,
  "protein": 0.9,
  "calcium": 30,
  "iron": 0.0,
  "vitc": 0,
  "v": false,
  "src": "pending: cooking cream 15%"
 },
 {
  "id": "butter",
  "label": "חמאה",
  "amount": "כפית גדושה, 7 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 50,
  "protein": 0.1,
  "calcium": 2,
  "iron": 0.0,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Butter, salted"
 },
 {
  "id": "shoko",
  "label": "שוקו",
  "amount": "כוס קטנה, 200 מ\"ל",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 171,
  "protein": 6.5,
  "calcium": 231,
  "iron": 0.5,
  "vitc": 2,
  "v": true,
  "src": "USDA SR Legacy: Milk, chocolate, fluid, commercial, whole"
 },
 {
  "id": "yogurt_fruit",
  "label": "יוגורט בטעמים או עם פרי",
  "amount": "גביע, 150 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון"
  ],
  "kcal": 153,
  "protein": 6.6,
  "calcium": 228,
  "iron": 0.1,
  "vitc": 1,
  "v": false,
  "src": "pending: Yogurt, fruit, low fat"
 },
 {
  "id": "pudding",
  "label": "מעדן חלב או פודינג",
  "amount": "גביע, 125 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "אנרגיה",
   "סידן"
  ],
  "kcal": 178,
  "protein": 2.6,
  "calcium": 64,
  "iron": 0.6,
  "vitc": 0,
  "v": false,
  "src": "pending: Puddings, chocolate, ready-to-eat"
 },
 {
  "id": "ice_cream",
  "label": "גלידה חלבית",
  "amount": "כדור, 65 גרם",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "אנרגיה",
   "סידן"
  ],
  "kcal": 135,
  "protein": 2.3,
  "calcium": 83,
  "iron": 0.1,
  "vitc": 0,
  "v": false,
  "src": "pending: Ice creams, vanilla"
 },
 {
  "id": "cereal_milk",
  "label": "דגני בוקר עם חלב",
  "amount": "קערה קטנה: 30 גרם דגנים וחצי כוס חלב",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "ברזל"
  ],
  "kcal": 183,
  "protein": 6.2,
  "calcium": 143,
  "iron": 2.4,
  "vitc": 0,
  "v": false,
  "src": "pending: Israeli label, corn flakes; USDA SR Legacy: Milk, whole, 3.25% milkfat"
 },
 {
  "id": "cheese_toast",
  "label": "טוסט גבינה",
  "amount": "2 פרוסות לחם ופרוסת גבינה",
  "g": "dairy",
  "k": "dairy",
  "gives": [
   "סידן",
   "חלבון",
   "אנרגיה"
  ],
  "kcal": 249,
  "protein": 11.5,
  "calcium": 211,
  "iron": 0.8,
  "vitc": 0,
  "v": false,
  "src": "pending: Bread, white / pita; USDA SR Legacy: Cheese, gouda"
 },
 {
  "id": "egg_hard",
  "label": "ביצה קשה",
  "amount": "ביצה אחת",
  "g": "egg",
  "k": "parve",
  "gives": [
   "חלבון",
   "ברזל"
  ],
  "kcal": 78,
  "protein": 6.3,
  "calcium": 25,
  "iron": 0.6,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Egg, whole, cooked, hard-boiled"
 },
 {
  "id": "egg_fried",
  "label": "חביתה או ביצת עין",
  "amount": "ביצה אחת",
  "g": "egg",
  "k": "parve",
  "gives": [
   "חלבון",
   "ברזל"
  ],
  "kcal": 90,
  "protein": 6.3,
  "calcium": 29,
  "iron": 0.9,
  "vitc": 0,
  "v": false,
  "src": "pending: Egg, whole, cooked, fried"
 },
 {
  "id": "egg_in",
  "label": "ביצה בתוך המנה",
  "amount": "ביצה אחת",
  "g": "egg",
  "k": "parve",
  "gives": [
   "חלבון",
   "ברזל"
  ],
  "kcal": 72,
  "protein": 6.3,
  "calcium": 28,
  "iron": 0.9,
  "vitc": 0,
  "v": false,
  "src": "pending: Egg, whole, raw, fresh"
 },
 {
  "id": "pancake",
  "label": "פנקייק או פרנץ' טוסט",
  "amount": "2 קטנים, 75 גרם",
  "g": "egg",
  "k": "dairy",
  "gives": [
   "אנרגיה",
   "חלבון"
  ],
  "kcal": 170,
  "protein": 4.8,
  "calcium": 164,
  "iron": 1.4,
  "vitc": 0,
  "v": false,
  "src": "pending: Pancakes, plain, prepared from recipe"
 },
 {
  "id": "schnitzel",
  "label": "רצועות שניצל",
  "amount": "חצי שניצל, 60 גרם",
  "g": "protein",
  "k": "meat",
  "gives": [
   "חלבון",
   "ברזל"
  ],
  "kcal": 156,
  "protein": 14.9,
  "calcium": 12,
  "iron": 0.8,
  "vitc": 0,
  "v": false,
  "src": "pending: Chicken breast, fried, batter"
 },
 {
  "id": "tuna",
  "label": "טונה",
  "amount": "חצי קופסה מסוננת, 55 גרם",
  "g": "protein",
  "k": "parve",
  "gives": [
   "חלבון",
   "ברזל"
  ],
  "kcal": 47,
  "protein": 10.7,
  "calcium": 9,
  "iron": 0.9,
  "vitc": 0,
  "v": false,
  "src": "pending: Fish, tuna, light, canned in water, drained"
 },
 {
  "id": "salmon",
  "label": "סלמון",
  "amount": "נתח קטן, 80 גרם",
  "g": "protein",
  "k": "parve",
  "gives": [
   "חלבון"
  ],
  "kcal": 165,
  "protein": 17.7,
  "calcium": 12,
  "iron": 0.3,
  "vitc": 3,
  "v": false,
  "src": "pending: Fish, salmon, Atlantic, farmed, cooked"
 },
 {
  "id": "olive_oil",
  "label": "שמן זית מעל המנה",
  "amount": "כף, 13 גרם",
  "g": "fat",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 115,
  "protein": 0.0,
  "calcium": 0,
  "iron": 0.1,
  "vitc": 0,
  "v": true,
  "src": "USDA SR Legacy: Oil, olive, salad or cooking"
 },
 {
  "id": "avocado",
  "label": "אבוקדו",
  "amount": "רבע, 40 גרם",
  "g": "fat",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 64,
  "protein": 0.8,
  "calcium": 5,
  "iron": 0.2,
  "vitc": 4,
  "v": false,
  "src": "pending: Avocados, raw"
 },
 {
  "id": "olives",
  "label": "זיתים",
  "amount": "5 זיתים, 20 גרם",
  "g": "fat",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 29,
  "protein": 0.2,
  "calcium": 10,
  "iron": 0.1,
  "vitc": 0,
  "v": false,
  "src": "pending: Olives, pickled, green"
 },
 {
  "id": "bread",
  "label": "פיתה, לחם או חלה",
  "amount": "חצי פיתה או פרוסה, 40 גרם",
  "g": "side",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 106,
  "protein": 3.5,
  "calcium": 24,
  "iron": 0.5,
  "vitc": 0,
  "v": false,
  "src": "pending: Bread, white / pita"
 },
 {
  "id": "fries",
  "label": "צ'יפס",
  "amount": "מנה קטנה, 70 גרם",
  "g": "side",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 203,
  "protein": 2.4,
  "calcium": 10,
  "iron": 0.6,
  "vitc": 4,
  "v": false,
  "src": "pending: Potatoes, french fried"
 },
 {
  "id": "potato",
  "label": "תפוח אדמה או פירה",
  "amount": "אחד קטן, 100 גרם",
  "g": "side",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 86,
  "protein": 1.7,
  "calcium": 8,
  "iron": 0.3,
  "vitc": 7,
  "v": false,
  "src": "pending: Potatoes, boiled, without skin"
 },
 {
  "id": "rice",
  "label": "אורז או פתיתים",
  "amount": "חצי כוס, 80 גרם",
  "g": "side",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 104,
  "protein": 2.2,
  "calcium": 8,
  "iron": 0.2,
  "vitc": 0,
  "v": false,
  "src": "pending: Rice, white, cooked"
 },
 {
  "id": "soup_croutons",
  "label": "שקדי מרק או קרוטונים",
  "amount": "2 כפות, 15 גרם",
  "g": "side",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 61,
  "protein": 1.8,
  "calcium": 11,
  "iron": 0.6,
  "vitc": 0,
  "v": false,
  "src": "pending: Croutons, plain"
 },
 {
  "id": "veg_sticks",
  "label": "מלפפון, עגבנייה ופלפל חתוכים",
  "amount": "כ-120 גרם, בלי בצל",
  "g": "veg",
  "k": "parve",
  "gives": [
   "ויטמין C",
   "ירק"
  ],
  "kcal": 26,
  "protein": 1.0,
  "calcium": 13,
  "iron": 0.4,
  "vitc": 58,
  "v": false,
  "src": "pending: Cucumber, with peel, raw; pending: Tomatoes, red, ripe, raw; pending: Peppers, sweet, red, raw"
 },
 {
  "id": "citrus",
  "label": "תפוז או 2 קלמנטינות",
  "amount": "כ-130 גרם",
  "g": "veg",
  "k": "parve",
  "gives": [
   "ויטמין C"
  ],
  "kcal": 61,
  "protein": 1.2,
  "calcium": 52,
  "iron": 0.1,
  "vitc": 69,
  "v": false,
  "src": "pending: Oranges, raw"
 },
 {
  "id": "berries_kiwi",
  "label": "תותים או קיווי",
  "amount": "5 תותים או קיווי, 75 גרם",
  "g": "veg",
  "k": "parve",
  "gives": [
   "ויטמין C"
  ],
  "kcal": 24,
  "protein": 0.5,
  "calcium": 12,
  "iron": 0.3,
  "vitc": 44,
  "v": false,
  "src": "pending: Strawberries, raw"
 },
 {
  "id": "banana",
  "label": "בננה",
  "amount": "אחת בינונית, 100 גרם",
  "g": "veg",
  "k": "parve",
  "gives": [
   "אנרגיה"
  ],
  "kcal": 89,
  "protein": 1.1,
  "calcium": 5,
  "iron": 0.3,
  "vitc": 9,
  "v": false,
  "src": "pending: Bananas, raw"
 },
 {
  "id": "oj",
  "label": "מיץ תפוזים סחוט",
  "amount": "חצי כוס, 120 מ\"ל",
  "g": "veg",
  "k": "parve",
  "gives": [
   "ויטמין C"
  ],
  "kcal": 56,
  "protein": 0.9,
  "calcium": 14,
  "iron": 0.2,
  "vitc": 62,
  "v": false,
  "src": "pending: Orange juice, raw"
 }
];
