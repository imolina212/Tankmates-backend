\c tankmates_app;

INSERT INTO users (username, firstname, lastname, email, user_password, pic)
VALUES
('imolina212', 'Isidro', 'Molina', 'isidrom@tankmates.org', 'tankmatesAdmin', '/userPics/jacques.webp'),
('Nemo', 'Alexander', 'Gould', 'alexanderg@tankmates.org', 'tankmates2', '/userPics/nemo.webp'),
('Dory', 'Ellen', 'DeGeneres', 'ellend@tankmates.org', 'tankmates3', '/userPics/dory.jpeg'),
('Marlin', 'Albert', 'Brooks', 'albertb@tankmates.org', 'tankmates4', '/userPics/marlin.jpeg'),
('Squirt', 'Nicholas', 'Bird', 'nicholasb@tankmates.org', 'tankmates5', '/userPics/squirt.jpg'),
('Mr.Ray', 'Bob', 'Peterson', 'bobp@tankmates.org', 'tankmates6', '/userPics/mr_ray.jpeg');

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

INSERT INTO tanks (tank_name, user_id, size, is_saltwater, waterchange_frequency)
VALUES
('Planted Tank', 1, 55, false, 4),
('Display Tank', 1, 120, false, 4),
('Main Tank', 2, 75, false, 4),
('D Tank', 2, 120, false, 4),
('Planted Tank', 3, 55, false, 4),
('Display Tank', 4, 120, false, 4),
('Main Tank', 5, 75, false, 4),
('D Tank', 5, 120, false, 4),
('Main Tank', 6, 75, false, 4),
('D Tank', 3, 120, false, 4);

INSERT INTO species_in_tank (tank_id, species_id)
VALUES
(1, 1),
(2, 1),
(3, 7),
(4, 2),
(5, 1),
(6, 9),
(7, 1),
(8, 1),
(9, 7),
(10, 2),
(1, 10),
(2, 9),
(3, 8),
(4, 7),
(5, 6),
(6, 5),
(7, 4),
(8, 3),
(9, 2),
(10, 1);

INSERT INTO tank_history (tank_id, waterchange_date, gallons_changed, ph, ammonia, nitrite, nitrate)
VALUES
(1, '2022-10-10', 20, 7, 0, 0, 0),
(2, '2022-10-24', 20, 7, 0, 0, 0),
(1, '2022-10-24', 20, 7, 0, 0, 0),
(2, '2022-11-08', 20, 7, 0, 0, 0),
(1, '2022-11-08', 20, 7, 0, 0, 0);

INSERT INTO products (name, brand, category, image, rating, price, in_stock, description)
VALUES
('TetraMin Tropical Flakes Fish Food', 'Tetra', 'Food', '/productImages/tetraminflakes.png', 5, 7.99, true, 'Feed your tropical fish a balanced diet and keep water cleaner and clearer with Tetra Min Tropical Flakes Fish Food. Tropical fish need a diet with protein and fat for energy and vitamins to prevent disease. Tetra Min Tropical Flakes Fish Food is made with Tetra&apos;s patented ProCare blend of vitamins and Omega-3 fatty acids to boost immunity and protect against stress and disease. And it&apos;s easy to digest and will not leach color, helping to keep water clean and clear.'),
('Stress Coat Aquarium Water Conditioner', 'API', 'Water Care', '/productImages/stresscoat.jpeg', 5, 10.48, true, 'Give your fish long-lasting relief from stress and harmful chemicals with API Stress Coat Aquarium Water Conditioner. This fast-acting formula conditions tap water for use in freshwater aquariums. Stress Coat helps reduce the chlorine, chloramines and heavy metals in tap water that can harm your finned friend. Use when starting an aquarium, adding a new fish, or during routine water changes—the soothing aloe vera helps replace and protect your fish&apos;s slime coat for added safety. Plus, each five gallon container treats over 7,600 gallons of water for long-lasting protection!'),
('CycleGuard Power Filter', 'AquaClear', 'Filters & Media','/productImages/aquaclearpowerfilter.jpg', 5, 10.48, true, 'Give your fish long-lasting relief from stress and harmful chemicals with API Stress Coat Aquarium Water Conditioner. This fast-acting formula conditions tap water for use in freshwater aquariums. Stress Coat helps reduce the chlorine, chloramines and heavy metals in tap water that can harm your finned friend. Use when starting an aquarium, adding a new fish, or during routine water changes—the soothing aloe vera helps replace and protect your fish&apos;s slime coat for added safety. Plus, each five gallon container treats over 7,600 gallons of water for long-lasting protection!'),
('Air-Tech 2K3 Aquarium Air Pump', 'Penn-Plax', 'Cleaners & Pumps', '/productImages/pennplaxairpump.webp', 4, 5.99, true, 'Help your finned friends breathe easily with the Penn-Plax Air-Tech 2K3 Aquarium Air Pump! This pump provides an ultra-quiet, constant stream of oxygen to keep your tank aerated. It features a rubber armature, silicon polymer flappers, a thick cover, and rubber feet for noise-dampening capabilities. It has a single air outlet that accepts standard 3/16" airline tubing (sold separately). Keep your scaly sidekick happy and healthy!'),
('Ceramic Betta Log', 'Zoo Med', 'Decor', '/productImages/zoomedbettalog.jpg', 4, 5.99, true, 'Let your betta sink into comfy sleep with the Zoo Med Ceramic Betta Log. This nature-inspired aquarium accessory sinks to the bottom of your bettas enclosure to provide the perfect sleeping den or hide-out for your betta buddy. It features a hollow design with holes for your betta to swim through, and a nice cozy space for him to stay in when he wants. Designed to bring a touch of nature into your bettas enclosure, it helps reduce boredom from captivity and stimulates natural betta behaviors. Theres no set up or assembly to use―simply place in your aquarium, and let your pal naturally find this sunken sanctuary.'),
('PraziPro Freshwater & Marine Aquarium Treatment', 'Hikari', 'Health & Wellness', '/productImages/praziprowatertreatment.jpg', 4, 12.88, false, 'Help keep your finned friends and their fresh or saltwater home parasite-free with Hikari Prazipro Freshwater & Marine Aquarium Treatment. The worlds first, ready-to-use liquid concentrate praziquantel treatment, this extremely safe and highly-effective formula helps fish hobbyists control unwanted parasites in their pond, freshwater or marine aquarium. Considered the quality leader in aquatic nutrition and health for decades, Hikari devotes a significant amount of time, money and resources into studying the needs of fish in both their natural environments and in aquatic laboratory settings in order to help them thrive in captivity.'),
('Submersible Glass Aquarium Heater', 'Fluval', 'Heating & Lighting', '/productImages/fluvalHeater.webp', 3.5, 15.00, true, 'Keep your fish happy, healthy and swimming in comfort with the Fluval Submersible Glass Aquarium Heater. This sleek and compact submersible heater provides exceptional performance and unsurpassed reliability in both fresh and saltwater tanks. Made from high-density ceramic, the heating element is encased in shock-resistant borosilicate glass and features a temperature range of 68-86 degrees F. To help maintain the aesthetics of your aquatic display, the unique reflective technology of the outer casing makes the heater virtually invisible in your tank. For your convenience, dual suction cups allow you to easily install it inside your aquarium.'),
('Pond Koi Vibrance Color Enhancing Sticks Koi & Goldfish Food', 'Tetra', 'Pond Shop', '/productImages/tetrakoifishfood.jpg', 3.5, 18.50, true, 'Feed your pond fish a summer diet that will enhance coloration with Tetra Pond Koi Vibrance Color Enhancing Sticks Koi & Goldfish Food. Pond fish require appropriate nutrition for each season to support growth, metabolic changes and other biological activities. Tetra Pond Koi Vibrance Color Enhancing Sticks Koi & Goldfish Food contains protein from fish meal and natural red and yellow color enhancers. These lightweight sticks soften quickly in the water, making them easier to digest for less waste and cleaner water. Tetra Pond Koi Vibrance Color Enhancing Sticks Koi & Goldfish Food also floats longer so you can watch your fish feed on the waters surface.'),
('Everyday Fish Feeder Food Dispenser', 'Ehiem', 'Feeders', '/productImages/ehiemfeeder.webp', 3.5, 12.30, true, 'No more asking the neighbors to drop in to feed your fish—Eheims innovative Everyday Fish Feeder Food Dispenser makes it easy to keep your finny friends happy and healthy while you travel! This revolutionary product allows you to effortlessly program feeding times along with the amount of food youd like dispensed. Its compact design and splash-proof buttons serve to make this advanced product just as functional as it is stylish. Plus, with a digital display and built-in warning system, youll receive ample warning whenever its running out of battery. Whether its a weekend getaway or a week-long vacation, Eheims feeding solution is an elegant way to keep things running swimmingly while youre away.');

INSERT INTO product_images (product_id, image)
VALUES
(1, '/productImages/tetraminflakes.png'),
(1, '/productImages/tetraminflakes2.webp'),
(1, '/productImages/tetraminflakes3.jpg'),
(1, '/productImages/tetraminflakes4.webp'),
(2, '/productImages/stresscoat.jpeg'),
(2, '/productImages/stresscoat2.webp'),
(2, '/productImages/stresscoat3.jpeg'),
(2, '/productImages/stresscoat4.jpg'),
(2, '/productImages/stresscoat5.webp'),
(3, '/productImages/aquaclearpowerfilter.jpg'),
(3, '/productImages/aquaclear2.jpg'),
(3, '/productImages/aquaclear3.jpg'),
(3, '/productImages/aquaclear4.jpg'),
(3, '/productImages/aquaclear5.jpg'),
(3, '/productImages/aquaclear6.jpg'),
(4, '/productImages/pennplaxairpump.webp'),
(4, '/productImages/airtech2.webp'),
(5, '/productImages/zoomedbettalog.jpg'),
(6, '/productImages/praziprowatertreatment.jpg'),
(6, '/productImages/prazipro2.jpg'),
(6, '/productImages/prazipro3.jpg'),
(7, '/productImages/fluvalHeater.webp'),
(7, '/productImages/fluvalHeater2.jpg'),
(7, '/productImages/fluvalHeater3.jpg'),
(7, '/productImages/fluvalHeater4.jpg'),
(7, '/productImages/fluvalHeater5.jpg'),
(8, '/productImages/tetrakoifishfood.jpg'),
(8, '/productImages/tetrapondkoivibrance1.jpg'),
(8, '/productImages/tetrapondkoivibrance2.jpg'),
(8, '/productImages/tetrapondkoivibrance3.jpg'),
(8, '/productImages/tetrapondkoivibrance4.jpg'),
(9, '/productImages/ehiemfeeder.webp'),
(9, '/productImages/ehiemfeeder1.jpg'),
(9, '/productImages/ehiemfeeder2.jpg'),
(9, '/productImages/ehiemfeeder3.jpg'),
(9, '/productImages/ehiemfeeder4.jpg'),
(9, '/productImages/ehiemfeeder5.jpg');

INSERT INTO product_reviews (product_id, user_id, content, rating, title, username, email, date_created) 
VALUES
(1, 1, 'My shrimp loves these crushed up flakes.', 5, 'Excellent shrimp treat!', 'Isidro M.', 'isidrom@tankmates.org', '01/02/23'),
(1, 2, 'These flakes are a great alternative when I am unable to feed live foods!', 5, 'Less waste, less cost, win win.', 'Alexander G.', 'alexanderg@tankmates.org', '01/02/23'),
(1, 3, 'Best Flakes ever. My fish never leave a flake behind!', 5, 'Best Fish Food Flakes on the market', 'Ellen D.', 'isidrom@tankmates.org', '01/02/23'),
(1, 4, 'These flakes are a amazing, my fish love these.', 5, 'Affordable and great quality!', 'Albert B.', 'alexanderg@tankmates.org', '01/02/23'),
(1, 5, 'My goldfish go crazy over these flakes.', 5, 'My goldfish cant get enough', 'Nicholas B.', 'isidrom@tankmates.org', '01/02/23'),
(1, 6, 'test', 2, 'test', 'test', 'test@tankmates.org', '01/02/23'),
(1, 6, 'test', 3, 'test', 'test', 'test@tankmates.org', '01/02/23'),
(1, 6, 'test', 4, 'test', 'test', 'test@tankmates.org', '01/02/23'),
(4, 1, 'Good for the price, a little louder than i would like', 5, 'Get what you pay for', 'Isidro M.', 'isidromg@tankmates.org', '01/02/23');

INSERT INTO plants (name, scientific_name, image, origin, plant_type, placement, price, in_stock, skill_level, min_temp, max_temp, min_ph, max_ph, co2_requirement, description)
VALUES
('Monte Carlo', 'Micranthemum tweediei', '/plantImages/monte-carlo-1.webp', 5, 'Carpeting Plants', 'Foreground', 9.99, true, 'Medium', 68, 77, 6.0, 8.0, 'CO2 injection is recommended for dense growth', 'Micranthemum (Monte Carlo) tweediei is a carpeting plant which is typically used by aquarists to achieve lush foreground cover. It is a low-growing plant with bright green, rounded leaves. It will creep laterally along the substrate as it grows along and can also be used overhanging on decor or rocks. Monte Carlo does not require much beyond medium to higher lighting and fertilizer to thrive. Once it takes off, it will fill in nicely to form a soft carpet for shrimp and bottom dwellers to enjoy.'),
('Amazon Sword', 'Echinodorus amazonicus', '/plantImages/amazon-sword-1.webp', 5, 'Stem Plants', 'Background', 9.99, true, 'Easy', 72, 82, 6.0, 7.0, 'Not necessary to inject CO2, doing so will result in faster growth and larger leaves', 'Amazon Swords are one of the oldest-kept plants in the hobby, loved for their ease of care and ability to tolerate a wide range of conditions. Amazon Swords can grow 20 inches tall or more, making them a great choice of background plant for larger aquariums or centerpiece for small aquariums. They have long, pointed leaves which are bright green to dark green in color. Angelfish have even been known to use Amazon Swords large leaves as a surface to lay eggs.'),
('Scarlet Temple', 'Alternanthera reineckii var (Roseafolia)', '/plantImages/scarlet-temple-1.webp', 5, 'Stem Plants', 'Mid to Background', 9.99, true, 'Medium', 72, 82, 6.5, 7.5, 'CO2 is not required, but it will help with their growth.', 'Scarlet temple is a vibrant stem plant that is relatively easy to care for. It features pink to red colored leaves that really make it stand out amongst green aquarium plants. Given high lighting, deeper reds and purple tints can even be seen from this plant. Scarlet temple does well as a midground to background plant as it can be trimmed short or grown out a bit taller. Therefore, it also provides excellent cover for fish and shrimp.'),
('Brazilian Pennywort', 'Hydrocotyle leucocephala', '/plantImages/brazilian-pennywort-1.webp', 5, 'Stem Plants', 'Mid to Background', 9.99, true, 'Easy', 72, 82, 6.0, 8.0, 'CO2 is not required, but it will help with their growth.', 'Brazilian pennywort is a versatile and unique plant that will draw eyes to any aquarium. It has flat, rounded leaves that almost look like little umbrellas when growing underwater. Over time, it will grow upwards toward the light and will send out light green leaves from its vine-like stems as it grows along. This plant is easy to care for and does very well in a medium to higher light tank. Once it takes off, Brazilian pennywort will add tons of hiding places for fish and fry with its big leaves and may even grow right out the top of your tank if left untrimmed.');

INSERT INTO plant_images (plant_id, image)
VALUES
(1, '/plantImages/monte-carlo-1.webp'),
(1, '/plantImages/monte-carlo-2.webp'),
(1, '/plantImages/monte-carlo-3.webp'),
(1, '/plantImages/monte-carlo-4.webp'),
(2, '/plantImages/amazon-sword-1.webp'),
(2, '/plantImages/amazon-sword-2.webp'),
(2, '/plantImages/amazon-sword-3.webp'),
(2, '/plantImages/amazon-sword-4.webp'),
(3, '/plantImages/scarlet-temple-1.webp'),
(3, '/plantImages/scarlet-temple-2.webp'),
(3, '/plantImages/scarlet-temple-3.webp'),
(3, '/plantImages/scarlet-temple-4.webp'),
(4, '/plantImages/brazilian-pennywort-1.webp'),
(4, '/plantImages/brazilian-pennywort-2.webp'),
(4, '/plantImages/brazilian-pennywort-3.webp');

INSERT INTO plant_reviews (plant_id, user_id, content, rating, title, username, email, date_created) 
VALUES
(1, 1, 'This plant goes really well in my tank. My Shrimp love grazing on this plant.', 5, 'Great hardy plant!', 'Isidro M.', 'isidrom@tankmates.org', '01/02/23'),
(1, 2, 'Great hiding place for my fry and shrimps', 5, 'Great addition to any tank!', 'Alexander G.', 'alexanderg@tankmates.org', '01/02/23'),
(1, 6, 'test', 2, 'test', 'test', 'test@tankmates.org', '01/02/23'),
(1, 6, 'test', 3, 'test', 'test', 'test@tankmates.org', '01/02/23'),
(1, 6, 'test', 4, 'test', 'test', 'test@tankmates.org', '01/02/23');
