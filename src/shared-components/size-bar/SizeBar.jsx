import React from 'react'

const SizeBar = ({setLimit}) => {
    const handleSelectChange = (e)=>{
        const selectedLimit = parseInt(e.target.value);
        setLimit(selectedLimit)
    }
  return (
    <div className="items-per-page-container">
    <label htmlFor="itemsPerPage"></label>
    <select id="itemsPerPage" onChange={handleSelectChange}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
    </select>
</div>
  )
}

export default SizeBar