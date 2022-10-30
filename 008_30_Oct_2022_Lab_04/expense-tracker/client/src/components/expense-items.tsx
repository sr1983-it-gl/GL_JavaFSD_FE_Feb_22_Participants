
import { Table } from "react-bootstrap";

import IExpenseItem from "../models/expense"

type ExpenseItemsModel = {

  expenseItems: IExpenseItem[];
}

const ExpenseItems = ({ expenseItems }: ExpenseItemsModel) => {

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Expense Description</th>
          <th>Payee Name</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>

        {
          expenseItems.map((expenseItem, index) => (
            <tr key={expenseItem.id}>
              <td>{index + 1}</td>
              <td>{expenseItem.expenseDescription}</td>
              <td>{expenseItem.payeeName}</td>
              <td>{expenseItem.date.toString()}</td>
              <td>{expenseItem.price}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>


  )

}

export { ExpenseItems }