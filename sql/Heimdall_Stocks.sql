-- ************************************
-- Module Stocks
-- Created by LUDO
-- Description :
-- Module to manage the Stocks
-- ************************************


-- ++++++++++++++++++++++++++++++++++++
-- Table Locations
-- Description :
-- 	Lieux du stock
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Locations (
	-- Clef unique de la table locations
	Id_Locations integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Le nom du lieux
	Nom varchar(64)  NOT NULL
);
COMMENT ON TABLE xxx.Locations IS 'Lieux du stock';
COMMENT ON COLUMN xxx.Locations.Id_Locations IS 'Clef unique de la table locations';
COMMENT ON COLUMN xxx.Locations.Nom IS 'Le nom du lieux';


-- ++++++++++++++++++++++++++++++++++++
-- Table Stocks
-- Description :
-- 	Notre table pour gérer les tables entre la location et les publications
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Stocks (
	-- Notre clef unique
	Id_Stocks integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Le lieux du stock
	Id_Locations integer REFERENCES xxx.Locations (Id_Locations) ON DELETE CASCADE NOT NULL,
	-- La publication
	Id_Publications integer REFERENCES xxx.Publications (Id_Publications) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Stocks IS 'Notre table pour gérer les tables entre la location et les publications';
COMMENT ON COLUMN xxx.Stocks.Id_Stocks IS 'Notre clef unique';
COMMENT ON COLUMN xxx.Stocks.Id_Locations IS 'Le lieux du stock';
COMMENT ON COLUMN xxx.Stocks.Id_Publications IS 'La publication';


-- ++++++++++++++++++++++++++++++++++++
-- Table Mouvements
-- Description :
-- 	La table qui note les mouvements
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Mouvements (
	-- Clef de la table
	Id_Mouvements integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Hour of effective time
	Effectif timestamp  NOT NULL,
	-- Le stock du mouvement
	Id_Stocks integer UNIQUE REFERENCES xxx.Stocks (Id_Stocks) ON DELETE CASCADE NOT NULL,
	-- La quantite du mouvement
	Quantite integer  NOT NULL,
	-- Motif du mouvement
	Motif varchar(256)  NOT NULL,
	-- Clef de l'operation
	Clef_Operation varchar(64)  NOT NULL,
	-- Responsable du mouvement
	Id_Contacts integer UNIQUE REFERENCES xxx.Contacts (Id_Contacts) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Mouvements IS 'La table qui note les mouvements';
COMMENT ON COLUMN xxx.Mouvements.Id_Mouvements IS 'Clef de la table';
COMMENT ON COLUMN xxx.Mouvements.Effectif IS 'Hour of effective time';
COMMENT ON COLUMN xxx.Mouvements.Id_Stocks IS 'Le stock du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Quantite IS 'La quantite du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Motif IS 'Motif du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Clef_Operation IS 'Clef de l''operation';
COMMENT ON COLUMN xxx.Mouvements.Id_Contacts IS 'Responsable du mouvement';