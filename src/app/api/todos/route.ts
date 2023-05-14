import { db } from '@/repository/db';
import { Todo } from '../types';

export async function GET() {
  try {
    const { rows } = await db.query<Todo>('SELECT * FROM todos');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as Pick<Todo, 'description' | 'title'>;
  try {
    await db.query(
      'INSERT INTO todos (title, description, status) VALUES ($1, $2, $3)',
      [body.title, body.description, 'NOT_STARTED'],
    );
    return new Response(null, { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}

export async function DELETE() {
  try {
    await db.query('TRUNCATE TABLE todos');
    return new Response(null, { status: 204 });
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
