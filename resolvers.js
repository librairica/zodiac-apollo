const resolvers = {
    Query: {
      getContact: async (parent, args) => {
        try {
          const { contactId } = args;
          return await Contact.findById(contactId);
        } catch (error) {
          throw new Error(error);
        }
      },
      getContacts: async (parent, args) => {
        try {
          return [
            {
              "id": "6beda137-cff7-4c85-b062-3902913ecf5c",
              "firstName":"Erica",
              "lastName": "Handelman",
              "birthday": "1988-09-30",
              "birthTimestamp": "",
              "sunSignEmoji": "♎︎"
            },
            {
              "id": "e2a78342-1a77-44b7-a6f8-1e0c140cb69b",
              "firstName":"Leanne",
              "lastName": "Blackwell",
              "birthday": "1988-07-26",
              "sunSignEmoji": "♌︎"
            }
          ]
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  
    Mutation: {
      createContact: async (parent, args) => {
        try {
          const { contactInput } = args;
          return await Contact.create(contactInput);
        } catch (error) {
          throw new Error(error);
        }
      },
      updateContact: async (parent, args) => {
        try {
          const { contactId, contactInput } = args;
          return await Contact.findOneAndUpdate(contactId, contactInput, { new: true });
        } catch (error) {
          throw new Error(error);
        }
      },
      deleteContact: async (parent, args) => {
        try {
          const { contactId } = args;
          return await Contact.findByIdAndDelete(contactId);
        } catch (error) {
          throw new Error(error);
        }
      },
      deleteContacts: async (parent, args) => {
        try {
          return await Contact.remove();
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  };

  module.exports = resolvers;