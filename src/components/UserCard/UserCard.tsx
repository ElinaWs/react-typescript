import type { IUser } from "../../Types/Types"
import styles from "./styles.module.css"

interface Props {
    user: IUser
}

export const UserCard = ({ user }: Props) => {
    const { name, age, hobby, phone } = user
    return(
        <div className={styles.container}>
            <p>NAME: {name}</p>
            <p>AGE: {age}</p>
            <p>HOBBY: {hobby}</p>
            {phone && <p>PHONE: {phone}</p>}
        </div>
    )
}