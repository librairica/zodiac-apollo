// we need a Contact model in our mutations to modify the data.
const Contact = require('../models/Contact');

module.exports = {
  Query: {
    // here is the getContacts, that we defined in our typeDefs.
    // simply, using the Contact model to fetch all the contacts with async/await
    // and return the result.
    async getContacts() {
      try {
        const contacts = await Contact.find({}).sort({ created: -1 });
        return contacts;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
      async createContact(_, { ContactInput }) {
    // destructure the body from our args.
    // create a new Contact, save and return that contact
    // created is the date.
    try {
      const { firstName, lastName, birthday } = ContactInput;
      const newContact = new Contact({
          firstName,
          lastName,
          birthday
        });
        const contact = await newContact.save();
        return contact;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteContact(_, { contactId }) {
      // Find the contact by its Id and delete it.
      try {
        const contact = await Contact.findById(contactId);
        if (contact) {
            await contact.delete();
            return 'Contact deleted!';
        } else {
            return 'Contact does not exist'
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};