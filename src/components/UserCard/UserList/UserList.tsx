import type { IUser } from "../../../Types/Types"
import { UserCard } from "../UserCard"

import styles from './styles.module.css'

interface Props {
    users: IUser[]
}

export const UserList = ({ users }: Props) => {
    return(
        <div className={styles.container}>
            {users.map((user) => (
                <UserCard user = {user}/>
            ))}
        </div>
    )
}