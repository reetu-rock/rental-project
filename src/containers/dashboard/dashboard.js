import React, { useState } from 'react'
import data from '../../testData/Data.json'
import BookProduct from './book'

import '../../styles/dashboard/dashboard.scss'
import Modal from '../../component/common/Modal'

const Dashboard = () => {
    const [ rentalList, updateRentalList ] =  useState([])
    const [ searchText, updateSearchText ] = useState('')
    const [shouldOpenPopUp, updatePopUp] = useState(false)

    const searchHandler = event => {
        const { value } = event.target
        updateSearchText(value)
        const filteredData = value ? data.filter(element => element.name.toLowerCase().includes(value.toLowerCase())) : []
        updateRentalList(filteredData)
    }
    const openPopup = () => {
        updatePopUp(true)
    }
    return <div className="dashboard_container">
        <div className="search_box">
        <input type="text" value={searchText} onChange={searchHandler}/>
        </div>
        <div className="table">
           <div className="table-container header">
            <div className="flex-row">No.</div>
            <div className="flex-row">Name</div>
            <div className="flex-row">Avaiable</div>
            <div className="flex-row">Need to rent</div>
            <div className="flex-row">Durability</div>
            <div className="flex-row">Mileage</div>
          </div>
            {rentalList && rentalList.map((element, index) => {
               return (<div className="table-container">
                <div className="flex-row">{index}</div>
                <div className="flex-row">{element.name}</div>
                <div className="flex-row">{element.code}</div>
                <div className="flex-row">{element.availability.toString()}</div>
                <div className="flex-row">{element.durability}</div>
                <div className="flex-row">{element.mileage}</div>
                </div>)
            })}
         </div>   
         <div className="footer">
            <button className="button" name="book" disabled={rentalList.length === 0} onClick={openPopup}>Book</button>
            <button name="return" disabled={rentalList.length === 0}>Return</button>
         </div>
         {shouldOpenPopUp && <Modal><BookProduct rentelList={rentalList}/></Modal>}
    </div>
}

export default Dashboard