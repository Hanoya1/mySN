import { connect } from "react-redux"
import { followUserAC, setUsersAC, unfollowUserAC } from "../../Redux/usersPageReducer"
import Users from "./Users"


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followUserAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowUserAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer