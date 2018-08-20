CREATE TABLE "listings" (
    "id" serial primary key,
    "cost" varchar(255) not null,
    "sqft" varchar(255) not null,
    "type" varchar(255) not null,
    "city" varchar(255) not null,
    "image_path" varchar(255) not null,
    "confirm" boolean
);