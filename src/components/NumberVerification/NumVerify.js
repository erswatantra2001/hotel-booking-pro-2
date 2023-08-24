import React from 'react'

export default function NumVerify(props) {
  return (
    <div>
      <div className="form">
      <form>
      <h1>Verify Number</h1>
      <label> Phone No.
      </label><br />
      <input type="text" value={props.phone}/><br /><br />
      <label htmlFor="">
      OTP
      </label><br /><br />
      <input type="text" placeholder='OTP'/><br /><br />
      <button> Verify</button>
      </form>
      </div>
    </div>
  )
}
