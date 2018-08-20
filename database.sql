CREATE TABLE "listings" (
    "id" serial primary key,
    "cost" varchar(255) not null,
    "sqft" varchar(255) not null,
    "type" varchar(255) not null,
    "city" varchar(255) not null,
    "image_path" varchar(255) not null,
    "confirm" boolean
);


INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path", "confirm")


VALUES (123000, 1500, 'sale', 'Forest Lake', 'shiny.jpg', true),

(90000, 1200, 'sale', 'Blaine', 'stony.jpg', true),

(127500, 1600, 'sale', 'Oakdale', 'haunted.png', true),

(126100, 1350, 'sale', 'Rochester', 'older.jpg', true),

(105300, 900, 'sale', 'Zimmerman', 'shiny.jpg', true),

(135300, 1800, 'sale', 'Hopkins', 'older.jpg', true),

(51000, 500, 'sale', 'Grand Rapids', 'stony.jpg', true),

(49500, 900, 'sale', 'Fergus Falls', 'haunted.png', true),

(159600, 1900, 'sale', 'Lake City', 'shiny.jpg', true),

(96300, 800, 'sale', 'Hibbing', 'shiny.jpg', true),

(139400, 1700, 'sale', 'Savage', 'stony.jpg', true),

(248400, 2300, 'sale', 'Oakdale', 'older.jpg', true),

(148200, 1300, 'sale', 'Minneapolis', 'older.jpg', true),

(170100, 2100, 'sale', 'New Brighton', 'stony.jpg', true),

(63600, 1200, 'sale', 'Plymouth', 'haunted.png', true),

(700, 400, 'rent', 'Victoria', 'classic-flats.jpg', true),

(500, 900, 'rent', 'Waconia', 'rental.jpg', true),

(800, 1100, 'rent', 'Falcon Heights', 'rental2.jpg', true),

(600, 850, 'rent', 'Lake City', 'classic-flats.jpg', true),

(1200, 800, 'rent', 'Champlin', 'rental2.jpg', true),

(1050, 1300, 'rent', 'Mound', 'rental.jpg', true),

(800, 1150, 'rent', 'Dayton', 'classic-flats.jpg', true),

(750, 1300, 'rent', 'Anoka', 'rental2.jpg', true),

(850, 1320, 'rent', 'Maplewood', 'classic-flats.jpg', true),

(1100, 1200, 'rent', 'Savage', 'rental.jpg', true),

(950, 1200, 'rent', 'Robbinsdale', 'rental2.jpg', true),

(700, 650, 'rent', 'Marshall', 'classic-flats.jpg', true);
