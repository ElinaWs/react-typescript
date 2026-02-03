import { useState } from "react"
import { UserList } from "./components/UserCard/UserList/UserList"
import type { IUser } from './Types/Types'

function App() {

  const users:IUser[] = [
    {
      name: 'Wladyis',
      age: 12, 
      hobby: 'osu!',
      phone: 'IPhone XR'
    },  {
      name: 'Frayzzy',
      age: 17, 
      hobby: 'RDR',
      phone: 'IPhone 14'
    },  {
      name: 'StaXeR',
      age: 15, 
      hobby: 'cs2',
      phone: 'TS chehol'
    },  {
      name: 'Joise',
      age: 15, 
      hobby: 'cs2',
      phone: 'MakanPhone'
    }
  ]

  const [userState, setUsersState] = useState<IUser[]>([])

  const addUsers = (userArg:IUser[]) => {
    const copyUsers = [...userState]

    setUsersState([...copyUsers, ...userArg])
  }

return (
    <div>
      <h1>Users List:</h1>
      <UserList users = {users}/>
      <button onClick={() => addUsers(users)}></button>
    </div>
  )
}

export default App
