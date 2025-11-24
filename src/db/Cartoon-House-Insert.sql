-- USER LEVELS
INSERT INTO USER_LEVELS (level_name)
VALUES ('Admin'), ('Regular User');

-- USERS
INSERT INTO USERS (username, password, email, user_level_id)
VALUES
('admin_john', 'password123', 'admin.john@example.com', 1),
('mary_smith', 'testpass', 'mary.smith@example.com', 2),
('jason87', 'mypassword', 'jason87@example.com', 2),
('susan_admin', 'adminsecure', 'susan.admin@example.com', 1),
('regular_tom', 'tompw', 'tom.regular@example.com', 2);

-- CATEGORIES
INSERT INTO CATEGORIES (category_name)
VALUES
('Appetizers'), ('Main Dishes'), ('Desserts'), ('Drinks');

-- ALLERGENS
INSERT INTO ALLERGENS (nuts, dairy, gluten)
VALUES
(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,TRUE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,TRUE,FALSE),(FALSE,FALSE,TRUE),(FALSE,FALSE,FALSE),
(FALSE,FALSE,FALSE),(FALSE,FALSE,TRUE),(FALSE,TRUE,FALSE),
(FALSE,TRUE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),
(FALSE,FALSE,FALSE),(FALSE,FALSE,FALSE),(TRUE,FALSE,FALSE),
(FALSE,FALSE,FALSE);

-- INGREDIENTS
INSERT INTO INGREDIENTS (name, allergen_id)
VALUES
('Salt',1),('Pepper',2),('Olive Oil',3),('Butter',4),('Garlic',5),('Onion',6),
('Tomato',7),('Chicken Breast',8),('Beef',9),('Pork',10),('Shrimp',11),
('Eggs',12),('Milk',13),('Flour',14),('Sugar',15),('Rice',16),('Pasta',17),
('Cheddar Cheese',18),('Mozzarella Cheese',19),('Lettuce',20),('Carrots',21),
('Potatoes',22),('Mushrooms',23),('Basil',24),('Oregano',25),('Soy Sauce',26),
('Almonds',27),('Water',28);

-- FOOD
INSERT INTO FOOD (title, price, category_id) VALUES
('Fry Bits', 4.79, 1), ('Gray Stuff', 6.25, 1), ('Grubs', 5.10, 1),
('Rat Soup', 7.85, 1), ('Rice and Bacon', 6.99, 1), ('Spinach Puffs', 5.89, 1),
('Krabby Patty', 12.49, 2), ('Spaghetti', 10.25, 2), ('Naco', 9.75, 2),
('Ponyo Ramen', 11.60, 2), ('Popeye Spinach', 8.40, 2), ('Scooby Sandwich', 9.15, 2),
('Alice Cookies', 3.99, 3), ('Crème de la Crème', 6.55, 3), ('Hunny', 2.50, 3),
('Simpsons Donut', 3.75, 3), ('Together Breakfast', 7.10, 3), ('Ube Roll', 5.95, 3),
('Duff Beer', 6.00, 4), ('Juggernog', 4.85, 4), ('Kelpie Shake', 4.25, 4),
('MooMoo Milk', 3.30, 4), ('Nuka Cola', 2.99, 4), ('Skooma', 7.75, 4);

-- FOOD IMAGES
INSERT INTO FOOD_IMAGES (food_id, image_url) VALUES
(1,'../img/1frybits.png'),(2,'../img/1graystuff.png'),(3,'../img/1grubs.png'),
(4,'../img/1ratsoup.png'),(5,'../img/1riceandbacon.png'),(6,'../img/1spinachpuffs.png'),
(7,'../img/2krabbypatty.png'),(8,'../img/2latspaghetti.png'),(9,'../img/2naco.png'),
(10,'../img/2ponyoramen.png'),(11,'../img/2popeyespinach.png'),(12,'../img/2scoobysandwich.png'),
(13,'../img/3alicecookies.png'),(14,'../img/3cremedelacreme.png'),(15,'../img/3hunny.png'),
(16,'../img/3simpsonsdonut.png'),(17,'../img/3togetherbreakfast.png'),(18,'../img/3uberoll.png'),
(19,'../img/4duffbeer.png'),(20,'../img/4juggernog.png'),(21,'../img/4kelpshake.png'),
(22,'../img/4moomoomilk.png'),(23,'../img/4nukacola.png'),(24,'../img/4skooma.png');

-- FOOD_ING
-- 1 Appetizers
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 1, ingredient_id FROM INGREDIENTS WHERE name IN ('Potatoes', 'Olive Oil', 'Salt', 'Pepper');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 2, ingredient_id FROM INGREDIENTS WHERE name IN ('Butter', 'Milk', 'Flour', 'Sugar');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 3, ingredient_id FROM INGREDIENTS WHERE name IN ('Mushrooms', 'Salt', 'Pepper');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 4, ingredient_id FROM INGREDIENTS WHERE name IN ('Butter', 'Milk', 'Onion', 'Garlic', 'Mushrooms', 'Salt', 'Pepper', 'Almonds');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 5, ingredient_id FROM INGREDIENTS WHERE name IN ('Rice', 'Pork', 'Salt', 'Pepper', 'Olive Oil');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 6, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Butter', 'Eggs', 'Mozzarella Cheese', 'Basil', 'Oregano');

-- 2 Main Dishes
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 7, ingredient_id FROM INGREDIENTS WHERE name IN ('Beef', 'Flour', 'Lettuce', 'Tomato', 'Onion', 'Cheddar Cheese', 'Almonds');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 8, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Tomato', 'Olive Oil', 'Garlic', 'Basil', 'Oregano', 'Salt', 'Pepper');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 9, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Beef', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Almonds');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 10, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Eggs', 'Milk', 'Onion', 'Mushrooms', 'Soy Sauce');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 11, ingredient_id FROM INGREDIENTS WHERE name IN ('Lettuce', 'Olive Oil', 'Garlic', 'Salt', 'Pepper');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 12, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Onion', 'Butter');

-- 3 Desserts
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 13, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Sugar', 'Eggs', 'Butter');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 14, ingredient_id FROM INGREDIENTS WHERE name IN ('Milk', 'Butter', 'Sugar', 'Flour', 'Eggs');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 15, ingredient_id FROM INGREDIENTS WHERE name IN ('Sugar');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 16, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Sugar', 'Milk', 'Eggs', 'Butter');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 17, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Milk', 'Eggs', 'Butter');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 18, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour', 'Sugar', 'Milk', 'Eggs', 'Butter');

-- 4 Drinks
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 19, ingredient_id FROM INGREDIENTS WHERE name IN ('Flour');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 20, ingredient_id FROM INGREDIENTS WHERE name IN ('Milk', 'Sugar', 'Flour', 'Almonds');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 21, ingredient_id FROM INGREDIENTS WHERE name IN ('Sugar');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 22, ingredient_id FROM INGREDIENTS WHERE name IN ('Milk');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 23, ingredient_id FROM INGREDIENTS WHERE name IN ('Sugar', 'Water');
INSERT INTO FOOD_ING (food_id, ingredient_id)
SELECT 24, ingredient_id FROM INGREDIENTS WHERE name IN ('Sugar');

-- ORDERS
INSERT INTO ORDER_HEADER (user_id) VALUES (1), (2), (4);
INSERT INTO ORDER_DETAILS (order_id, food_id, quantity, total_price) VALUES
(1,1,2,9.58),(1,4,1,7.85),
(2,7,1,12.49),(2,12,1,9.15),(2,23,2,5.98),
(3,14,3,19.65),(3,19,2,12.00);