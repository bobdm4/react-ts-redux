import React from 'react'
import { TodoList } from './components/TodoList'
import { UserList } from './components/UserList'

export const App = () => {
  return (
    <div>
      <UserList />
      <hr style={{ margin: '15px' }} />
      <TodoList />
    </div>
  )
}
