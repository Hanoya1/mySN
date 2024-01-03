import React from "react";
import s from './Users.module.css'

const Users = (props) => {
   console.log(props)
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, userPhoto: 'https://media.npr.org/assets/img/2011/08/17/fguy2006_stewie1_f_custom-35dba0539b1d4e9726d4d395a99df712673f5445.jpg', followed: false, name: 'Kamino', location: { city: 'Prague', country: 'Czech Republic' }, profileText: 'i like the Witcher' },
         { id: 2, userPhoto: 'https://media.npr.org/assets/img/2011/08/17/fguy2006_stewie1_f_custom-35dba0539b1d4e9726d4d395a99df712673f5445.jpg', followed: false, name: 'Kamino', location: { city: 'Prague', country: 'Czech Republic' }, profileText: 'i like the Witcher' },
         { id: 3, userPhoto: 'https://media.npr.org/assets/img/2011/08/17/fguy2006_stewie1_f_custom-35dba0539b1d4e9726d4d395a99df712673f5445.jpg', followed: true, name: 'Kamino', location: { city: 'Prague', country: 'Czech Republic' }, profileText: 'i like the Witcher' },
      ])
   }


   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.userPhoto} className={s.userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.profileText}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users