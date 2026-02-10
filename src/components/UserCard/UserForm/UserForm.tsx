import { useState } from "react"
import styles from "./styles.module.css"
import type { IUser } from "../../../Types/Types";

interface Props{
    onSubmit: (user: IUser) => void
}

export const UserForm = ({onSubmit}:Props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [hobby, setHobby] = useState('')
    const [phone, setPhone] = useState('')

    const [nameError, setNameError] = useState('')
    const [ageError, setAgeError] = useState('')
    const [hobbyError, setHobbyError] = useState('')

    const checkValidUser = () => {
        let hasError = false
        const trimmedName = name.trim()
        const trimmedHobby = hobby.trim()
        const parsedAge = Number(age)

        if (trimmedName.length === 0) {
            setNameError("Name can not be empry!")
            hasError = true
        }

        if (trimmedHobby.length === 0) {
            setHobbyError("Hobby can not be empty!")
            hasError = true
        }

        if (isNaN(parsedAge) ) {
            setAgeError("Write valid age!")
            hasError = true
        }

        if (parsedAge <= 0) {
            setAgeError('Age can not me smaller zero or less')
            hasError = true
        }
        return hasError 
    }


    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        handler: (value: string) => void,
        errorHandler?: (value:string) => void
        ) => {
            handler(event.target.value)
            errorHandler?.('')
    };

   
    
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const hasErrors = checkValidUser()
    if(hasErrors) {
        return
    }

        const newUser:IUser = {
            name: name,
            age: Number(age),
            hobby: hobby,
            phone: phone
        }
        onSubmit(newUser)
        setName('')
        setAge('')
        setHobby('')
        setPhone('')
    }
    
    return (
        <div>
            <form className="styles.form" onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={(e) => handleChange(e, setName, setNameError)}
                className={styles.input}
                placeholder="Name" 
                required
                />
                {nameError && <p className={styles.error}>{nameError}</p>}

                <input 
                value={age}
                onChange={(e) => handleChange(e, setAge, setAgeError)}
                className={styles.input}
                placeholder="Age" 
                required
                type="number"
                />
                {ageError && <p className={styles.error}>{ageError}</p>}

                <input 
                value={hobby}
                onChange={(e) => handleChange(e, setHobby, setHobbyError)}
                className={styles.input}
                placeholder="Hobby" 
                required
                />
                {hobbyError && <p className={styles.error}>{hobbyError}</p>}

                <input 
                value={phone}
                onChange={(e) => handleChange(e, setPhone)}
                className={styles.input}
                placeholder="Number"
                />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};