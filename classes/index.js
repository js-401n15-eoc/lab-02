'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const { Car, Motorcycle } = require('./vehicle-class.js');
const Validator = require('../lib/validator.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const mazdaObj = new Car('Mazda 6');
console.log(mazdaObj.name, mazda.drive(), mazda.stop());

const davidsonObj = new Motorcycle('Davidson');
console.log(davidsonObj.name, davidsonObj.wheelie(), davidsonObj.stop());

// Throwback to validator stuff
const valObj = new Validator();
const personRules = {
    fields: {
      id: { type: 'string', required: true },
      name: { type: 'string', required: true },
      age: { type: 'number', required: true },
      gender: { type: 'string', required: true, approvedVals: ['male', 'female'] },
      hair: {
        type: 'object', required: true,
        color: { type: 'string', required: true },
        style: { type: 'string', required: true },
      },
      children: { type: 'array', valueType: 'string' },
    },
  };
  
  const susan = {
    id: '123-45-6789',
    name: 'Susan McDeveloperson',
    age: 37,
    gender: 'female',
    hair: {
      color: 'brown',
      style: 'long',
    },
    children: [],
  };
  
  const baldSusan = {
    id: '123-45-6789',
    name: 'Susan Nullhair',
    age: 66,
    gender: 'female',
    hair: {
    },
    children: [],
  };
  
  const noColorSusan = {
    id: '123-45-6789',
    name: 'Susan Baldie',
    age: 66,
    gender: 'female',
    hair: {
      style: 'bald',
    },
    children: [],
  };
  
  const fred = {
    id: 38,
    name: 'Freddy McCoder',
    hair: {
      style: 'short',
      color: 'black',
    },
    children: [],
  };
  
  const fredWithProperChildren = {
    id: '321-94-9843',
    name: 'Freddy McCoder',
    age: 44,
    gender: 'male',
    hair: {
      style: 'short',
      color: 'black',
    },
    children: ['Bob', 'Tom', 'Sue'],
  };
  
  const fredWithInvalidChildren = {
    id: '321-94-9843',
    name: 'Freddy McCoder',
    age: 44,
    hair: {
      style: 'short',
      color: 'black',
    },
    children: ['Bob', 123, 'Sue'],
  };
  
  const nonBinaryFred = {
    id: '321-94-9843',
    name: 'Freddy McCoder',
    age: 22,
    gender: 'X',
    hair: {
      style: 'short',
      color: 'black',
    },
    children: [],
  };
  
  console.log('Name: Susan, Valid: ' + valObj.isValid(susan, personRules));
  console.log('Name: Susan (bald), Valid: ' + valObj.isValid(baldSusan, personRules));
  console.log('Name: Susan (no hair color), Valid: ' + valObj.isValid(noColorSusan, personRules));
  console.log('Name: Fred, Valid: ' + valObj.isValid(fred, personRules));
  console.log('Name: Fred (with proper children), Valid: ' + valObj.isValid(fredWithProperChildren, personRules));
  console.log('Name: Fred, (with invalid children), Valid: ' + valObj.isValid(fredWithInvalidChildren, personRules));
  console.log('Name: Fred (non-binary), Valid: ' + valObj.isValid(nonBinaryFred, personRules));