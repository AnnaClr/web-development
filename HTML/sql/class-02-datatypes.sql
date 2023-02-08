USE school;
DROP TABLE Cursos;
CREATE TABLE Cursos (
   ID TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
   Nome VARCHAR(255) NOT NULL,
   Horas TINYINT UNSIGNED NOT NULL,
   
   PRIMARY KEY(ID)
);

INSERT INTO Cursos (Nome, Horas) VALUES 
('Programador Web', 240),
('Informatica para o mundo do trabalho', 160),
('Ferramentas Digitais', 60);

SELECT * FROM Cursos;

DROP TABLE Estudantes;
CREATE TABLE Estudantes(
   ID SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
   Nome VARCHAR(255) NOT NULL,
   Rua VARCHAR(255) NOT NULL,
   Bairro VARCHAR(255) NOT NULL,
   Cidade VARCHAR(255) NOT NULL,
   Curso TINYINT UNSIGNED NOT NULL,
   PRIMARY KEY(ID),
   FOREIGN KEY(Curso) REFERENCES Cursos(ID)
);

DESCRIBE Cursos;

INSERT INTO Estudantes (
   Nome,
   Rua,
   Bairro,
   Cidade,
   Curso
) VALUES 
('Emanuel', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Mario', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Samila', 'Rua A', 'Bairro B', 'Cidade C', 2)
;

SELECT Estudantes.Nome, Cursos.Nome FROM Estudantes
INNER JOIN Cursos ON Estudantes.Curso = Cursos.ID;



