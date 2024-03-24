import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = (id) => Contact.findById(id);

export const addContact = (data) => Contact.create(data);

export const updateContactById = (id, data) => exportContact.findByIdAndUpdate(id, data);

export const removeContact = (id) => Contact.findByIdAndDelete(id);

export const updateStatusContact = (id, data) =>
  Contact.findByIdAndUpdate(id, data);