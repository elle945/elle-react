import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './UserContext'

function Products() {
    const { id } = useParams()
    const msg = useContext(UserContext)

    return (
        <div>
            <h1>Productsidan</h1>
            <h4>
                Här kan du läsa om{' '}
                <span>
                    {id} till {msg}
                </span>
            </h4>
        </div>
    )
}

export default Products
