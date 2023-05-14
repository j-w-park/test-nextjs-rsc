import Link from 'next/link';

export const Header = () => {
  return (
    <aside id="app-header">
      <h1>
        <Link className="app-header-link" href="/">
          React Server Component Test
        </Link>
      </h1>
      <nav>
        <ul id="app-header-container-link">
          <li>
            <Link className="app-header-link" href="./todo">
              Todo
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
