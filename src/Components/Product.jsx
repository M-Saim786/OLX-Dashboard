import React, { useState } from 'react'
import { Button, } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getDownloadURL, ref as sRef, uploadBytes } from 'firebase/storage';
import { db, storage } from '../Config/Firebase';
import { push, ref, set } from 'firebase/database';
import './Product.css'

function Product() {

  const [ProductName, setProductName] = useState('')
  const [pQuantity, setpQuantity] = useState('')
  const [PPrice, setPPrice] = useState('')
  // const [CompanyName, setCompanyName] = useState('')
  const [FeatureVal, setFeatureVal] = useState('')
  const [Category, setCategory] = useState('')
  const [IMGUrl, setIMGUrl] = useState('')
  const [productDesc, setproductDesc] = useState('')
  const [Address, setAddress] = useState('')
  const [UrlState, setUrlState] = useState(false)

  let imgUrl = ''

  const HandlePName = (e) => {
    setProductName(e.target.value)
  }
  const HandlePQuantity = (e) => {
    setpQuantity(e.target.value)
  }
  const HandlePPrice = (e) => {
    setPPrice(e.target.value)
  }
  const HandleImg = (e) => {
    const storageRef = sRef(storage, `Product/${e.target.files[0].name}`)
    uploadBytes(storageRef, e.target.files[0])
      .then((snapShot) => {
        getDownloadURL(snapShot.ref)
          .then(async (url) => {
            let imgUrl
            if (url) {
              alert("Uploading")
              imgUrl = url
              setIMGUrl(imgUrl)
              setUrlState(true)
              // console.log(IMGUrl)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const HandleFeature = (e) => {
    setFeatureVal(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
    // console.log(e.target.value)
  }
  const ProductDesc = (e) => {
    setproductDesc(e.target.value)
  }
  const HandleAddress = (e) => {
    setAddress(e.target.value)
  }
  const AddPro = () => {
    if ((ProductName, pQuantity, PPrice, Category, productDesc, Address !== '') && (UrlState === true)) {

      const dbref = ref(db, 'Product')
      const key = push(dbref)
      let randomKey = key.key
      let date = new Date
      date = `${date.getDate()}/${date.getUTCMonth()}/${date.getFullYear()}`
      console.log(date)
      set((dbref, key), {
        ProductName: ProductName,
        Product_Price: PPrice,
        Category: Category,
        imgUrl: IMGUrl == '' ? imgUrl : IMGUrl,
        Date: date,
        Feature_Value: FeatureVal,
        Product_Desc: productDesc,
        Product_Address: Address,
        Product_Key:randomKey
      })
    }
    else {
      alert("Add Data Correctly")
    }
  }

  return (
    <>
      <div className="AddProDiv">
        <div className="heading">
          <h1>Add Products...</h1>
          {/* <h5>Enter Product in Your Inventory...</h5> */}
        </div>
        <div className="mainDetails">
          <h2>Product Details</h2>
          <table>
            <tr>

              <td>
                <TextField id="outline-basic" label="Product Name" variant="outlined" className='Inputs' onChange={HandlePName} />

              </td>
              <td>
                <TextField id="outline-basic" label="Product Quantity" type='number' variant="outlined" className='Inputs' onChange={HandlePQuantity} />

              </td>
            </tr>

            <tr>

              <td>
                <TextField id="outline-basic" label="Prodcut Price" variant="outlined" className='Inputs' type='number' onChange={HandlePPrice} />

              </td>
              <td>
                <TextField id="outline-basic" type='file' variant="outlined" className='Inputs' onChange={HandleImg} />

              </td>
            </tr>

            <tr>
              <td  >
                <select name="" id="" onChange={handleCategory}  >
                  <option value="" selected disabled>Category</option>
                  <option value='Bikes' >Bikes</option>
                  <option value='Mobile Phones' >Mobile Phones</option>
                  <option value='Vehicles' >Vehicles</option>
                  <option value='Property For Sale' >Property For Sale</option>
                  <option value='Property For Rent'>Property For Rent</option>
                  <option value='Electronics & Home Appliances'>Electronics & Home Appliances</option>

                </select>
                {/* <TextField id="outline-basic" label="Category " variant="outlined" className='Inputs' onChange={HandleCategory} /> */}

              </td>
              <td>
                <TextField id="outline-basic" label="Feature Value Optional " variant="outlined" type='number' className='Inputs' onChange={HandleFeature} />

              </td>
            </tr>
            <tr>
              <th>
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  onChange={ProductDesc}
                  placeholder="Product Details"
                  className='textarea'
                />
              </th>
              <th>
                <TextField id="outline-basic" label="Your Address " variant="outlined" type='text' className='Inputs' onChange={HandleAddress} />

              </th>
            </tr>
          </table>

        </div>

        <Button variant='contained' className='addItemBtn' onClick={AddPro}>
          Add Item
        </Button>
      </div>

    </>
  )
}

export default Product
