drop database chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageID int not null AUTO_INCREMENT,
  userID int not null,
  roomID int not null,
  message varchar(140),
  PRIMARY KEY(messageID)
);

CREATE TABLE room (
  roomID int not null AUTO_INCREMENT,
  roomname varchar(30),
  primary key(roomID)
);

CREATE TABLE users (
  userID int not null AUTO_INCREMENT,
  username varchar(30),
  primary key(userID)
);

-- insert into users(username) values( 'jon');
-- insert into room(roomname)  values('lobby');
-- insert into messages(userID, roomID, message) values(5,5,'hello world');
/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

