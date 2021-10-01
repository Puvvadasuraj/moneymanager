import {Component} from 'react'
import {v4 as uid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onType = event => {
    this.setState({type: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeList = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newItem = {
      id: uid(),
      title,
      amount: parseInt(amount),
      type,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newItem],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {historyList} = this.state
    let income = 0
    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].optionId) {
        income += eachItem.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0
    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].optionId) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let income = 0
    let expenses = 0
    let balance = 0
    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].optionId) {
        income += eachItem.amount
      } else {
        expenses += eachItem.amount
      }
    })
    balance = income - expenses
    return balance
  }

  onDelete = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(each => each.id !== id)
    this.setState({
      historyList: updatedList,
    })
  }

  render() {
    const {title, amount, historyList} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance()

    return (
      <div className="container">
        <div className="img">
          <h1 className="name">Hi,Richard</h1>
          <p className="name">
            Welcome back to your
            <span className="spanElement"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="bottomPart">
          <form className="leftBox">
            <h1>Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              id="title"
              placeholder="TITLE"
              className="inputElement"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label htmlFor="amount" className="title">
              AMOUNT
            </label>
            <input
              id="amount"
              placeholder="AMOUNT"
              className="inputElement"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label htmlFor="type" className="title">
              TYPE
            </label>
            <select id="type" className="inputElement" onChange={this.onType}>
              <option value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button type="submit" className="but" onClick={this.onChangeList}>
              Add
            </button>
          </form>
          <div className="rightBox">
            <h1 className="transactionMainHead">History</h1>
            <ul className="transactionBox ulContainer">
              <li className="bottomPart">
                <p className="transactionHead">Title</p>
                <p className="transactionHead">Amount</p>
                <p className="type">Type</p>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem
                  details={eachItem}
                  key={eachItem.id}
                  deleteElement={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
