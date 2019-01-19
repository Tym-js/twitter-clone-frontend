import uuid from "uuid";

const initialState = [
  {
    id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: {
      name: "Matthew",
      photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
    }
  },
  {
    id: uuid(),
    content: "Test test Test",
    user: {
      name: "Matthew",
      photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
    }
  },
  {
    id: uuid(),
    content: "test Test test",
    user: {
      name: "Matthew",
      photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
    }
  }
];

const tweets = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tweets;
