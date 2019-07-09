DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
    item_id INTEGER NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (100),
    price DECIMAL
    (10,2),
    stock_quantity INTEGER,
    department_name VARCHAR
    (100),
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, price, stock_quantity, department_name)
    VALUES
        ("Camera", 70, 10, "Electronics"),
        ("Headphones", 20, 10, "Electronics"),
        ("Laptop", 1300, 10, "Electronics"),
        ("Jeans", 30, 10, "Clothing"),
        ("Sweater", 15, 10, "Clothing"),
        ("Shorts", 10, 10, "Clothing"),
        ("Skirt", 12, 10, "Clothing"),
        ("Tent", 200, 10, "Outdoors"),
        ("Cooler", 50, 10, "Outdoors"),
        ("Backpack", 35, 10, "Outdoors");

    SELECT *
    FROM products;