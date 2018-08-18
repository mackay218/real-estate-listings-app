CREATE TABLE "listings" (
	"id" serial primary key,
	"cost" real,
	"sqft" real,
	"type" varchar(255) not null,
	"city" varchar(255) not null,
	"image_path" varchar(255)
);