const initialState = [
  {
    id: 1,
    sNo: 12,
    name: "dhanraj",
    subject: "Social",
    email: "dhanraj@gmail.com",
    countrycode: 91,
    mobilenumber: 9360026348,
    mark: 73,
    age: 18,
    // uploadfile: "sample.jpg",
  },
  {
    id: 2,
    sNo: 21,
    name: "logesh",
    subject: "Science",
    email: "logesh@gmail.com",
    countrycode: 91,
    mobilenumber: 9080751759,
    mark: 84,
    age: 18,
    // uploadfile: "sample.jpg",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      console.log(state);
      console.log(action.payload);
      console.log(action.payload.id);
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filterContacts = state.filter((contact) =>
        contact.id !== action.payload ? contact : null
      );
      state = filterContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
