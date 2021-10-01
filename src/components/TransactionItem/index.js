import './index.css'

const TransactionItem = props => {
  const {details, deleteElement} = props
  const {id, title, amount, type} = details
  const deleteFunction = () => {
    deleteElement(id)
  }
  return (
    <div className="itemBox">
      <p className="item">{title}</p>
      <p className="salaryItem">Rs {amount}</p>
      <p className="item">{type}</p>
      <button type="button" onClick={deleteFunction} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="transactionImg"
          testid="delete"
        />
      </button>
    </div>
  )
}

export default TransactionItem
