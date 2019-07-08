DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    price DECIMAL (10,2),
    stock_quantity INTEGER,
    department_name VARCHAR (100),
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Camera", 70, 10, "Electronics");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Headphones", 20, 10, "Electronics");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Laptop", 1300, 10, "Electronics");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Jeans", 30, 10, "Clothing");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Sweater", 15, 10, "Clothing");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Shorts", 10, 10, "Clothing");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Skirt", 12, 10, "Clothing");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Tent", 200, 10, "Outdoors");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Cooler", 50, 10, "Outdoors");

INSERT INTO products (product_name, price, stock_quantity, department_name)
VALUES ("Backpack", 35, 10, "Outdoors");




