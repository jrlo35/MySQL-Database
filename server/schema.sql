drop database chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageID int(5), username varchar(30), message varchar(140)
);

CREATE TABLE messageroom (
  roomID int(5), messageID int(5)
);

CREATE TABLE room (
  roomID int(5), roomname varchar(30)
);


/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

