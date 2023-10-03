// import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "./OrderHistory.css";

function OrderHistory() {
  const orderHistory=[
    order: 
    date: 
    price:







  ]
  // TODO: Use the useQuery hook from apollo to get order history data from the back-end

  return (
    <div class="table-responsive pb-5">
      <div class="order">Order History
      <div class="logout">
        <button class="button1">logout</button>
      </div>
      </div>
      <div class="table">
        <table id="tb" class="border ps-table w-100 mb-3 tb1 border-1">
          <thead>
            <tr>
              <th class="font-weight-bold py-2 border-1">Order</th>
              <th class="font-weight-bold py-2 border-1 quantity">Date</th>
              <th class="font-weight-bold py-2 border-1 ">
                Fulfillment Status
              </th>
              <th class="font-weight-bold py-2 border-1 ">Total</th>
            </tr>
          </thead>

          {/* map of the ofder history info from function above */}
          <tr>
            <td>order </td>
            <td>date</td>
            <td>price</td>
          </tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
