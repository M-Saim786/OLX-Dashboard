import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../Config/Firebase'

function Show_Products() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        const dbref = ref(db, 'Product')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            console.log(data)
            if (data) {
                setProducts(Object.values(data))
                console.log(Products)
            }
        })

    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Category
                    </th>
                    <th>
                        date (DD/MM/YY)
                    </th>
                    <th>
                        Feature Value
                    </th>

                </tr>
                {
                    Products.map((prod, index) => {
                        return (
                            <>
                                <tr>
                                    <th>
                                        {prod.ProductName}
                                    </th>
                                    <th>
                                        {prod.Category}
                                    </th>
                                    <th>
                                        {prod.Date}
                                    </th>
                                    <th>
                                        {prod.Feature_Value}
                                    </th>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Show_Products
