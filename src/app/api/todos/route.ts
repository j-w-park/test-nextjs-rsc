import { db } from '@/lib/db';
import { Todo } from '../types';

export async function POST(request: Request) {
  const body = (await request.json()) as Pick<Todo, 'description' | 'title'>;
  try {
    await db.query(
      'INSERT INTO todos (title, description, status) VALUES ($1, $2, $3)',
      [body.title, body.description, 'NOT_STARTED'],
    );
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
  return new Response(null, { status: 201 });
}
