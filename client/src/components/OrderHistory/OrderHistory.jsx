// import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "./OrderHistory.css";
import { QUERY_ORDER } from "../../utils/queries";

const OrderHistory = () => {
  const { loading, error, data } = useQuery(QUERY_ORDER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const orders = data.user.orders;

// function OrderHistory() {
//   // const orderHistory=[
//   //   // order:
//   //   // date:
//   //   // price:
//   // ]

//   // TODO: Use the useQuery hook from apollo to get order history data from the back-end
//   const { data, loading } = useQuery(QUERY_ORDER);
//   const orders = data ? data.user.orders : null;

  return (
    <div class="table-responsive pb-5">
      <div class="order">
        Order History
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
              {/* <th class="font-weight-bold py-2 border-1 ">
                Fulfillment Status
              </th> */}
              <th class="font-weight-bold py-2 border-1 ">Total</th>
            </tr>
          </thead>

          {/* map of the ofder history info from function above */}
          {orders
            ? orders.map((order) => (
                <tr key={order._id}>
                  <td>
                    {order._id}
                    {/* {order.products.map((product) => product.name).join(", ")} */}
                  </td>
                  <td>
                    {new Date(order.purchaseDate).toLocaleDateString()}
                  </td>
                  <td>{order.total_price !== undefined ? `$${order.total_price.toFixed(2)}` : ''}</td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
