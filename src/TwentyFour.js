import React from 'react'
import { useAuth } from './AuthContext'

export default function TwentyFour() {

    const {user,login,logout} = useAuth();

  return (
    <div>
      <h1>User Authentication Example</h1>
      {
        user ? (
            <div>
            <p>Welcome , {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ): (
            <button onClick={()=>login({username:'user12345'})}>Login</button>
        )
      }    
    </div>
  )
}
