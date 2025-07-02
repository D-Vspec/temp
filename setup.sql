CREATE DATABASE loan_application_db;
USE loan_application_db;

/* add phone number , add col for acc/rej*/

CREATE TABLE new_applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    date_of_birth DATE NOT NULL,
    annual_income DECIMAL(15, 2) NOT NULL,
    employment_status ENUM('full-time', 'part-time', 'self-employed', 'unemployed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE loan_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cif INT NOT NULL,
    loan_amount DECIMAL(15, 2) NOT NULL,
    loan_purpose ENUM('home', 'car', 'education', 'business', 'personal') NOT NULL,
    application_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (applicant_id) REFERENCES applicants(id)
);