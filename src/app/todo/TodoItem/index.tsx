import { Todo } from '@/app/api/types';

interface Props {
  todo: Todo;
}

export const TodoItem = (props: Props) => {
  return <p>{props.todo.title}</p>;
};
