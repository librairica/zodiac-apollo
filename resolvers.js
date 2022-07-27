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
          return await Contact.find();
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