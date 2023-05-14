import Link from 'next/link';

export const Header = () => {
  return (
    <aside id="app-header">
      <h1>Todo list</h1>
      <nav>
        <ul id="app-header-container-link">
          <li>
            <Link id="app-header-link" href="/add">
              Add
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
