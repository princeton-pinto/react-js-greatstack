import React from 'react'

export const FirstComponent = ({data, fn}) => {
  return (
    <div>
        <br />
        <button onClick={() => {fn(10)}}>Set 10</button>
        <br />
        {data}
    </div>
  )
}
