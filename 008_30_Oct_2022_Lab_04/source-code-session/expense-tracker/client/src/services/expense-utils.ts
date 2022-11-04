
import IExpenseItem from "../models/expense";

 const getAllPayeeNames = (expenseItems : IExpenseItem[]) => {

  const uniquePayeeNames : string[] = [];

  expenseItems.forEach((expenseItem) => {

    let payeeName = expenseItem.payeeName;

    if (!uniquePayeeNames.includes(payeeName)){
      uniquePayeeNames.push(payeeName);
    }
  })

  return uniquePayeeNames;
}

export {getAllPayeeNames}
