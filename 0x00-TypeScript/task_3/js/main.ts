/// <reference path="./crud.d.ts">
import { RowID } from './interface';
import { RowElement } from './interface';
import * as CRUD from './crud';
import { insertRow } from './crud';

const row: RowElement = {
  firstName: 'Guilaume',
  lastName: 'Salva'
};

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);

// ["./crud.d.ts />"]
// ["/// <reference path =", "./crud.js"]
// ["CRUD.updateRow(newRowID, updatedRow)", "CRUD.deleteRow(newRowID)"]
