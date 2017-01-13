-- #####################################
-- Ludo_DTB_CODE_MAKER_SQL Version 0.4.6.1
-- Created By Ludowic EMMANUEL
-- Automatique generation made on 06/01/2017 00:00:00
-- #####################################



-- ************************************
-- Module Contacts
-- Created by Ludo
-- Description :
-- Genereted with Ludo Library
-- ************************************


-- ++++++++++++++++++++++++++++++++++++
-- Table Accreditations
-- Description :
-- 	Table des accréditations sur les items
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Accreditations (
	-- Identifiant de la table des accrédiations
	Id_Accreditations serial PRIMARY KEY NOT NULL,
	-- Nom de l'accrédiation
	Nom varchar(32) UNIQUE NOT NULL,
	-- Niveau de l'accréditation
	Niveau integer  NOT NULL
);
COMMENT ON TABLE xxx.Accreditations IS 'Table des accréditations sur les items';
COMMENT ON COLUMN xxx.Accreditations.Id_Accreditations IS 'Identifiant de la table des accrédiations';
COMMENT ON COLUMN xxx.Accreditations.Nom IS 'Nom de l''accrédiation';
COMMENT ON COLUMN xxx.Accreditations.Niveau IS 'Niveau de l''accréditation';


-- ++++++++++++++++++++++++++++++++++++
-- Table Item_Types
-- Description :
-- 	Table des types d'items
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Item_Types (
	-- Identité de la table
	Id_item_types serial PRIMARY KEY NOT NULL,
	-- Nom de l'item
	Nom varchar(32) UNIQUE NOT NULL
);
COMMENT ON TABLE xxx.Item_Types IS 'Table des types d''items';
COMMENT ON COLUMN xxx.Item_Types.Id_item_types IS 'Identité de la table';
COMMENT ON COLUMN xxx.Item_Types.Nom IS 'Nom de l''item';


-- ++++++++++++++++++++++++++++++++++++
-- Table Items
-- Description :
-- 	Table de tous les items avec des droits
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Items (
	-- Identité de la table
	Id_Items serial PRIMARY KEY NOT NULL,
	-- Groupes possedant l'item
	Id_groups_json varchar(1024)  NOT NULL,
	-- Clef étrangère sur le niveau d'accreditation
	Id_Accreditations_Item integer REFERENCES xxx.Accreditations (Id_Accreditations) ON DELETE CASCADE NULL,
	-- date de dernière modification
	Modifie timestamp  NOT NULL,
	-- Id sur l'item créateur de cet item
	Id_Creator integer  NOT NULL DEFAULT 0,
	-- Users allowed to acces to the object
	Id_users_json varchar(1024)  NOT NULL
);
COMMENT ON TABLE xxx.Items IS 'Table de tous les items avec des droits';
COMMENT ON COLUMN xxx.Items.Id_Items IS 'Identité de la table';
COMMENT ON COLUMN xxx.Items.Id_groups_json IS 'Groupes possedant l''item';
COMMENT ON COLUMN xxx.Items.Id_Accreditations_Item IS 'Clef étrangère sur le niveau d''accreditation';
COMMENT ON COLUMN xxx.Items.Modifie IS 'date de dernière modification';
COMMENT ON COLUMN xxx.Items.Id_Creator IS 'Id sur l''item créateur de cet item';
COMMENT ON COLUMN xxx.Items.Id_users_json IS 'Users allowed to acces to the object';


-- ++++++++++++++++++++++++++++++++++++
-- Table Noeuds
-- Description :
-- 	Table pour gérer les noeuds
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Noeuds (
	-- Identité de la table
	Id_Noeuds integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- identité de la table sur le noeuds parent
	Id_Noeuds_Parent integer REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Noeuds IS 'Table pour gérer les noeuds';
COMMENT ON COLUMN xxx.Noeuds.Id_Noeuds IS 'Identité de la table';
COMMENT ON COLUMN xxx.Noeuds.Id_Noeuds_Parent IS 'identité de la table sur le noeuds parent';


-- ++++++++++++++++++++++++++++++++++++
-- Table Notes
-- Description :
-- 	Table des notes sur les items
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Notes (
	-- Identifiant sur la tables
	Id_Notes integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Titre de la note
	Titre varchar(64)  NOT NULL,
	-- Urgente la note ?
	Urgente boolean  NOT NULL,
	-- Le texte de la note
	Texte varchar(512)  NOT NULL,
	-- Objet sur lequel est liée la note
	Id_Items_Linked integer REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Notes IS 'Table des notes sur les items';
COMMENT ON COLUMN xxx.Notes.Id_Notes IS 'Identifiant sur la tables';
COMMENT ON COLUMN xxx.Notes.Titre IS 'Titre de la note';
COMMENT ON COLUMN xxx.Notes.Urgente IS 'Urgente la note ?';
COMMENT ON COLUMN xxx.Notes.Texte IS 'Le texte de la note';
COMMENT ON COLUMN xxx.Notes.Id_Items_Linked IS 'Objet sur lequel est liée la note';


-- ++++++++++++++++++++++++++++++++++++
-- Table Contact_Types
-- Description :
-- 	Table des types de contact
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Contact_Types (
	-- Identité de la table
	Id_Contact_Types serial PRIMARY KEY NOT NULL,
	-- Type du contact
	Nom varchar(64) UNIQUE NOT NULL
);
COMMENT ON TABLE xxx.Contact_Types IS 'Table des types de contact';
COMMENT ON COLUMN xxx.Contact_Types.Id_Contact_Types IS 'Identité de la table';
COMMENT ON COLUMN xxx.Contact_Types.Nom IS 'Type du contact';


-- ++++++++++++++++++++++++++++++++++++
-- Table Titres
-- Description :
-- 	Tables des titres des contacts
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Titres (
	-- Identité de la table des titres
	Id_Titres serial PRIMARY KEY NOT NULL,
	-- Nom des titres
	Nom varchar(64)  NOT NULL,
	-- Rang du titre
	Rang integer  NOT NULL
);
COMMENT ON TABLE xxx.Titres IS 'Tables des titres des contacts';
COMMENT ON COLUMN xxx.Titres.Id_Titres IS 'Identité de la table des titres';
COMMENT ON COLUMN xxx.Titres.Nom IS 'Nom des titres';
COMMENT ON COLUMN xxx.Titres.Rang IS 'Rang du titre';


-- ++++++++++++++++++++++++++++++++++++
-- Table Civilites
-- Description :
-- 	Table des civilités des contacts
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Civilites (
	-- Identité de nde la table civilité
	Id_Civilites serial PRIMARY KEY NOT NULL,
	-- Nom de la civilité
	Nom varchar(32) UNIQUE NOT NULL,
	-- Abréviation
	Abr varchar(8)  NOT NULL
);
COMMENT ON TABLE xxx.Civilites IS 'Table des civilités des contacts';
COMMENT ON COLUMN xxx.Civilites.Id_Civilites IS 'Identité de nde la table civilité';
COMMENT ON COLUMN xxx.Civilites.Nom IS 'Nom de la civilité';
COMMENT ON COLUMN xxx.Civilites.Abr IS 'Abréviation';


-- ++++++++++++++++++++++++++++++++++++
-- Table Contacts
-- Description :
-- 	Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Contacts (
	-- Identité de la table contact, héritée de celle noeuds
	Id_Contacts integer UNIQUE REFERENCES xxx.Noeuds (Id_Noeuds) ON DELETE CASCADE NOT NULL,
	-- Prénom du contact
	Prenom varchar(32)  NOT NULL,
	-- Nom du contact
	Nom varchar(256)  NOT NULL,
	-- Clef étrangère sur la table civilité pour noter le contact
	Id_Civilites integer REFERENCES xxx.Civilites (Id_Civilites) ON DELETE CASCADE NULL,
	-- Clef étrangère sur les titres pour noter le titre du contact
	Id_Titres integer REFERENCES xxx.Titres (Id_Titres) ON DELETE CASCADE NULL,
	-- Clef étrangère sur le contact pour obtenir le type du contact
	Id_Contact_Types integer REFERENCES xxx.Contact_Types (Id_Contact_Types) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Contacts IS 'Table des contacts. Hérite de celle Noeuds pour gérer la notion de hiérarchie';
COMMENT ON COLUMN xxx.Contacts.Id_Contacts IS 'Identité de la table contact, héritée de celle noeuds';
COMMENT ON COLUMN xxx.Contacts.Prenom IS 'Prénom du contact';
COMMENT ON COLUMN xxx.Contacts.Nom IS 'Nom du contact';
COMMENT ON COLUMN xxx.Contacts.Id_Civilites IS 'Clef étrangère sur la table civilité pour noter le contact';
COMMENT ON COLUMN xxx.Contacts.Id_Titres IS 'Clef étrangère sur les titres pour noter le titre du contact';
COMMENT ON COLUMN xxx.Contacts.Id_Contact_Types IS 'Clef étrangère sur le contact pour obtenir le type du contact';


-- ++++++++++++++++++++++++++++++++++++
-- Table Langues
-- Description :
-- 	Tables des langues
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Langues (
	-- Identité de la table
	Id_Langues serial PRIMARY KEY NOT NULL,
	-- Nom du pays
	Nom varchar(64) UNIQUE NOT NULL
);
COMMENT ON TABLE xxx.Langues IS 'Tables des langues';
COMMENT ON COLUMN xxx.Langues.Id_Langues IS 'Identité de la table';
COMMENT ON COLUMN xxx.Langues.Nom IS 'Nom du pays';


-- ++++++++++++++++++++++++++++++++++++
-- Table Pays
-- Description :
-- 	Tables des pays
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Pays (
	-- Identifiant de la table
	Id_Pays serial PRIMARY KEY NOT NULL,
	-- Code du pays
	Code varchar(8)  NOT NULL,
	-- Code alpha du pays en 2 caractères
	Alpha2 varchar(8)  NOT NULL,
	-- Code alpha du pays en 3 caractères
	Alpha3 varchar(8)  NOT NULL,
	-- Nom du pays
	Nom varchar(64) UNIQUE NOT NULL,
	-- Liste des langues du pays
	Id_Langues_Json varchar   NOT NULL
);
COMMENT ON TABLE xxx.Pays IS 'Tables des pays';
COMMENT ON COLUMN xxx.Pays.Id_Pays IS 'Identifiant de la table';
COMMENT ON COLUMN xxx.Pays.Code IS 'Code du pays';
COMMENT ON COLUMN xxx.Pays.Alpha2 IS 'Code alpha du pays en 2 caractères';
COMMENT ON COLUMN xxx.Pays.Alpha3 IS 'Code alpha du pays en 3 caractères';
COMMENT ON COLUMN xxx.Pays.Nom IS 'Nom du pays';
COMMENT ON COLUMN xxx.Pays.Id_Langues_Json IS 'Liste des langues du pays';


-- ++++++++++++++++++++++++++++++++++++
-- Table Contact_Infos
-- Description :
-- 	Table des informations liées au contact
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Contact_Infos (
	-- Identifiant sur la table contact
	Id_Contact_Infos integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Clef étrangère sur la contact
	Id_Contacts integer REFERENCES xxx.Contacts (Id_Contacts) ON DELETE CASCADE NOT NULL,
	-- Fonction du contact
	Fonction varchar(128)  NOT NULL,
	-- Clef étrangère sur la table langue. Langue du contact pour cette fonction.
	Id_Langues integer  NOT NULL
);
COMMENT ON TABLE xxx.Contact_Infos IS 'Table des informations liées au contact';
COMMENT ON COLUMN xxx.Contact_Infos.Id_Contact_Infos IS 'Identifiant sur la table contact';
COMMENT ON COLUMN xxx.Contact_Infos.Id_Contacts IS 'Clef étrangère sur la contact';
COMMENT ON COLUMN xxx.Contact_Infos.Fonction IS 'Fonction du contact';
COMMENT ON COLUMN xxx.Contact_Infos.Id_Langues IS 'Clef étrangère sur la table langue. Langue du contact pour cette fonction.';


-- ++++++++++++++++++++++++++++++++++++
-- Table Infos
-- Description :
-- 	Table des adresses. Hérité de la classe item.
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Infos (
	-- Identifiant des adresses
	Id_Infos integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Première partie de l'adresse
	Adr1 varchar(256)  NOT NULL,
	-- Deuxième partie de l'adresse
	Adr2 varchar(256)  NOT NULL,
	-- Troisième et dernière partie de l'adresse
	Adr3 varchar(256)  NOT NULL,
	-- Le Code postal
	CP varchar(8)  NOT NULL,
	-- Le code cedex
	Cedex varchar(8)  NOT NULL,
	-- La Ville
	Ville varchar(64)  NOT NULL,
	-- Téléphone numéro 1
	Telephone1 varchar(16)  NOT NULL,
	-- Courriel numéro 1
	Courriel1 varchar(64)  NOT NULL,
	-- Téléphone numéro 2
	Telephone2 varchar(16)  NOT NULL,
	-- Courriel numéro 2
	Courriel2 varchar(64)  NOT NULL,
	-- Adresse du site web
	Site varchar(64)  NOT NULL,
	-- Clef étrangère sur la table pays. C'est le pays de l'adresse.
	Id_Pays integer REFERENCES xxx.Pays (Id_Pays) ON DELETE CASCADE NOT NULL,
	-- Clef étrangère sur la table Contact_Infos Le contact info propriétaire de cette adresse
	Id_Contact_Infos integer REFERENCES xxx.Contact_Infos (Id_Contact_Infos) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Infos IS 'Table des adresses. Hérité de la classe item.';
COMMENT ON COLUMN xxx.Infos.Id_Infos IS 'Identifiant des adresses';
COMMENT ON COLUMN xxx.Infos.Adr1 IS 'Première partie de l''adresse';
COMMENT ON COLUMN xxx.Infos.Adr2 IS 'Deuxième partie de l''adresse';
COMMENT ON COLUMN xxx.Infos.Adr3 IS 'Troisième et dernière partie de l''adresse';
COMMENT ON COLUMN xxx.Infos.CP IS 'Le Code postal';
COMMENT ON COLUMN xxx.Infos.Cedex IS 'Le code cedex';
COMMENT ON COLUMN xxx.Infos.Ville IS 'La Ville';
COMMENT ON COLUMN xxx.Infos.Telephone1 IS 'Téléphone numéro 1';
COMMENT ON COLUMN xxx.Infos.Courriel1 IS 'Courriel numéro 1';
COMMENT ON COLUMN xxx.Infos.Telephone2 IS 'Téléphone numéro 2';
COMMENT ON COLUMN xxx.Infos.Courriel2 IS 'Courriel numéro 2';
COMMENT ON COLUMN xxx.Infos.Site IS 'Adresse du site web';
COMMENT ON COLUMN xxx.Infos.Id_Pays IS 'Clef étrangère sur la table pays. C''est le pays de l''adresse.';
COMMENT ON COLUMN xxx.Infos.Id_Contact_Infos IS 'Clef étrangère sur la table Contact_Infos Le contact info propriétaire de cette adresse';


-- ++++++++++++++++++++++++++++++++++++
-- Table Organisation_Types
-- Description :
-- 	Tables des différants type d'organisations possibles
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Organisation_Types (
	-- Identifiant de la table en Auto-Incrément
	Id_Organisation_Types serial PRIMARY KEY NOT NULL,
	-- Nom du type d'organisation
	Nom varchar(32)  NOT NULL
);
COMMENT ON TABLE xxx.Organisation_Types IS 'Tables des différants type d''organisations possibles';
COMMENT ON COLUMN xxx.Organisation_Types.Id_Organisation_Types IS 'Identifiant de la table en Auto-Incrément';
COMMENT ON COLUMN xxx.Organisation_Types.Nom IS 'Nom du type d''organisation';


-- ++++++++++++++++++++++++++++++++++++
-- Table Organisations
-- Description :
-- 	Table des organisations. héritant de celle des contacts
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Organisations (
	-- Identifiant hérité de la table Contacts
	Id_Organisations integer UNIQUE REFERENCES xxx.Contacts (Id_Contacts) ON DELETE CASCADE NOT NULL,
	-- Clef étrangère sur la table Organistion_Types. Type de l'organisation
	Id_Organisation_Type integer REFERENCES xxx.Organisation_Types (Id_Organisation_Types) ON DELETE CASCADE NOT NULL,
	-- New Columns Created with Ludo Library
	Acronyme varchar(16)  NOT NULL
);
COMMENT ON TABLE xxx.Organisations IS 'Table des organisations. héritant de celle des contacts';
COMMENT ON COLUMN xxx.Organisations.Id_Organisations IS 'Identifiant hérité de la table Contacts';
COMMENT ON COLUMN xxx.Organisations.Id_Organisation_Type IS 'Clef étrangère sur la table Organistion_Types. Type de l''organisation';
COMMENT ON COLUMN xxx.Organisations.Acronyme IS 'New Columns Created with Ludo Library';


-- ++++++++++++++++++++++++++++++++++++
-- Table Users
-- Description :
-- 	Table des utilisateurs, héritant de celle des contacts
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Users (
	-- Identifiant de la table hérité de la table contact
	Id_Users integer UNIQUE REFERENCES xxx.Contacts (Id_Contacts) ON DELETE CASCADE NOT NULL,
	-- Pseudo de l'utilisateur
	Pseudo varchar(32) UNIQUE NOT NULL,
	-- Json des différantes accréditations
	Id_Accreditations_Exp_Json varchar   NOT NULL
);
COMMENT ON TABLE xxx.Users IS 'Table des utilisateurs, héritant de celle des contacts';
COMMENT ON COLUMN xxx.Users.Id_Users IS 'Identifiant de la table hérité de la table contact';
COMMENT ON COLUMN xxx.Users.Pseudo IS 'Pseudo de l''utilisateur';
COMMENT ON COLUMN xxx.Users.Id_Accreditations_Exp_Json IS 'Json des différantes accréditations';


-- ++++++++++++++++++++++++++++++++++++
-- Table Notifications
-- Description :
-- 	Tables des notifications utilisateurs
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Notifications (
	-- Identifiant de la table
	Id_Notifications serial PRIMARY KEY NOT NULL,
	-- Message de la notification
	Msg varchar(256)  NOT NULL,
	-- Clef étrangère sur la table User. L'auteur de la notification.
	Id_Auteur integer REFERENCES xxx.Users (Id_Users) ON DELETE CASCADE NOT NULL,
	-- Clef étrangère sur la table User. Le destiantaire de la notification.
	Id_Destinataire integer REFERENCES xxx.Users (Id_Users) ON DELETE CASCADE NOT NULL
);
COMMENT ON TABLE xxx.Notifications IS 'Tables des notifications utilisateurs';
COMMENT ON COLUMN xxx.Notifications.Id_Notifications IS 'Identifiant de la table';
COMMENT ON COLUMN xxx.Notifications.Msg IS 'Message de la notification';
COMMENT ON COLUMN xxx.Notifications.Id_Auteur IS 'Clef étrangère sur la table User. L''auteur de la notification.';
COMMENT ON COLUMN xxx.Notifications.Id_Destinataire IS 'Clef étrangère sur la table User. Le destiantaire de la notification.';


-- ++++++++++++++++++++++++++++++++++++
-- Table Groups
-- Description :
-- 	Table des groups héritant de la table Contacts
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Groups (
	-- Identifiant de la table Groups. Clef étrangère sur la table contact
	Id_Groups integer UNIQUE REFERENCES xxx.Contacts (Id_Contacts) ON DELETE CASCADE NOT NULL,
	-- Json, liste des utilisateurs
	UGrp_Json varchar   NOT NULL,
	-- Ce groupe héberge t'il des fichiers ?
	Fichiers boolean  NOT NULL,
	-- Nom unique du group
	NomGroupe varchar(64) UNIQUE NOT NULL
);
COMMENT ON TABLE xxx.Groups IS 'Table des groups héritant de la table Contacts';
COMMENT ON COLUMN xxx.Groups.Id_Groups IS 'Identifiant de la table Groups. Clef étrangère sur la table contact';
COMMENT ON COLUMN xxx.Groups.UGrp_Json IS 'Json, liste des utilisateurs';
COMMENT ON COLUMN xxx.Groups.Fichiers IS 'Ce groupe héberge t''il des fichiers ?';
COMMENT ON COLUMN xxx.Groups.NomGroupe IS 'Nom unique du group';


-- ++++++++++++++++++++++++++++++++++++
-- Table Logs
-- Description :
-- 	Table pour enregistrer tous les changements de valeur d'item.
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Logs (
	-- Clef primaire de la table de login.
	Id_Logs serial PRIMARY KEY NOT NULL,
	-- Identifiant de l'objet modifié, cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
	Id_Items integer  NOT NULL,
	-- Date de création du log.
	Creation varchar(16)  NOT NULL,
	-- Créateur du Log. Cette clef n'est pas étrangère pour ne pas supprimer l'état des objets supprimés.
	Id_Creator integer  NOT NULL,
	-- Date de validation
	Validation varchar(16)  NOT NULL,
	-- Validateur de cette modification
	Id_Validator integer  NOT NULL,
	-- Json, dernière valeur d'item
	Valeur varchar(1024)  NOT NULL,
	-- L'objet est il en attente de suppression (ou supprimé si Suppression == True And sValidation != '')
	Suppression boolean  NOT NULL
);
COMMENT ON TABLE xxx.Logs IS 'Table pour enregistrer tous les changements de valeur d''item.';
COMMENT ON COLUMN xxx.Logs.Id_Logs IS 'Clef primaire de la table de login.';
COMMENT ON COLUMN xxx.Logs.Id_Items IS 'Identifiant de l''objet modifié, cette clef n''est pas étrangère pour ne pas supprimer l''état des objets supprimés.';
COMMENT ON COLUMN xxx.Logs.Creation IS 'Date de création du log.';
COMMENT ON COLUMN xxx.Logs.Id_Creator IS 'Créateur du Log. Cette clef n''est pas étrangère pour ne pas supprimer l''état des objets supprimés.';
COMMENT ON COLUMN xxx.Logs.Validation IS 'Date de validation';
COMMENT ON COLUMN xxx.Logs.Id_Validator IS 'Validateur de cette modification';
COMMENT ON COLUMN xxx.Logs.Valeur IS 'Json, dernière valeur d''item';
COMMENT ON COLUMN xxx.Logs.Suppression IS 'L''objet est il en attente de suppression (ou supprimé si Suppression == True And sValidation != '''')';


-- ++++++++++++++++++++++++++++++++++++
-- Table Segments
-- Description :
-- 	Table gérant les segments.
-- ++++++++++++++++++++++++++++++++++++

CREATE TABLE IF NOT EXISTS xxx.Segments (
	-- Clef unique de la table hérité de Items
	Id_Segments integer UNIQUE REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Propriétaire du segment.
	Id_Items_Owner integer REFERENCES xxx.Items (Id_Items) ON DELETE CASCADE NOT NULL,
	-- Liste des items du segment
	Id_Items_Json varchar(1024)  NOT NULL,
	-- Liste des paramêtres du segments.
	Parametres varchar(1024)  NOT NULL,
	-- Nom du segments
	Nom varchar(64)  NOT NULL
);
COMMENT ON TABLE xxx.Segments IS 'Table gérant les segments.';
COMMENT ON COLUMN xxx.Segments.Id_Segments IS 'Clef unique de la table hérité de Items';
COMMENT ON COLUMN xxx.Segments.Id_Items_Owner IS 'Propriétaire du segment.';
COMMENT ON COLUMN xxx.Segments.Id_Items_Json IS 'Liste des items du segment';
COMMENT ON COLUMN xxx.Segments.Parametres IS 'Liste des paramêtres du segments.';
COMMENT ON COLUMN xxx.Segments.Nom IS 'Nom du segments';




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
	Id_Stocks integer REFERENCES xxx.Stocks (Id_Stocks) ON DELETE CASCADE NOT NULL,
	-- La quantite du mouvement
	Quantite integer  NOT NULL,
	-- Motif du mouvement
	Motif varchar(256)  NOT NULL,
	-- Clef de l'operation
	Clef_Operation varchar(64)  NOT NULL,
	-- Responsable du mouvement
	Id_Contacts integer  NOT NULL
);
COMMENT ON TABLE xxx.Mouvements IS 'La table qui note les mouvements';
COMMENT ON COLUMN xxx.Mouvements.Id_Mouvements IS 'Clef de la table';
COMMENT ON COLUMN xxx.Mouvements.Effectif IS 'Hour of effective time';
COMMENT ON COLUMN xxx.Mouvements.Id_Stocks IS 'Le stock du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Quantite IS 'La quantite du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Motif IS 'Motif du mouvement';
COMMENT ON COLUMN xxx.Mouvements.Clef_Operation IS 'Clef de l''operation';
COMMENT ON COLUMN xxx.Mouvements.Id_Contacts IS 'Responsable du mouvement';




