#! /usr/bin/env node

// in the terminal:
// node populatedb <mongoDB url>

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Tool = require("./models/Tool.ts");

const tools = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createTools();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}


async function toolCreate(name, price, type, description, model_number, manufacturer, status, date_created, date_modified) {
  const obj = {
    name: name,
    price: price,
    type: type,
    description: description,
    model_number: model_number,
    manufacturer: manufacturer,
    status: status,
    date_created: date_created,
    date_modified, date_modified
  }

  const tool = new Tool(obj);
  await tool.save();
  console.log(`Added tool: ${name}`);
}

async function createTools(){
  console.log("Adding tools");
  await Promise.all([
    toolCreate("screw driver", 12.99, "hand-tool", "12 screw driver that can also be used as a lever.", "SCR3WU2", "Mann co.", "in-use", new Date(), new Date()),
    toolCreate("hammer", 5.59, "hand-tool", "10 lb of blunt force trauma", "H4MM3R1TD0VVN", "Mann co.", "available", new Date(), new Date()),
    toolCreate("electric drill", 69.99, "power-tool", "If you have to make a hole somewhere, here's your chance", "SCR3W1TIN", "DeVault", "missing", new Date(), new Date()),
    toolCreate("uno r3", 40.01, "electronics", "You want to automate things? What are you, a nerd?", "1R3ARDUINO", "Arduino", "available", new Date(), new Date()),
    toolCreate("solder station", 120.40, "electronics", "Make sure your hands aren't shakey when you're fixing small electronics", "H0TS01D3R", "Peller", "maintenance", new Date(), new Date()),

  ])
}
