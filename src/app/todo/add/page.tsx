'use client';

import { Todo } from '@/app/api/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useMutation from 'swr/mutation';

export default function AddTodo() {
  const router = useRouter();

  const signUp = useMutation(
    '/api/todos',
    (path, { arg }: { arg: Pick<Todo, 'description' | 'title'> }) =>
      axios.post(path, arg),
    {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: () => {
        router.replace('/todo');
        // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#soft-navigation
        // https://github.com/vercel/next.js/issues/42991
        // https://github.com/vercel/next.js/issues/42546
        router.refresh();
      },
    },
  );

  return (
    <main className="container-main">
      <h1>New Todo</h1>
      <form
        id="form-add-todo"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get('title') as string;
          const description = formData.get('description') as string;
          signUp.trigger({ title, description });
        }}
      >
        <div id="form-add-todo-title">
          <label htmlFor="title">title</label>
          <input required id="title" name="title" />
        </div>
        <div id="form-add-todo-description">
          <label htmlFor="description">description</label>
          <textarea required id="description" name="description" rows={10} />
        </div>
        <button type="submit" disabled={signUp.isMutating}>
          add
        </button>
      </form>
    </main>
  );
}
