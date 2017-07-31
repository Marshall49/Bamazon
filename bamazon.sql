USE Bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  shoe VARCHAR(45) NULL,
  Department VARCHAR(20) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Nike", "ShoeDepo", 95.50, 100);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Adidas", "ShoeDepo", 80.25, 120);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("New Balance", "ShoeDepo", 76.78, 75);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Reebok", "ShoeDepo", 82.75, 80);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Puma", "ShoeDepo", 68.67, 50);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Asics", "ShoeDepo", 59.67, 65);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Gucci", "ShoeDepo", 98.73, 70);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Air Jordans", "ShoeDepo", 88.23, 45);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Saucony", "ShoeDepo", 62.87, 55);

INSERT INTO products (shoe, Department, price, quantity)
VALUES ("Timbaland", "ShoeDepo", 78.34, 40);
