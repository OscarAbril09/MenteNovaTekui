CREATE DATABASE IF NOT EXISTS mentenova;

CREATE TABLE doctors(
    doc_id INT(11)  NOT NULL AUTO_INCREMENT,
    doc_name VARCHAR(50) NOT NULL ,
    doc_last_name VARCHAR(50) NOT NULL,
    doc_password  TEXT NOT NULL,
    doc_id_company VARCHAR(4) NOT NULL,
    doc_birthday DATE NOT NULL,
    PRIMARY KEY(doc_id)
    
);

CREATE TABLE patients (
    pat_id int(11) NOT NULL AUTO_INCREMENT,
    pat_name VARCHAR(50) NOT NULL,
    pat_last_name VARCHAR(50) NOT NULL,
    pat_birthday DATE  NOT NULL,
    pat_phone VARCHAR(14) NOT NULL,
    pat_password VARCHAR(20) NOT NULL,
    PRIMARY KEY(pat_id)
);

CREATE TABLE treatments(
    tre_id INT(11) NOT NULL AUTO_INCREMENT,
    tre_name_medicine VARCHAR(40) NOT NULL,
    tre_time_medicine INT(3) NOT NULL,
    tre_description VARCHAR(255) NOT NULL,
    tre_date_register TIMESTAMP,
    tre_start_date  DATE NOT NULL,
    tre_end_date DATE NOT NULL,
    FK_tre_pat_id int(11) NOT NULL,
    FK_tre_doc_id int(11) NOT NULL,
    PRIMARY KEY(tre_id),
    FOREIGN KEY (FK_tre_pat_id) REFERENCES patients(pat_id),
    FOREIGN KEY (FK_tre_doc_id) REFERENCES doctors(doc_id)
);

CREATE TABLE symptons_report(
    srep_id INT NOT NULL AUTO_INCREMENT,
    srep_symptons JSON, 
    FK_srep_pat_id INT(11),
    PRIMARY KEY(srep_id),
    FOREIGN KEY (FK_srep_pat_id) REFERENCES patients(pat_id)
);

CREATE TABLE treament_reports (
    trep_id INT(11) NOT NULL AUTO_INCREMENT,
    trep_date DATETIME  NOT NULL,
    trep_success BOOLEAN NOT NULL,
    FK_trep_tre_id INT(11),
    FK_trep_pat_id INT(11),
    PRIMARY KEY(trep_id),
    FOREIGN KEY (FK_trep_tre_id) REFERENCES treatments(tre_id),
    FOREIGN KEY (FK_trep_pat_id) REFERENCES patients(pat_id),
);

CREATE TABLE symptons (
    sym_id INT NOT NULL AUTO_INCREMENT,
    sym_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (sym_id)
    );



INSERT INTO doctors VALUES 
(1, 'Juan', 'Villan', '12jialod', '123' ,'2022/04/03'),
(2, 'Luis', 'Villan', '12jiadaslod', '123' ,'2022/04/03'),
(3, 'Carlos', 'Villan', '12jsadialod', '123' ,'2022/04/03');

INSERT INTO patients VALUES
(1,'Juan','Jurado','2022/04/03','12322321','hola123'),
(2,'Juan','Jurado','2022/04/03','12322321','hola123');
(3,'Luis','Jurado','2022/04/03','12322321','hola222'),
(4,'Edgra','Jurado','2022/04/03','12322321','hola234');
