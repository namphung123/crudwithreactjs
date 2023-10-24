import { useState } from 'react'

const Form = ({ addItem }) => {
  const [newItems, setNewItems] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return
    addItem(newItems)
    setNewItems('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button type="submit" className="btn">
          Add btn
        </button>
      </div>
    </form>
  )
}

export default Form
