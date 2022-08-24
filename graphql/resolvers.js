// const {getSign} = require('./sign-helper.js');

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
      const sunSign = getSign(birthday)
      console.log("sun sign: ", sunSign)
      const newContact = new Contact({
          firstName,
          lastName,
          birthday,
          sunSign
        });
        const contact = await newContact.save();
        return contact;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteContact(_, { ContactId }) {
      // Find the contact by its Id and delete it.
      try {
        const contact = await Contact.findById(ContactId);
        if (contact) {
            await contact.delete();
            return contact;
        } else {
          throw new Error("Contact does not exist");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

function getSign(birthday) {
  let sign = '';
  const month = birthday.split("-")[1]
  const day = birthday.split("-")[2]
  if (month==="01") {
      if(day<=19){
      sign="Capricorn"
      } else {
      sign="Aquarius"
      }
  } else if (month==="02") {
      if(day<=18){
      sign="Aquarius"
      } else {
      sign="Pisces"
      }
  } else if (month==="03") {
      if(day<=20){
      sign="Pisces"
      } else {
      sign="Aries"
      }
  } else if (month==="04") {
      if(day<=19){
      sign="Aries"
      } else {
      sign="Taurus"
      }
  } else if (month==="05") {
      if(day<=20){
      sign="Taurus"
      } else {
      sign="Gemini"
      }
  } else if (month==="06") {
      if(day<=20){
      sign="Gemini"
      } else {
      sign="Cancer"
      }
  } else if (month==="07") {
      if(day<=22){
      sign="Cancer"
      } else {
      sign="Leo"
      }
  } else if (month==="08") {
      if(day<=22){
      sign="Leo"
      } else {
      sign="Virgo"
      }
  } else if (month==="09") {
      if(day<=22){
      sign="Virgo"
      } else {
      sign="Libra"
      }
  } else if (month==="10") {
      if(day<=22){
      sign="Libra"
      } else {
      sign="Scorpio"
      }
  } else if (month==="11") {
      if(day<=21){
      sign="Scorpio"
      } else {
      sign="Sagittarius"
      }
  } else if (month==="12") {
      if(day<=21){
      sign="Sagittarius"
      } else {
      sign="Capricorn"
      }
  }
  return sign.toUpperCase()
}