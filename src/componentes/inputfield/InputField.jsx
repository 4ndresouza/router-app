import React from 'react'

export default function InputField() {
  return (

    <div className = "form-floating">
    <input
     type = {props.type}
className = "form-control"
id = {props.id}
placeholder={props.placeholder}
value={props.value}
onChange={this.props.onChange}/>
<label htmlFor="floatingInput">
    {props.label}
    </label>        
        </div>
  )
}
