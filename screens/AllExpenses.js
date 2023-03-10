import { useContext } from 'react';
import { ExpensesContext } from '../store/context';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  return <ExpensesOutput 
          period="Total"
          expenses={expensesContext.expenses}
          fallbackText="No registered expenses found"
        />
}

export default AllExpenses;