const initialState = [
  {
    name: "Alice",
    photoURL: "https://randomuser.me/api/portraits/women/20.jpg",
    joinedDate: "Joined in 2015",
    userDescription: "I am Alice",
    friends: [{ name: "name1" }, { name: "name2" }]
  },
  {
    name: "Bob",
    photoURL: "https://randomuser.me/api/portraits/men/10.jpg",
    joinedDate: "Joined in 2015",
    userDescription: "I live in Boston.",
    friends: [{ name: "name1" }, { name: "name2" }]
  }
];

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
