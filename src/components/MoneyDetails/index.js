import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="moneyContainer">
      <div className="greenContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="imgElement"
        />
        <div>
          <p className="element">Your Balance</p>
          <p testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="blueContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="imgElement"
        />
        <div>
          <p className="element">Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="violetContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="imgElement"
        />
        <div>
          <p className="element">Your Expenses</p>
          <p testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
