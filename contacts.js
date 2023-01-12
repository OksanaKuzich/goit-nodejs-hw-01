const fs = require("fs").promises;
const path = require("path");

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

function removeContact(contactId) {}

function addContact(name, email, phone) {}
