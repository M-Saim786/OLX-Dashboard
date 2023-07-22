import React, { Component } from 'react'
import './App.css'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container } from 'react-bootstrap';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import { Routes, Route } from 'react-router-dom'
import Category from './Components/Category';
import SubCategory from './Components/SubCategory';
import Show_SubCate from './Components/Show_SubCate';
import Show_Category from './Components/Show_Category';
import Product from './Components/Product';
import Show_Products from './Components/Show_Products';

export default class App extends Component {

  render() {


    return (
      <>

        <Sidebar />
        <div className="container">
          <Routes>

            <Route path="/category" element={<Category />} />
            <Route path='/subcategory' element={<SubCategory />} />
            <Route path='/showCategory' element={<Show_Category />} />
            <Route path='/showSubCategory' element={<Show_SubCate />} />
            <Route path='/product' element={<Product />} />
            <Route path='/ShowProduct' element={<Show_Products />} />
          </Routes>
          {/* <Dashboard /> */}
        </div>

      </>
    )
  }
}
