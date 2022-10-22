\c tankmates_app;

INSERT INTO origin (origin_name)
VALUES
('Asia'),
('Africa'),
('Europe'),
('North America'),
('South America'),
('Australia/Oceania'),
('Antartica');


INSERT INTO species (species_name, scientific_name, origin_id, pic, species_type, min_temp, max_temp, min_ph, max_ph, temperament, max_length)
VALUES
('Crystal Red Shrimp', 'Caridina cf. cantonensis', 1, 'https://aquadiction.world/img/profile/crystal-red-shrimp2.jpg', 'Invertebrates', 62, 76, 5.8, 7.4, 'Peaceful', 1.5),
('Red Cherry Shrimp', 'Neocaridina Heteropoda', 1, 'https://www.serendipitywave.com/wp-content/uploads/2020/08/Neocaridina-davidi-Red-Sakura.jpg', 'Invertebrates', 65, 85, 6.2, 8.0, 'Peaceful', 1.5),
('Bristlenose Plecostomus', 'Ancistrus cirrhosus', 5, 'https://www.keepingtropicalfish.co.uk/wp-content/uploads/2012/01/bushy-nose-plecostomus-500p.jpg', 'Bottom Feeder', 60, 80, 6.5, 7.5, 'Semi-aggressive', 5),
('Flower Horn Cichlid', 'Amphilophus hybrid', 5, 'https://i.ytimg.com/vi/pbHt34o2hUw/maxresdefault.jpg', 'Cichlid', 80, 86, 7, 8, 'Aggressive', 16),
('Frontosa Cichlid', 'Cyphotilapia Frontosa', 2, 'https://cdn.shopify.com/s/files/1/1960/6211/products/frontosa_2b_grande.jpg?v=1529613292', 'Cichlid', 72, 80, 8, 9, 'Semi-Aggressive', 12),
('Peacock Cichlid', 'Aulonocara', 2, 'https://www.aquaticdesign.co.uk/wp-content/uploads/2013/03/Red-cichlid-375.jpg', 'Cichlid', 74, 82, 7.5, 8.5, 'Semi-aggressive', 6),
('Ranchu Goldfish', 'Carassius auratus', 1, 'https://uploads.tapatalk-cdn.com/20160525/fecac3430539c379898eefbaac5071d6.jpg', 'Goldfish', 65, 72, 6.0, 8.0, 'Peaceful', 6),
('Betta', 'Betta splendens', 1, 'https://www.aquastore.in/image/cache/catalog/aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/2.betta/fancy/Fancy-Marble-Rosetail-Halfmoon-Betta-Fish-600x600.jpg', 'Betta', 75, 82, 6.6, 7.5, 'Aggressive', 2.5),
('Arowana', 'Scleropages formosus', 1, 'http://aquaticaa.weebly.com/uploads/1/7/6/2/17629499/2287097_orig.jpg', 'Monster Fish', 75, 82, 6.5, 7.5, 'Aggressive', 48),
('Clown Fish', 'Pygocentrus nattereri', 5, 'https://explorersweb.com/wp-content/uploads/2020/03/shutterstock_1597150267-e1585239060526.jpg', 'Marine Fish', 75, 80, 7.8, 8.4, 'Peaceful', 4);

