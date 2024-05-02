import { depB } from "@org/dep-b";
import { URI } from 'vscode-uri';
import sqlite3 from 'sqlite3'

console.log('Hello World ooooo');
console.log(depB());

const isUri = URI.isUri({});
console.log("isUri? " + isUri);

const db = new sqlite3.Database('dist/test.db');
db.run('CREATE table TESTTABLE;')
