import { writeFileSync } from "node:fs";

// Real Unsplash photo IDs categorized by relevance.
const IMG = {
  dogTreat: ["1568640347023-a616a30bc3bd","1601758123927-196d5d6dab27","1583337130417-3346a1be7dee","1558929996-da64ba858215","1535930891776-0c2dfb7fda1a","1583512603805-3cc6b41f3edb","1596492784531-6e6eb5ea9993","1591946614720-90a587da4a36","1574231164645-d6f0e8553590","1586671267731-da2cf3ceeb80"],
  catTreat: ["1574144611937-0df059b5ef3e","1592194996308-7b43878e84a6","1573865526739-10659fec78a5","1606214174585-fe31582dc6ee","1561948955-570b270e7c36","1495360010541-f48722b34f7d","1518791841217-8f162f1e1131","1571566882372-1598d88abd90"],
  kennel: ["1591946614720-90a587da4a36","1583337130417-3346a1be7dee","1601758228041-f3b2795255f1","1450778869180-41d0601e046e","1587300003388-59208cc962cb","1592194996308-7b43878e84a6","1543466835-00a7907e9de1","1518717758536-85ae29035b6d"],
  leash: ["1583337130417-3346a1be7dee","1601758123927-196d5d6dab27","1601758125946-6ec2ef64daf8","1587300003388-59208cc962cb","1601758174039-aef8b1c7c30c","1450778869180-41d0601e046e","1546238232-20216dec9f72","1568572933382-74d440642117"],
  collar: ["1601758228041-f3b2795255f1","1517849845537-4d257902454a","1587300003388-59208cc962cb","1583337130417-3346a1be7dee","1601758125946-6ec2ef64daf8","1601758124510-52d02ddb7cbd","1546238232-20216dec9f72","1568572933382-74d440642117"],
  harness: ["1601758174039-aef8b1c7c30c","1587300003388-59208cc962cb","1601758123927-196d5d6dab27","1583337130417-3346a1be7dee","1546238232-20216dec9f72","1601758124510-52d02ddb7cbd","1601758125946-6ec2ef64daf8","1568572933382-74d440642117"],
  dogFood: ["1589924691995-400dc9ecc119","1568640347023-a616a30bc3bd","1583512603805-3cc6b41f3edb","1601758123927-196d5d6dab27","1574231164645-d6f0e8553590","1596492784531-6e6eb5ea9993","1535930891776-0c2dfb7fda1a","1591946614720-90a587da4a36"],
  catFood: ["1574144611937-0df059b5ef3e","1592194996308-7b43878e84a6","1573865526739-10659fec78a5","1606214174585-fe31582dc6ee","1561948955-570b270e7c36","1495360010541-f48722b34f7d","1518791841217-8f162f1e1131","1571566882372-1598d88abd90"],
  dogToy: ["1601758125946-6ec2ef64daf8","1601758174039-aef8b1c7c30c","1583337130417-3346a1be7dee","1546238232-20216dec9f72","1568572933382-74d440642117","1601758228041-f3b2795255f1","1587300003388-59208cc962cb","1601758124510-52d02ddb7cbd"],
  catToy: ["1592194996308-7b43878e84a6","1574144611937-0df059b5ef3e","1573865526739-10659fec78a5","1606214174585-fe31582dc6ee","1561948955-570b270e7c36"],
  grooming: ["1535930891776-0c2dfb7fda1a","1583337130417-3346a1be7dee","1601758125946-6ec2ef64daf8","1574231164645-d6f0e8553590","1587300003388-59208cc962cb","1546238232-20216dec9f72","1586671267731-da2cf3ceeb80","1568572933382-74d440642117"],
  bed: ["1450778869180-41d0601e046e","1518717758536-85ae29035b6d","1591946614720-90a587da4a36","1543466835-00a7907e9de1","1583337130417-3346a1be7dee","1592194996308-7b43878e84a6","1573865526739-10659fec78a5","1601758228041-f3b2795255f1"],
  bowl: ["1601758125946-6ec2ef64daf8","1583512603805-3cc6b41f3edb","1574231164645-d6f0e8553590","1606214174585-fe31582dc6ee","1591946614720-90a587da4a36","1583337130417-3346a1be7dee","1568640347023-a616a30bc3bd","1518791841217-8f162f1e1131"],
  health: ["1596492784531-6e6eb5ea9993","1568640347023-a616a30bc3bd","1583512603805-3cc6b41f3edb","1601758174039-aef8b1c7c30c","1574231164645-d6f0e8553590","1535930891776-0c2dfb7fda1a","1591946614720-90a587da4a36","1586671267731-da2cf3ceeb80"],
  litter: ["1571566882372-1598d88abd90","1518791841217-8f162f1e1131","1495360010541-f48722b34f7d","1561948955-570b270e7c36","1606214174585-fe31582dc6ee","1573865526739-10659fec78a5","1574144611937-0df059b5ef3e","1592194996308-7b43878e84a6"],
};

const img = (id) => `https://images.unsplash.com/photo-${id}?w=800&h=800&fit=crop&auto=format&q=80`;

const cats = [
  { slug: "dog-treats", name: "Dog Treats", pet: "dog", imgs: IMG.dogTreat,
    items: [
      ["Mini Naturals Chicken Recipe","Zuke's",16,49,3,["Soft & moist training treats","Real chicken first ingredient","Wheat & corn free","Under 3 calories per treat"]],
      ["Wilderness Trail Treats","Blue Buffalo",24,89,3,["Grain-free duck recipe","High-protein","No chicken by-products","Made in USA"]],
      ["Original Flavor Biscuits","Milk-Bone",24,72,3,["Crunchy clean teeth","12 essential vitamins","Pack of 24 boxes","Family favorite since 1908"]],
      ["Original Bacon Strips","Beggin'",24,68,3,["Real bacon flavor","Soft chewy texture","Resealable bags","High value reward"]],
      ["Dental Treats Regular","Greenies",12,178,2,["Vet recommended","Reduces tartar buildup","Freshens breath","One a day formula"]],
      ["Power Bites Real Beef","Merrick",24,96,3,["Grain-free recipe","Soft training treats","Real beef #1 ingredient","No artificial colors"]],
      ["Soup Bones Beef & Barley","Rachael Ray Nutrish",18,54,3,["Real beef broth basted","Long lasting chew","Made in USA","No corn or soy"]],
      ["Strips Original Bacon","Purina Beggin",24,71,3,["Made with real bacon","Soft and chewy","Resealable bag","Dogs go wild"]],
      ["Old-Fashioned Crunchy P-Nuttier","Old Mother Hubbard",12,58,3,["All-natural","Oven-baked crunch","Real peanut butter","No artificial preservatives"]],
      ["Soft WellBites Lamb & Salmon","Wellness",18,82,3,["Soft chewy treats","Two protein sources","No meat by-products","Grain-free"]],
      ["Jerky Strips Premium Chicken","Blue Buffalo",24,112,3,["100% real chicken","No artificial flavors","High-protein reward","Grain-free"]],
      ["Lil' Bits Slow Roasted Chicken","Blue Buffalo",24,68,3,["Soft training bites","Real chicken first","No corn wheat soy","100 treats per bag"]],
      ["MaroSnacks with Real Bone Marrow","Milk-Bone",24,64,3,["Crunchy outside soft inside","Real bone marrow center","Calcium fortified","All sizes"]],
      ["Yummy Combos Cheddar Bacon","Beggin'",24,72,3,["Two flavors in one","Soft and chewy","Made with real cheese","High value"]],
      ["Pill Pockets Chicken Flavor","Greenies",18,148,2,["Hide medication easily","Vet recommended","Real chicken flavor","Capsule size"]],
      ["Backcountry Real Steak","Merrick",18,89,3,["Grain-free jerky","Real USDA beef","Slow cooked","Made in USA"]],
      ["Burger Bites Real Beef","Rachael Ray Nutrish",24,68,3,["Soft burger-style","Real beef recipe","No artificial flavors","Made in USA"]],
      ["Strips Original with Bacon","Purina Beggin",24,68,3,["Real bacon aroma","Soft texture","Resealable","Bulk case"]],
      ["Mother's Solutions Hip & Joint","Old Mother Hubbard",18,72,3,["Functional treat","Glucosamine added","Oven baked","All natural"]],
      ["WellBars Crunchy Apples & Yogurt","Wellness",18,64,3,["Crunchy biscuit","Real fruit","No meat by-products","Whole grains"]],
    ]},
  { slug: "cat-treats", name: "Cat Treats", pet: "cat", imgs: IMG.catTreat,
    items: [
      ["Classic Tasty Chicken","Temptations",24,58,3,["Crunchy outside soft inside","Under 2 calories each","Cats can't resist","Resealable pouch"]],
      ["Dental Adult Cat Treats","Greenies",18,89,2,["Reduces tartar","Vet recommended","Crunchy texture","Natural with added vitamins"]],
      ["Lickable Chicken Recipe","Churu",24,124,3,["Squeezable puree treat","Hand-feed bonding","Hydrating","No grains"]],
      ["Gravy Lovers Variety Pack","Fancy Feast",24,68,3,["Savory gravies","Premium ingredients","Multiple flavors","Single serve"]],
      ["Party Mix Original Crunch","Friskies",24,52,3,["Three flavors per bag","Crunchy texture","Resealable","Made in USA"]],
      ["Bursts Tempting Chicken","Blue Buffalo",24,72,3,["Crunchy shell soft middle","No corn wheat soy","Real chicken","Natural ingredients"]],
      ["Tartar Control Chicken","Temptations",24,58,3,["Reduces plaque","Crunchy texture","Cats love them","Pack of 24"]],
      ["Feline Greenies SmartBites","Greenies",18,84,2,["Functional treat","Hairball control","Skin & fur health","Natural"]],
      ["Churu Tuna Variety","Churu",24,124,3,["Lickable puree","Tuna recipes","Bonding treat","Grain free"]],
      ["Purely Natural Tuna Filets","Fancy Feast",24,82,3,["100% real fish","Single-serve","No fillers","Premium quality"]],
      ["Pull 'n Play Tender Strips","Friskies",24,46,3,["Pull-apart fun","Soft & chewy","Real chicken","Interactive treat"]],
      ["Bursts Tempting Tuna","Blue Buffalo",24,72,3,["Crunchy soft center","Real tuna","No artificial colors","Healthy reward"]],
      ["Creamy Puree Chicken","Temptations",24,84,3,["Lickable creamy treat","Real chicken","Hydrating","Single tubes"]],
      ["Pill Pockets Chicken Cat","Greenies",18,84,2,["Hide medication","Cat-favorite chicken","Soft pliable","Vet recommended"]],
      ["Purée Tuna Recipe","Churu",24,124,3,["Squeezable","Real tuna","Hand-feed bond","Grain free"]],
    ]},
  { slug: "dog-kennels", name: "Dog Kennels & Crates", pet: "dog", imgs: IMG.kennel,
    items: [
      ["iCrate Double-Door Folding 36\"","MidWest",4,289,2,["Two doors for placement","Divider panel included","Folds flat for storage","Safety latches"]],
      ["Ultra Vari Kennel 32\"","Petmate",4,242,2,["Airline approved","Heavy-duty plastic","Wing-nut assembly","Ventilation slots"]],
      ["Folding Metal Crate 42\"","AmazonBasics",4,224,2,["Two doors","Removable plastic tray","No tools assembly","Divider included"]],
      ["Heavy Duty Crate 48\"","Frisco",2,389,2,["20-gauge steel","Five doors","Locking caster wheels","Powder coat finish"]],
      ["High Anxiety Crate Stationary","Impact",1,1098,2,["Aluminum reinforced","Escape proof","Lifetime warranty","Made in USA"]],
      ["Life Stages Single Door 30\"","MidWest",4,189,2,["Easy slide pan","ABS plastic floor","Free divider","Lifetime warranty"]],
      ["Sky Kennel IATA 28\"","Petmate",4,298,2,["Airline travel approved","Live animal stickers","Bolted assembly","Heavy-duty"]],
      ["Heavy Duty Folding Crate 36\"","AmazonBasics",4,184,2,["Folds for travel","Removable tray","Two access doors","Rounded corners"]],
      ["Ultimate Dog Crate 36\"","Frisco",4,329,2,["Steel mesh","Garage door style","Quiet rollers","Easy clean tray"]],
      ["Stationary Collapsible 400","Impact",2,889,2,["Aircraft aluminum","Stackable design","Slam latch","Made in USA"]],
    ]},
  { slug: "dog-leashes", name: "Dog Leashes", pet: "dog", imgs: IMG.leash,
    items: [
      ["Knot-a-Leash Reflective","Ruffwear",12,289,3,["Climbing-grade rope","Locking carabiner","Reflective trim","Talon clip"]],
      ["Zero Shock Bungee 48\"","EzyDog",12,178,3,["Shock-absorbing","Reflective stitching","Padded handle","Strong webbing"]],
      ["Classic Tape Retractable 16ft","Flexi",12,168,3,["One-button brake","Comfort-grip","Tested durability","German engineered"]],
      ["Nylon Leash 6ft","PetSafe",24,96,3,["Premium nylon","Solid brass clip","Multiple colors","Machine washable"]],
      ["Snap Solid Braided 6ft","Mendota",12,168,3,["Hand-finished USA","Solid brass hardware","Soft to touch","Lifetime warranty"]],
      ["Roamer Bungee 7-9ft","Ruffwear",12,242,3,["Hands-free waist","Stretch webbing","Adjustable","Crux clip"]],
      ["Soft Trainer Leash","EzyDog",12,124,3,["Padded handle","Lightweight","Reflective","Multiple lengths"]],
      ["Neon Reflective Retractable","Flexi",12,178,3,["High visibility","One-button brake","Long-life cord","Belt clip"]],
      ["Nylon Leash with Traffic Handle","PetSafe",24,124,3,["Two handles for control","Heavy-duty webbing","Solid clip","Pet safety"]],
      ["British Snap Slip Lead","Mendota",12,168,3,["No collar needed","Solid brass","Hand-finished","Made in USA"]],
    ]},
  { slug: "dog-collars", name: "Dog Collars", pet: "dog", imgs: IMG.collar,
    items: [
      ["Flat Out Collar Medium","Ruffwear",24,168,3,["Tubelok webbing","ID pocket","Reflective trim","Aluminum V-ring"]],
      ["Martingale Quick Snap","PetSafe",24,124,3,["No-slip design","Quick-snap buckle","Trainer recommended","Multiple sizes"]],
      ["Classic Solid Color Collar","Blueberry Pet",24,108,3,["Soft polyester","Plastic buckle","D-ring for ID","20+ colors"]],
      ["Original Pet Collar","Lupine",24,124,3,["Lifetime guarantee","Even chewed","Made in USA","Designer patterns"]],
      ["Personalized Embroidered Collar","GoTags",24,148,3,["Custom embroidery","Phone & name","Heavy nylon","Removable D-ring"]],
      ["Headwater Collar","Ruffwear",24,148,3,["Aluminum buckle","ID pocket","Webbing","Reflective"]],
      ["Nylon Adjustable Quick-Snap","PetSafe",24,84,3,["Quick-snap","Solid colors","D-ring","Comfort fit"]],
      ["Padded Genuine Leather Collar","Blueberry Pet",24,168,3,["Genuine leather","Padded interior","Solid hardware","Premium feel"]],
      ["Eco Collar Recycled","Lupine",24,148,3,["Made from recycled bottles","Lifetime guarantee","USA made","Patterns"]],
      ["Reflective Personalized Collar","GoTags",24,148,3,["Reflective stitching","Custom name","Heavy nylon","All sizes"]],
    ]},
  { slug: "dog-harnesses", name: "Dog Harnesses", pet: "dog", imgs: IMG.harness,
    items: [
      ["Front Range Harness","Ruffwear",12,289,3,["Two leash points","Padded chest","ID pocket","Reflective trim"]],
      ["IDC Powerharness","Julius-K9",12,278,3,["Reflective edge","Velcro side panels","Top handle","Customizable patches"]],
      ["Easy Walk Harness","PetSafe",24,168,3,["Front-clip stops pulling","Quick-snap buckles","Veterinarian recommended","Adjustable"]],
      ["Tru-Fit Smart Crash-Tested","Kurgo",12,289,3,["Crash-tested certified","5-point adjustable","Seatbelt tether","Front clip"]],
      ["No-Pull Adjustable Harness","Rabbitgoo",24,168,3,["Two leash attachments","Soft padded","Reflective strips","Easy on/off"]],
      ["Web Master Harness","Ruffwear",12,332,3,["Lift handle","Secure fit","Five points adjustment","Reinforced webbing"]],
      ["IDC Color & Gray Harness","Julius-K9",12,248,3,["Side handle","Reflective","Custom patches","All sizes"]],
      ["3 in 1 Reflective Harness","PetSafe",24,168,3,["Reflective accents","Three connection points","Padded","Easy on"]],
      ["Journey Air Harness","Kurgo",12,242,3,["Lightweight breathable","No-pull V-ring","Reflective","Hiking ready"]],
      ["Comfort Step-In Harness","Rabbitgoo",24,148,3,["Step-in design","Soft chest plate","Adjustable","All breeds"]],
    ]},
  { slug: "dog-food", name: "Dog Food", pet: "dog", imgs: IMG.dogFood,
    items: [
      ["Medium Adult Dry Dog Food","Royal Canin",4,289,2,["Breed-specific nutrition","Optimal kibble shape","Antioxidant complex","Highly digestible"]],
      ["Adult Chicken & Barley Recipe","Hill's Science Diet",4,278,2,["Vet recommended","Real chicken","Natural fibers","Made in USA"]],
      ["Sport Performance 30/20 Chicken","Purina Pro Plan",4,289,2,["High-energy formula","Real chicken first","Glucosamine","30% protein"]],
      ["Life Protection Adult Chicken","Blue Buffalo",4,298,2,["Deboned chicken first","No corn wheat soy","LifeSource Bits","Wholesome grains"]],
      ["High Prairie Grain-Free","Taste of the Wild",4,289,2,["Real roasted bison","Grain-free","Probiotics","Made in USA"]],
      ["Maxi Adult Dog Food","Royal Canin",4,298,2,["Large breed formula","Joint support","Bone health","Optimal weight"]],
      ["Adult Lamb & Brown Rice","Hill's Science Diet",4,289,2,["Single protein","Easy to digest","Vet recommended","Skin & coat"]],
      ["Savor Shredded Blend Chicken & Rice","Purina Pro Plan",4,278,2,["Hard kibble + tender shreds","Real chicken","High protein","Made in USA"]],
      ["Wilderness Adult Chicken","Blue Buffalo",4,309,2,["Grain-free","High-protein","LifeSource Bits","Real chicken"]],
      ["Pacific Stream Salmon","Taste of the Wild",4,289,2,["Smoked salmon","Grain-free","Omega fatty acids","Antioxidants"]],
    ]},
  { slug: "cat-food", name: "Cat Food", pet: "cat", imgs: IMG.catFood,
    items: [
      ["Indoor Adult Dry Cat Food","Royal Canin",4,189,2,["Hairball control","Indoor formula","Optimal weight","Highly digestible"]],
      ["Adult Indoor Chicken","Hill's Science Diet",4,178,2,["Natural fiber","Hairball control","Lean muscle","Vet recommended"]],
      ["Tender Selects Chicken","Purina ONE",4,148,2,["Real chicken first","Tender meaty bites","No fillers","Made in USA"]],
      ["Wilderness Indoor Chicken","Blue Buffalo",4,198,2,["High-protein grain-free","Real chicken","LifeSource Bits","Indoor formula"]],
      ["Gravy Lovers Variety 24 Pack","Fancy Feast",6,72,3,["Savory gravies","24 single-serve cans","Premium quality","Multiple flavors"]],
      ["Hairball Care Adult","Royal Canin",4,189,2,["Reduces hairballs","Optimal weight","Highly palatable","Made in USA"]],
      ["Sensitive Stomach Chicken","Hill's Science Diet",4,189,2,["Easy to digest","Skin & coat","Real chicken","Vet recommended"]],
      ["Healthy Metabolism Chicken","Purina ONE",4,148,2,["Weight management","Lean muscle","Real chicken","No fillers"]],
    ]},
  { slug: "dog-toys", name: "Dog Toys", pet: "dog", imgs: IMG.dogToy,
    items: [
      ["Classic Red Rubber Toy Large","KONG",24,168,3,["Stuff with treats","Natural rubber","Erratic bounce","Mental stimulation"]],
      ["Ultra Ball Launcher Compatible","Chuckit!",24,124,3,["Brightly colored","Floats and bounces","Tough rubber","Standard launcher"]],
      ["Dura Chew Textured Bone","Nylabone",24,108,3,["Powerful chewer","Real chicken flavor","Tartar control","Long-lasting"]],
      ["Hide-A-Squirrel Plush Puzzle","Outward Hound",12,148,3,["Interactive plush","6 squeaky squirrels","Mental stimulation","Multiple sizes"]],
      ["KONG Extreme Black","KONG",24,189,3,["Toughest rubber","Power chewers","Stuffable","Erratic bounce"]],
      ["Chuckit Indoor Ball","Chuckit!",24,98,3,["Soft for indoor","Bouncy","Lightweight","Easy fetch"]],
      ["Power Chew Real Beef","Nylabone",24,108,3,["Real beef flavor","Tough nylon","Tartar control","Made in USA"]],
      ["Hide-A-Bee Beehive Puzzle","Outward Hound",12,142,3,["Interactive puzzle","3 squeaky bees","Mental stimulation","Plush soft"]],
    ]},
  { slug: "cat-toys", name: "Cat Toys", pet: "cat", imgs: IMG.catToy,
    items: [
      ["Kickeroo Catnip Pillow","KONG",24,84,3,["Premium catnip","Bunny-kick texture","Durable fabric","Hours of play"]],
      ["Hot Pursuit Concealed Motion","SmartyKat",12,124,3,["Mimics hidden prey","Battery operated","Auto shut-off","Engaging play"]],
      ["Tower of Tracks 3-Tier","Petstages",12,148,3,["Three levels of balls","Mental stimulation","Stable base","Solo play"]],
      ["KONG Active Mouse","KONG",24,68,3,["Catnip filled","Realistic feel","Pounce-friendly","Premium catnip"]],
      ["SmartyKat Skitter Critters","SmartyKat",24,52,3,["Three mice per pack","Catnip stuffed","Soft fabric","Encourages exercise"]],
    ]},
  { slug: "grooming", name: "Grooming Supplies", pet: "dog", imgs: IMG.grooming,
    items: [
      ["Oatmeal & Aloe Shampoo Gallon","Earthbath",6,189,2,["Soothes itchy skin","Soap-free formula","Made in USA","Salon-grade"]],
      ["FURminator deShedding Tool Large","FURminator",12,289,2,["Reduces shedding up to 90%","Stainless steel edge","Ergonomic handle","Vet recommended"]],
      ["Chris Christensen Big G Slicker","Chris Christensen",6,442,2,["Pro groomer favorite","Cushioned head","Long pin","Made in USA"]],
      ["Wahl Bravura Cordless Clipper","Wahl",4,498,2,["Lithium-ion battery","Adjustable blade","Quiet operation","Pro-grade"]],
      ["Tropiclean Fresh Breath Gel 4oz","Tropiclean",24,168,3,["No brushing required","Reduces plaque","Mint flavor","Veterinarian formulated"]],
      ["Andis ProClip AGC2 Clipper","Andis",4,548,2,["Two-speed motor","Detachable blade","Cool-running","Lifetime motor warranty"]],
      ["Burt's Bees Tearless Shampoo","Burt's Bees",24,142,3,["Buttermilk & honey","pH balanced for dogs","No sulfates","Cruelty-free"]],
      ["Safari Wire Pin Brush","Safari",24,98,3,["Stainless steel pins","Cushioned base","Long & wire-haired breeds","Wood handle"]],
      ["Hertzko Self-Cleaning Slicker","Hertzko",24,168,3,["One-button cleaning","Gentle on skin","Removes mats","Comfort grip"]],
      ["Earthbath Hypo-Allergenic Wipes","Earthbath",24,124,3,["Fragrance-free","Aloe & vitamin E","Cleans paws & coat","100 wipes/pack"]],
      ["Bissell BarkBath Portable","Bissell",4,789,2,["Reduces water by 90%","Patented spray system","No tub required","Pro-grade"]],
      ["Conair PRO Pet Nail Clipper","Conair",24,84,3,["Sharp stainless steel","Safety guard","Non-slip handle","All sizes"]],
    ]},
  { slug: "beds-furniture", name: "Pet Beds & Furniture", pet: "dog", imgs: IMG.bed,
    items: [
      ["Big Barker 7\" Orthopedic Bed Large","Big Barker",4,789,2,["Therapeutic foam","10-year warranty","Made in USA","Microfiber cover"]],
      ["FurHaven Orthopedic Sofa Bed","FurHaven",6,389,2,["Egg-crate foam","Removable cover","Multiple sizes","Suede finish"]],
      ["K&H Heated Outdoor Pad Medium","K&H Pet",6,289,2,["MET safety listed","Weather-resistant","Low wattage","Auto-thermostat"]],
      ["Frisco Solid Bolster Bed","Frisco",6,242,3,["Removable washable cover","Polyester fill","Multiple colors","Indoor/outdoor"]],
      ["PetFusion Ultimate Lounge","PetFusion",4,548,2,["Solid memory foam","Waterproof liner","Removable cover","Premium build"]],
      ["MidWest Quiet Time Pet Bed","MidWest",12,189,3,["Fits all crate sizes","Synthetic fur top","Machine washable","Skid-resistant"]],
      ["Casper Dog Bed Medium","Casper",4,742,2,["Memory foam supportive","Microfiber cover","Removable wash","Designer styling"]],
      ["Best Friends by Sheri Donut","Best Friends",6,289,3,["Calming round shape","Faux fur","Self-warming","Machine washable"]],
      ["Snoozer Cozy Cave Bed","Snoozer",4,398,2,["Hooded retreat design","Sherpa lining","Removable cover","Made in USA"]],
      ["FurHaven Calming Donut Bed","FurHaven",6,242,3,["Faux fur calming","Self-warming","Bolster sides","Machine washable"]],
    ]},
  { slug: "bowls-feeders", name: "Bowls & Feeders", pet: "dog", imgs: IMG.bowl,
    items: [
      ["Stainless Steel Bowl Set 64oz","Frisco",24,124,3,["Rust-resistant","Dishwasher safe","Non-skid base","Heavy-duty"]],
      ["Petmate Replendish Gravity Waterer","Petmate",12,189,2,["Microban protection","4-gallon capacity","Translucent reservoir","BPA-free"]],
      ["PetSafe Smart Feed 2.0","PetSafe",4,498,2,["Wi-Fi enabled","App scheduling","Up to 12 meals/day","Tip-resistant"]],
      ["Outward Hound Fun Feeder Slo Bowl","Outward Hound",24,148,3,["Slows eating 10x","Non-slip base","Dishwasher safe","Multiple patterns"]],
      ["Loving Pets Bella Bowl Stainless","Loving Pets",24,98,3,["Rubber base prevents skid","No-tip design","Designer colors","Dishwasher safe"]],
      ["Neater Feeder Express Mess Proof","Neater Pet",6,289,2,["Catches spills","Raised feeder","Non-skid","Easy to clean"]],
      ["IRIS Airtight Food Container 33qt","IRIS USA",6,178,3,["Airtight seal","Wheels for mobility","BPA-free","Stackable"]],
      ["WeatherTech Pet Feeding System","WeatherTech",6,389,2,["Made in USA","Stainless bowls","FDA-grade","Multiple heights"]],
      ["Pioneer Pet Raindrop Fountain","Pioneer Pet",12,189,3,["60oz capacity","Triple filtration","Stainless steel","Quiet pump"]],
      ["YETI Boomer 8 Dog Bowl","YETI",12,498,3,["Double-wall steel","Dishwasher safe","Non-slip ring","Built like YETI"]],
    ]},
  { slug: "health-wellness", name: "Health & Wellness", pet: "dog", imgs: IMG.health,
    items: [
      ["Frontline Plus Dog 6-Pack","Frontline",6,398,2,["Vet recommended","Kills fleas & ticks","Waterproof","30-day protection"]],
      ["Cosequin Maximum Strength 132ct","Nutramax",6,442,2,["Joint health support","Glucosamine + chondroitin","Vet recommended #1","Made in USA"]],
      ["NaturVet Hemp Calming Soft Chews","NaturVet",12,189,3,["Hemp + L-tryptophan","Non-drowsy","Made in USA","Veterinarian formulated"]],
      ["Greenies PILL POCKETS Capsule","Greenies",18,148,3,["Hide medications","Vet's #1 choice","Real chicken","No artificial colors"]],
      ["Zesty Paws Multivitamin Bites","Zesty Paws",12,242,3,["8-in-1 formula","Soft chew","Made in USA","Hip + skin + heart"]],
      ["VetIQ Hairball Remedy Gel","VetIQ",24,98,3,["Eliminates hairballs","Tasty gel formula","Easy administration","Vet formulated"]],
      ["Nutri-Vet Pre & Probiotic","Nutri-Vet",18,168,3,["Digestive health","Made in USA","Soft chews","Vet formulated"]],
      ["Adams Plus Flea & Tick Spray","Adams",12,148,3,["Kills on contact","Lasts up to 2 months","Indoor & outdoor","Aloe vera"]],
      ["VetriScience Composure Chews","VetriScience",12,224,3,["Calming formula","Vet recommended","Bacon flavor","Made in USA"]],
      ["Pet MD Ear Cleaner Wipes","Pet MD",24,98,3,["100 wipes per jar","Aloe & eucalyptus","Reduces ear odor","Veterinarian formulated"]],
    ]},
  { slug: "cat-litter", name: "Cat Litter & Accessories", pet: "cat", imgs: IMG.litter,
    items: [
      ["Tidy Cats LightWeight 17lb","Purina Tidy Cats",4,168,2,["50% lighter","Tight clumping","99.9% dust-free","Glade fresh scent"]],
      ["World's Best Cat Litter 28lb","World's Best",4,289,2,["Made from corn","Flushable","Outstanding clumping","Long-lasting"]],
      ["Arm & Hammer Clump & Seal 38lb","Arm & Hammer",4,242,2,["7-day odor free","Tight clumps","Low dust","Multi-cat formula"]],
      ["Dr. Elsey's Precious Cat Ultra 40lb","Dr. Elsey's",4,189,2,["Premium clumping","Hypoallergenic","99.9% dust-free","Vet recommended"]],
      ["Fresh Step Crystals 8lb","Fresh Step",6,124,3,["Silica crystals","Locks in odor","Lightweight","Lasts 30 days"]],
      ["Frisco Multi-Cat Unscented 40lb","Frisco",4,148,2,["Tight clumping","Low tracking","Fragrance-free","Multi-cat strength"]],
      ["Litter-Robot 4 Automatic","Litter-Robot",1,1298,1,["Self-cleaning","Wi-Fi enabled","Reduces odor","90-day in-home trial"]],
      ["Nature's Miracle Hooded Box","Nature's Miracle",6,168,3,["Anti-microbial","Hooded privacy","Easy clean","Includes filter"]],
      ["Booda Dome Cleanstep Litter Box","Booda",6,189,3,["Cleans paws as cat exits","Privacy dome","Charcoal filter","No-show waste"]],
      ["DuraScoop Original Litter Scoop","DuraScoop",24,98,3,["Aluminum construction","Pro-grade strength","Lifetime guarantee","Made in USA"]],
    ]},
];

let id = 1;
const all = [];
for (const c of cats) {
  c.items.forEach((it, i) => {
    const [name, brand, unitQty, price, moq, features] = it;
    const rating = +(4.2 + Math.random() * 0.7).toFixed(1);
    const reviews = Math.floor(40 + Math.random() * 460);
    const isBestSeller = i < 3;
    const isNew = i >= c.items.length - 2;
    const inStock = Math.random() > 0.05;
    const sku = `PW-${c.slug.split("-").map(s=>s[0].toUpperCase()).join("")}-${String(id).padStart(4,"0")}`;
    const image = img(c.imgs[i % c.imgs.length]);
    const unitLabel = c.slug.includes("food") || c.slug.includes("kennel") || c.slug.includes("crate")
      ? `per case of ${unitQty}`
      : `per case of ${unitQty}`;
    const description = `Wholesale ${name.toLowerCase()} from ${brand}, packaged ${unitLabel.toLowerCase()} for retail and reseller fulfillment. Sourced direct, quality guaranteed, and ready to ship from our Houston, TX warehouse.`;
    all.push({
      id: id.toString(),
      sku, name, brand,
      category: c.slug,
      categoryName: c.name,
      petType: c.pet,
      price, unitLabel, unitQty,
      moq,
      rating, reviews,
      image,
      images: [image, img(c.imgs[(i+1)%c.imgs.length]), img(c.imgs[(i+2)%c.imgs.length])],
      inStock,
      isBestSeller, isNew,
      description,
      features,
    });
    id++;
  });
}

const out = `// AUTO-GENERATED. ${all.length} products.
export type Product = {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  categoryName: string;
  petType: "dog" | "cat";
  price: number;
  unitLabel: string;
  unitQty: number;
  moq: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  inStock: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  description: string;
  features: string[];
};

export const products: Product[] = ${JSON.stringify(all, null, 2)};

export const categories = ${JSON.stringify(cats.map(c => ({ slug: c.slug, name: c.name, pet: c.pet, image: img(c.imgs[0]) })), null, 2)};

export const brands = Array.from(new Set(products.map(p => p.brand))).sort();
`;

writeFileSync("src/data/products.ts", out);
console.log(`Generated ${all.length} products`);
