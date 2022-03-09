import React from 'react'
import { useTypedSelector } from './../hooks/useTypedSelector'

export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  console.log('state', users)
  return <div>UserList</div>
}
