import Link from 'next/link';
import './index.css';

export const Header = () => {
  return (
    <aside>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
