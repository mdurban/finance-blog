import React from 'react'

const HamburgerMenu = ({ countFromState, increment }) => (
    <>
    <div onClick={() => increment(countFromState)}>Click</div>
    <div>Count is: {countFromState}</div>
    </>
)

export default HamburgerMenu