USE employees_trackerDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Natsu", "Dragnel", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lucy", "Heartfilia", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gray", "Fullbuster", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Juvia", "Lockster", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Vegeta", "Sayian", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nico", "Robin", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kirito", "Swordsman", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Asuna", "Maiden", 1, 2);

