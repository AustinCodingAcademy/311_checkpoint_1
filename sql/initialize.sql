use jmdb11; 

DROP TABLE IF EXISTS comicBookCharacters;

CREATE TABLE comicBookCharacters(
	id INT NOT NULL AUTO_INCREMENT,
    realName VARCHAR(50),
    intelligence INT NOT NULL,
    strength INT NOT NULL,
    alterEgo VARCHAR(50),
    occupation VARCHAR(100),
    birthPlace VARCHAR(100), 
    PRIMARY KEY (id)
); 
    

INSERT into comicbookcharacters
	(realName, intelligence, strength, alterEgo, occupation, birthPlace)
values
	('Bruce Banner', 75 , 88 , 'Hulk', 'nuclear physicist', 'Dayton, Ohio'),
    ('Jake Olsen', 80 , 99 , 'Thor', 'EMS technician', 'Asgard'),
    ('Peter Parker', 78, 25, 'Spiderman', 'photographer and adventurer', 'New York City, NY'),
    ('Tony Stark', '100', '95', 'Iron Man', 'inventor and insutrialist', 'Long Island, NY'),
    ('Hal Jordan', 95, 80, 'Green Lantern', 'pilot', 'Coast City, CA');