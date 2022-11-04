import IExpenseItem from "../models/expense"
import {Table} from "react-bootstrap";
import {getAllPayeeNames} from "../services/expense-utils"

type ExpenseByPayeeModel = {

  expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeeModel) => {

  const getTotalExpenseByPayee = (payeeName : string) => {

    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

      if (expenseItem.payeeName === payeeName){
        totalExpense += expenseItem.price;
      }
    })

    return totalExpense;
  }

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Payee Name</th>
          <th>Total Expense</th>
        </tr>
      </thead>
      <tbody>
        {
          getAllPayeeNames(expenseItems).map((payeeName, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{payeeName}</td>
              <td>{getTotalExpenseByPayee(payeeName)}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>

  )
}

export {ExpenseByPayees};