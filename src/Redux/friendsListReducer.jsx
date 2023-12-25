let initialState = {
   friends: [
      { id: 1, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 2, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 3, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
   ]
}

const friendsListReducer = (state = initialState, action) => {
   return state
}

export default friendsListReducer