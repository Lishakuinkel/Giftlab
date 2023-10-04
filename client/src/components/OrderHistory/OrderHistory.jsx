// import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "./OrderHistory.css";
import { QUERY_ORDER } from "../../utils/queries";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const { loading, error, data } = useQuery(QUERY_ORDER);
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const orders = data.user.orders;

  console.log("order: ", orders);

  const handleSubmit = async (e)  =>{
    e.preventDefault();
    alert('You have logged out. Please sign in to continue');
    navigate("/login");
  }

  return (
    <>
      <div class="logout">
        <button class="button1" handleSubmit={handleSubmit}>Logout</button>
      </div>
      <div class="pb-5 flex flex-col items-center">
        <div class="order">Order History</div>

        <table id="tb" class="border border-1">
          <thead>
            <tr>
              <th class="font-weight-bold py-2 border-1">Order number</th>
              <th class="font-weight-bold py-2 border-1 quantity">Purchased Date</th>
              <th class="font-weight-bold py-2 border-1 ">Total</th>
            </tr>
          </thead>

          {/* map of the order history info from function above */}
          {orders
            ? orders.map((order) => (
                <tr key={order._id}>
                  <td>
                    {order._id}
                    {/* {order.products.map((product) => product.name).join(", ")} */}
                  </td>
                  <td>
                    {new Date(Number(order.purchaseDate)).toLocaleDateString()}
                  </td>
                  <td>{order.total_price !== undefined ? `$${order.total_price.toFixed(2)}` : ''}</td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </>
  );
}

export default OrderHistory;
