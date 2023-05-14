'use client';

import axios from 'axios';
import useSWR from 'swr';
import { Todo } from '../api/types';
import Item from './Item';
import styles from './index.module.css';

export default function TodoList() {
  const todos = useSWR('/api/todos', (path) =>
    axios.get<ReadonlyArray<Todo>>(path).then(({ data }) => data),
  );

  return (
    <ul className={styles['container-todo']}>
      {todos.data?.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
