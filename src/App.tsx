import { useState } from "react"
import { UserList } from "./components/UserCard/UserList/UserList"
import type { IUser } from './Types/Types'
import { UserForm } from "./components/UserCard/UserForm/UserForm"

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  const addUser = (user: IUser) => {
    setUsers(prev => [...prev, user])
  }

  return (
    <div>
      <UserForm onSubmit={addUser}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
