CREATE TABLE "gallery_items" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(30000) NOT NULL,
	"description" VARCHAR(150) NOT NULL,
	"likes" INTEGER DEFAULT '0'
);

INSERT INTO "gallery_items" ("path", "description")
VALUES ('images/goat_small.jpg','Photo of a goat taken at Glacier National Park.'),
    ('images/fourth.jpeg', 'Photo of me on the fourth of July.'),
    ('images/fractured.jpg', 'Photo of me after I fractured my wrist on July 3rd.'),
    ('images/longboard.jpeg', 'Photo of me sanding down a longboard deck.'),
    ('images/three_ponchos.jpeg', 'Photo of my brothers and I wearing ponchos at the theater.'),
    ('images/tres_flamingos.jpeg', 'Photo of me and a couple of buddies wearing flamingo hawaiian shirts.'),
    ('images/gig.jpg', 'Photo of me playing a gig with my cousins band.');

SELECT * FROM "gallery_items";