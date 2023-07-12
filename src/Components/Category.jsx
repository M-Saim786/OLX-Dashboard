import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import './Dashboard.css'
import * as Yup from 'yup';
import { ref, push, set } from 'firebase/database'
import { db } from '../Config/Firebase'
function Category() {
    const [Category, setCategory] = useState('')
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const AddCategory = () => {
        const dbref = ref(db, 'Category')
        let key = push(dbref)
        let randomkey = key.key
        console.log(randomkey)
        set((dbref, key), {
            Category: Category,
            randomkey: randomkey
        })
        // console.log(Category)
    }
    return (
        < >
            <div className="contaier">
                <h2>
                     ADD Category
                </h2>
                <Formik
                    initialValues={{ name: '' }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required().max(6, 'max 6 letters')
                        })
                    }

                // onSubmit={(name)=>{
                //     console.log(name)
                // }}
                >
                    <Form>



                        <input placeholder='Category Name' onChange={handleCategory} />
                        <Button onClick={AddCategory}>
                            Submit
                        </Button>
                        {/* <button type='submit'>submit</button> */}
                    </Form>

                </Formik>

            </div>


            {/* <TextField variant='contaiend' label='Category Name' /> */}
        </>
    )
}

export default Category
