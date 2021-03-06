import React, { useEffect } from 'react'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'

export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  const { fetchUsers } = useAction()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
