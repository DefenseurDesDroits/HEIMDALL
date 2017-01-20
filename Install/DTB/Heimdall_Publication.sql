-- ************************************
-- Module Publications
-- Created by LUDO
-- Description :
-- Module de gestion des publications !
-- ************************************


-- ++++++++++++++++++++++++++++++++++++
-- Table Domaines
-- Description :
-- 	Table gérant les domaines des publications
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Domaines (
	-- Identifiant de la table
	Id_Domaines integer UNIQUE REFERENCES xxx.Noeuds (Id_Noeuds) ON DELETE CASCADE NOT NULL,
	-- Nom du domaine
	Nom varchar(32) UNIQUE NOT NULL,
	-- Description du domaine de publication
	Description varchar(512)  NOT NULL
);
COMMENT ON TABLE xxx.Domaines IS 'Table gérant les domaines des publications';
COMMENT ON COLUMN xxx.Domaines.Id_Domaines IS 'Identifiant de la table';
COMMENT ON COLUMN xxx.Domaines.Nom IS 'Nom du domaine';
COMMENT ON COLUMN xxx.Domaines.Description IS 'Description du domaine de publication';


-- ++++++++++++++++++++++++++++++++++++
-- Table Publications
-- Description :
-- 	Tables des publications disponibles dans la base de données
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Publications (
	-- Clef unique de la table publication
	Id_Publications integer UNIQUE REFERENCES xxx.Noeuds (Id_Noeuds) ON DELETE CASCADE NOT NULL,
	-- Nom de la publication
	Nom varchar(64)  NOT NULL,
	-- Domaine de la publication
	Id_Domaines integer REFERENCES xxx.Domaines (Id_Domaines) ON DELETE CASCADE NOT NULL,
	-- Date de création de la publication
	Creation timestamp  NOT NULL,
	-- Date de mise à jour de la publication
	Maj timestamp  NOT NULL,
	-- La publication est-elle dématerialisée
	Dematerialisee boolean  NOT NULL
);
COMMENT ON TABLE xxx.Publications IS 'Tables des publications disponibles dans la base de données';
COMMENT ON COLUMN xxx.Publications.Id_Publications IS 'Clef unique de la table publication';
COMMENT ON COLUMN xxx.Publications.Nom IS 'Nom de la publication';
COMMENT ON COLUMN xxx.Publications.Id_Domaines IS 'Domaine de la publication';
COMMENT ON COLUMN xxx.Publications.Creation IS 'Date de création de la publication';
COMMENT ON COLUMN xxx.Publications.Maj IS 'Date de mise à jour de la publication';
COMMENT ON COLUMN xxx.Publications.Dematerialisee IS 'La publication est-elle dématerialisée';


-- ++++++++++++++++++++++++++++++++++++
-- Table Fichiers
-- Description :
-- 	Table des fichiers physiques sur le serveur
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Fichiers (
	-- Clef primaire des fichiers
	Id_Fichiers integer UNIQUE REFERENCES xxx.Noeuds (Id_Noeuds) ON DELETE CASCADE NOT NULL,
	-- Clef étrangère sur les publications
	Id_Publications integer  NOT NULL,
	-- Chemin du fichier sur le serveur
	Path varchar(512)  NOT NULL,
	-- Taille du fichier sur le serveur
	Filesize integer  NOT NULL,
	-- Checksum du fichier
	Checksum varchar(1024)  NOT NULL,
	-- Version du fichier
	Version varchar(32)  NOT NULL
);
COMMENT ON TABLE xxx.Fichiers IS 'Table des fichiers physiques sur le serveur';
COMMENT ON COLUMN xxx.Fichiers.Id_Fichiers IS 'Clef primaire des fichiers';
COMMENT ON COLUMN xxx.Fichiers.Id_Publications IS 'Clef étrangère sur les publications';
COMMENT ON COLUMN xxx.Fichiers.Path IS 'Chemin du fichier sur le serveur';
COMMENT ON COLUMN xxx.Fichiers.Filesize IS 'Taille du fichier sur le serveur';
COMMENT ON COLUMN xxx.Fichiers.Checksum IS 'Checksum du fichier';
COMMENT ON COLUMN xxx.Fichiers.Version IS 'Version du fichier';