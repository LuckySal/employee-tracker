INSERT INTO departments (name)
VALUES  ("Finance"),
        ("Marketing"),
        ("Software"),
        ("Medical"),
        ("Janitorial");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accountant", 45000, 1),
        ("Spokesperson", 69420, 2),
        ("Software Engineer", 4500, 3),
        ("Doctor", 80000, 4),
        ("Nurse", 50000, 4),
        ("Broom Operator", 40000, 5),
        ("Braggart", 25000, 2),
        ("Nap-Taker", 60000, 1);
       
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Adam", "Jensen", 3, null),
        ("Brenda", "Slacks", 1, 1),
        ("Cassidy", "McMahon", 2, 12),
        ("Dylan", "Hudson", 3, 15),
        ("Elanor", "Rigby", 4, 1),
        ("Frank", "Sheraton", 5, 12),
        ("Ginny", "Weaseley", 6, 15),
        ("Harper", "Collins", 7, 1),
        ("Indiana", "Jones", 8, 12),
        ("Joseph", "Krakowski", 1, 15),
        ("Karen", "Michaels", 2, 1),
        ("Leonardo", "DiCaprio", 1, null),
        ("Maria", "Costanza", 3, 12),
        ("Nicole", "Darcangelo", 4, 15),
        ("Owen", "Wilson", 2, null);