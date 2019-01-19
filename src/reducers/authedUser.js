const initialState = {
  name: "Matthew",
  photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
  joinedDate: "Joined in 2015",
  userDescription: "Matthew is a musician living in Nashville.",
  friends: [{ name: "name1" }, { name: "name2" }]
};

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authedUser;
