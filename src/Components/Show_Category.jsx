import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Firebase'

function Show_Category() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        const dbref = ref(db, 'Category')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            let category = Object.values(data)
            setCategory(category)
        })

    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>
                        Category
                    </th>
              
                    <th>
                        Category Key
                    </th>
                </tr>
                {
                    Category.map((category, index) => {
                        return (
                            <>
                                <tr>
                                    <th>
                                        {category.Category}
                                    </th>

                                    <th>
                                        {category.randomkey}
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

export default Show_Category
