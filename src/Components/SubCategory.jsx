import { Button, TextField } from '@mui/material'
import { getDownloadURL, ref as sRef, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { db, storage } from '../Config/Firebase'
import './Dashboard.css'
import { push, set, ref ,serverTimestamp} from 'firebase/database'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function SubCategory() {
    const [Category, setCategory] = useState('')
    const [Img, setImg] = useState([])
    const [ImgUrl, setImgUrl] = useState('')
    let IMGURL = ''
    const handleSubCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleImg = (e) => {
        setImg(e.target.files[0])
        const storageRef = sRef(storage, `Images/${e.target.files[0].name}`)
        uploadBytes(storageRef, e.target.files[0])
            .then((snapShot) => {
                getDownloadURL(snapShot.ref)
                    .then((url) => {
                        console.log(url)
                        if (url) {
                            IMGURL = url
                            setImgUrl(IMGURL)
                            console.log(IMGURL)
                            alert('Img Uploaded')
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            })
            .catch((err) => {
                console.error(err)
            })
    }
    const addData = () => {
        try {
            console.log(IMGURL)
            console.log(ImgUrl)
            const dbref = ref(db, 'SubCategory')
            const key = push(dbref)
            let ramdomKey = key.key
            set((dbref, key), {
                Sub_Category: Category,
                Sub_Category_Key: ramdomKey,
                Sub_Category_Img: ImgUrl,
                time:serverTimestamp()

            })
            // toast('SubCategory added')
            // alert("Successfully added")
            setImg([])
            setCategory('')
            alert('Successfully added')
        }
        catch (err) {
            console.error(err)
        }
        // window.reload(true)
    }
    return (
        <>
        <h2>
          ADD Sub Category 
        </h2>
            <input type="text" placeholder='Sub-Category' onChange={handleSubCategory} />
            <input type="file" onChange={handleImg} />
            <Button variant='contained' onClick={addData}>
                Add Data
            </Button>
            {/* <ToastContainer /> */}
            {/* <TextField variant='contained' label='Enter' /> */}
        </>
    )
}

export default SubCategory
