import React from 'react'
import './Transactions.css'

export const TransactionHistory = ({items}) => {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => 
  (
     <tr key={item.id}>
     <td>{item.type}</td>
     <td>{item.amount}</td>
     <td>{item.currency}</td>
   </tr>
  ))
  }
  </tbody>
</table>
  )
}


// {id, type, amount, currency}