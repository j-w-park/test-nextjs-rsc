import Link from 'next/link';
import './index.css';

export const Header = () => {
  return (
    <aside>
      <h1>Todo list</h1>
      <nav>
        <ul>
          <li>
            <Link href="/add">Add</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
