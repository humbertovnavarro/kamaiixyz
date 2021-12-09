import sqlite3 from 'better-sqlite3';
const db = new sqlite3('../arsene.sqlite');
const schema = `

CREATE TABLE IF NOT EXITS nodes (
	id integer PRIMARY KEY AUTOINCREMENT,
	hostname text,
	token text
);

CREATE TABLE IF NOT EXITS permissions (
	node integer,
	permission text
);

CREATE TABLE IF NOT EXITS macaddresses (
	entity integer,
	mac text,
	location text
);

CREATE TABLE IF NOT EXITS entities (
	id integer PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE IF NOT EXITS associates (
	entity integer,
	associate integer,
	relation text
);

CREATE TABLE IF NOT EXITS ipaddresses (
	entity integer,
	ip text,
	location text,
	isVpn integer
);

CREATE TABLE IF NOT EXITS locations (
	entity integer,
	location text
);

CREATE TABLE IF NOT EXITS phonenumbers (
	entity integer,
	number text
);

CREATE TABLE IF NOT EXITS names (
	entity integer,
	name text
);

CREATE TABLE IF NOT EXITS passwords (
	entity integer,
	password text,
	algo text
);

CREATE TABLE IF NOT EXITS badtokens (
	token text
);

CREATE TABLE IF NOT EXITS authtokens (
	token text
);

CREATE TABLE IF NOT EXITS hosts (
	hostname text
);
`;
db.exec(schema);
export default db;