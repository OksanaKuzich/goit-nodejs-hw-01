const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const allContacts = await listContacts();
    const contactById = allContacts.find((contact) => contact.id === contactId);
    return contactById;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const allContacts = await listContacts();
    const filterContacts = allContacts.filter(
      (contact) => contact.id !== contactId
    );
    console.log(filterContacts);
    fs.writeFile(contactsPath, JSON.stringify(filterContacts));
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const allContacts = await listContacts();
    const user = { id: uuidv4(), name, email, phone };
    console.log(user);
    allContacts.push(user);
    fs.writeFile(contactsPath, JSON.stringify(allContacts));
  } catch (error) {
    console.log(error.message);
  }
}
