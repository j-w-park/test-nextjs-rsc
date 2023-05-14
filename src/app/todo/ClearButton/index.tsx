'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import useMutation from 'swr/mutation';

export const ClearButton = () => {
  const router = useRouter();
  const clear = useMutation('/api/todos', (path) => axios.delete(path), {
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      router.refresh();
    },
  });
  return (
    <button type="button" onClick={() => clear.trigger()}>
      clear
    </button>
  );
};
