import { connect } from "react-redux"
import { followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowUserAC } from "../../Redux/usersPageReducer"
import Users from "./Users"


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
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
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalUsersCount) => {
         dispatch(setTotalUsersCountAC(totalUsersCount))
      },
   }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer