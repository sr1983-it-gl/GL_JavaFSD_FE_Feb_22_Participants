
import axios from "axios";
import IExpenseItem, {IExpenseCreateItem} from "../models/expense";

const getAllExpenseItems = async () => {

  const getItemsUrl = "http://localhost:4001/items";
  console.log(getItemsUrl);

  const responseData = await axios.get<IExpenseItem[]>(getItemsUrl);
  return responseData.data;
}

const postExpenseItem = async (expenseCreateItem : IExpenseCreateItem) => {

  const postItemsUrl = "http://localhost:4001/items";
  console.log(postItemsUrl);

  const responseData = await axios.post<IExpenseItem>(
    postItemsUrl, expenseCreateItem,
    {
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  );
  return responseData.data;
}

export {getAllExpenseItems, postExpenseItem};