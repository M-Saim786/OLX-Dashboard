import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Firebase'
import './Dashboard.css'

function Show_SubCate() {
    const [SubCate, setSubCate] = useState([])
    useEffect(() => {
        const dbref = ref(db, 'SubCategory')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            let subCategory = Object.values(data)
            console.log(subCategory)
            setSubCate(subCategory)
            console.log(SubCate)
        })

    }, [])
    const getKey = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <table>
                <tr>
                    <th>
                        Sub_Category
                    </th>
                    <th>
                        Sub Img
                    </th>
                 
                    <th>
                        Sub Key
                    </th>
                    <th>
                        TIME
                    </th>
                </tr>
                {
                    SubCate.map((subCategory, index) => {
                        return (
                            <>
                                <tr>
                                    <th>
                                        {subCategory.Sub_Category}
                                    </th>
                                    <th>
                                        <img src={subCategory.Sub_Category_Img} alt="" />
                                    </th>
                                    <th>
                                        {subCategory.Sub_Category_Key}
                                    </th>
                                    <th>
                                        {subCategory.time/3600}
                                    </th>
                                    <th>
                                        <button value={subCategory.Sub_Category_Key} onClick={getKey}>
                                            click key
                                        </button>
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

export default Show_SubCate
