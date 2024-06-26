import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../UseContextHook'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
  <div>
     User is {user} and channel is {channel}
  </div>)
}

export default ComponentE
