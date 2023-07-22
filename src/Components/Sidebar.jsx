import React, { Component } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export default class Sidebar extends Component {

  ShowMenu = () => {
    console.log('click')
    document.getElementById("sidebar").classList.toggle('active')

  }

  render() {
    return (

      <>
        <div className="TopNav">
          <button id='btn' onClick={() => this.ShowMenu(this)}>
            <span class="material-icons-sharp icons">
              menu
            </span>
          </button>
        </div>

        <div className='sidebar' id='sidebar'>
          <ul>
            <li>
              <span class="material-icons-sharp icons">
                dashboard
              </span>
              Dashboard
            </li>
            <li>
              <span class="material-icons-sharp icons">
                bar_chart
              </span>
              <Link to='/category'>
                Category
              </Link>
            </li>
            <li >
              <span class="material-icons-sharp icons">
                real_estate_agent
              </span>
              <Link to='/subcategory'>
                Sub Category
              </Link>
            </li>
            <li id='notification'>
              <Link to='/showSubCategory'>
                Show SubCategory
              </Link>
            </li>
            <li>
              <span class="material-icons-sharp icons">
                account_circle
              </span>
              <Link to='/showCategory'>
              showCategory
              </Link>
              </li>
            <li>
              <span class="material-icons-sharp icons">
                settings
              </span>
              <Link to='/product'>
              ADD PRODUCT
              </Link>
              </li>
              <li>
                <Link to='/ShowProduct'>
                ShowProduct  
                </Link>
              </li>
            <li >
              <span class="material-icons-sharp icons">
                keyboard_return
              </span>
              Log Out</li>
          </ul>
        </div>
      </>
    )
  }
}
