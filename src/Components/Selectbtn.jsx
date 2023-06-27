import React from 'react'

export default function Selectbtn() {
  return (
    <div className='mx-2'>
      <div className="btn-group">
  <input type="radio" name="options" data-title="Popular" className="btn" checked />
  <input type="radio" name="options" data-title="Newest" className="btn" />
</div>
    </div>
  )
}
