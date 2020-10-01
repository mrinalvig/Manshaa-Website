DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

USE products;

CREATE TABLE men(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(1000) NOT NULL,
  images VARCHAR(1000) NOT NULL
);

CREATE TABLE women(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(1000) NOT NULL,
  images VARCHAR(1000) NOT NULL
);

CREATE TABLE jewelry(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(1000) NOT NULL,
  images VARCHAR(1000) NOT NULL
);

CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
