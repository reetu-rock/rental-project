import React from 'react'

const BookProduct = ({ isOpen, rentelList }) => {


    return (<div>
             <p>Book a Product</p>
             <select>
                 {rentelList.map(data => <option value={data.name}>{data.name}</option>)}</select>
                 <div>
                 <label for="from">From:</label>
                 <input type="date" id="fromDate" name="fromDate"/>
                 <label for="to">To:</label>
                 <input type="date" id="toDate" name="toDate"/>
                 </div>
            </div>)
}

export default BookProduct