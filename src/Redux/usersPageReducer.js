let FOLLOW_USER = 'FOLLOW_USER';
let UNFOLLOW_USER = 'UNFOLLOW_USER';
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 2
}

const usersPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW_USER:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW_USER:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return { ...state, users: [...action.users] }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.totalUsersCount }
      default:
         return state
   }
}


export const followUserAC = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersPageReducer