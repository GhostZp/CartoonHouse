
DROP DATABASE IF EXISTS CartoonHouse;
CREATE DATABASE CartoonHouse;
USE CartoonHouse;

-- Creates user level table that stores user levels
CREATE TABLE USER_LEVELS (
    level_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    level_name VARCHAR(100) UNIQUE NOT NULL
);

-- Creates users table that is used to store data about users
CREATE TABLE USERS (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_level_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_level_id) REFERENCES USER_LEVELS (level_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates categories table that is used to store food categories
CREATE TABLE CATEGORIES (
    category_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(120) UNIQUE NOT NULL
);

-- Creates allergens table that is used to store data about allergens in food
CREATE TABLE ALLERGENS (
    allergen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nuts BOOLEAN DEFAULT FALSE,
    dairy BOOLEAN DEFAULT FALSE,
    gluten BOOLEAN DEFAULT FALSE
);

-- Creates ingredients table that is used to store all the ingredients of foods
CREATE TABLE INGREDIENTS (
    ingredient_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) UNIQUE NOT NULL,
    allergen_id INT,
    FOREIGN KEY (allergen_id) REFERENCES ALLERGENS (allergen_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- Creates food table that is used to store all food items
CREATE TABLE FOOD (
    food_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) UNIQUE NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES (category_id)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- Creates food images table that is used to store food images
CREATE TABLE FOOD_IMAGES (
    image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    food_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates food ingredietns table that is used to connect ingredients and food
CREATE TABLE FOOD_ING (
    food_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY (food_id, ingredient_id),
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS (ingredient_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates orders main table that is used to connect users and orders
CREATE TABLE ORDER_HEADER (
    order_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates orders table that is used to store data about user orders
CREATE TABLE ORDER_DETAILS (
    order_detail_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(8,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDER_HEADER (order_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates campaign table that is used to store data about food campaigns for users
CREATE TABLE CAMPAIGN (
    food_id INT NOT NULL,
    user_id INT NOT NULL,
    discounted_price DECIMAL(8,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (food_id, user_id),
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates popularity table that is used to store data about food popularity 
CREATE TABLE POPULARITY (
    popularity_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    food_id INT NOT NULL,
    popularity_points INT NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creates rating table that is used to store data about ratings for food given by users
CREATE TABLE RATING (
    rating_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    food_id INT NOT NULL,
    user_id INT NOT NULL,
    rating_score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (food_id) REFERENCES FOOD (food_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE (user_id, food_id)
);
