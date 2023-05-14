import Link from 'next/link';

export const Header = () => {
  return (
    <aside id="app-header">
      <h1>React Server Component Test</h1>
      <nav>
        <ul id="app-header-container-link">
          <li>
            <Link id="app-header-link" href="./todo">
              Todo
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
