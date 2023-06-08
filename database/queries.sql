CREATE TABLE Employee (
    Id INT(11) NOT NULL AUTO_INCREMENT,
    Name VARCHAR(45) DEFAULT NULL,
    Salary decimal(5) DEFAULT NULL,
    PRIMARY KEY (Id)
);

INSERT INTO Employee VALUES 
    (1, 'Joe', 2000.40),
    (2, 'Bill', 4500.99),
    (3, 'Mary', 900.33),
    (4, 'Tony', 400.50);