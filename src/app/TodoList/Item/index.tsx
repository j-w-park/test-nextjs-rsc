'use client';

import { Todo } from '@/app/api/types';

interface Props {
  todo: Todo;
}

export default function Item(props: Props) {
  return <p>{props.todo.title}</p>;
}
