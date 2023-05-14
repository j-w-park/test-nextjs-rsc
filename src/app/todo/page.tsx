import { db } from '@/repository/db';
import { Todo } from '../api/types';
import { ClearButton } from './ClearButton';
import { TodoItem } from './TodoItem';

// https://github.com/vercel/next.js/issues/41851
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Force dynamic rendering and dynamic data fetching of a layout or page by disabling all
// caching of fetch requests and always revalidating.
export const dynamic = 'force-dynamic';

export default async function TodoList() {
  const { rows: todos } = await db.query<Todo>('SELECT * FROM todos');
  console.log('number of rows: ', todos.length);
  return (
    <main className="container-main">
      <h1>{new Date().toISOString()}</h1>
      <ClearButton />
      <ul className="container-todo">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
