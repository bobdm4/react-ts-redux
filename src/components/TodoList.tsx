import React, { useEffect } from 'react'
import { useTypedSelector } from './../hooks/useTypedSelector'
import { useAction } from './../hooks/useAction'

export const TodoList: React.FC = () => {
  const { page, error, loading, limit, todos } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTogoPage } = useAction()
  const pages = [1, 2, 3, 4, 5]
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.id}- {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map(p => (
          <div
            onClick={() => setTogoPage(p)}
            style={{ border: p === page ? '2px solid teal' : '1px solid gray', padding: '5px' }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}
