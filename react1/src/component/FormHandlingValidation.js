import React, { useState } from 'react'

function FormHandlingValidation() {
    //Skapa först dessa förutsättningar för att hantera värden
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            setErrors({ name: 'Please fill in your name' })
        }
        if (!email) {
            setErrors({ email: 'Please fill in email' })
        }
        if (!password) {
            setErrors({ password: 'Please fill in your password' })
        }
        console.log('form is submitted')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span>{errors.passsword}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHandlingValidation
