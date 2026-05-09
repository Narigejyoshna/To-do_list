CREATE DATABASE todoapp;

USE todoapp;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(255),
  title VARCHAR(255),
  description TEXT
);
