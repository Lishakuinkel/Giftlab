// import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "./OrderHistory.css";
import { QUERY_ORDER } from "../../utils/queries";

function OrderHistory() {
  // const orderHistory=[
  //   // order:
  //   // date:
  //   // price:
  // ]

  // TODO: Use the useQuery hook from apollo to get order history data from the back-end
  const { data, loading } = useQuery(QUERY_ORDER);
  const orders = data ? data.user.orders : null;

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
                <tr>
                  <td>
                    {order.products.map((product) => product.name).join(", ")}
                  </td>
                  <td>
                    {new Date(
                      Date.parse(Number(order.purchaseDate))
                    ).toString()}
                  </td>
                  <td></td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
