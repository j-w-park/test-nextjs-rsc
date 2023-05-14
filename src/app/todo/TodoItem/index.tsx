import { Todo } from '@/app/api/types';
import { format } from 'date-fns';

interface Props {
  todo: Todo;
}

export const TodoItem = (props: Props) => {
  const formattedCreatedAt = format(
    props.todo.created_at,
    'yyyy-MM-dd HH:mm:ss',
  );
  const formattedUpdatedAt = format(
    props.todo.updated_at,
    'yyyy-MM-dd HH:mm:ss',
  );
  return (
    <li className="item">
      <h2 id="title">{props.todo.title}</h2>
      <p id="description">{props.todo.description}</p>
      <p id="status">{props.todo.status}</p>
      <small id="created_at">CREATED: {formattedCreatedAt}</small>
      <small id="updated_at">UPDATED: {formattedUpdatedAt}</small>
    </li>
  );
};
