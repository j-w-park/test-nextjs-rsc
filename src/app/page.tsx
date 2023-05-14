import { db } from '@/repository/db';
import { Todo } from './api/types';
import { TodoItem } from './client-components/TodoItem';

export const dynamic = 'force-dynamic';

export default async function TodoList() {
  const { rows: todos } = await db.query<Todo>('SELECT * FROM todos');
  console.log('number of rows: ', todos.length);
  return (
    <main className="container-main">
      <h1>{new Date().toISOString()}</h1>
      <ul className="container-todo">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
