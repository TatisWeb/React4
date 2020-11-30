const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
      followed: "true",
      fullname: "Elena Ivanova",
      status: "i like this app",
      location: { Country: "Russian", city: "Moscow" }
    },
    {
      id: 2,
      photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
      followed: "false",
      fullname: "Ilona Tatis",
      status: "i want a boy",
      location: { country: "Ukraine", city: "Kiev" }
    },
    {
      id: 3,
      photoUrl: "https://i.ibb.co/BcYwTTS/20201130-232652.jpg",
      followed: "true",
      fullname: "Sergey Tarasenko",
      status: "i am developer by React",
      location: { country: "Russian", city: "Moscow" }
    },
    {
      id: 4,
      photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
      folowed: "true",
      fullname: "Anton Loboda",
      status: "i happy man",
      location: { country: "Ukraine", city: "Dnepr" }
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
export const followAC = userId => ({
  type: FOLLOW,
  userId
});

export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId
});

export const setUsersAC = users => ({
  type: SET_USERS,
  users
});
