'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface Menu {
  readonly title: string;
  readonly href: string;
}

export const Header = () => {
  const pathname = usePathname();

  const menus: ReadonlyArray<Menu> = useMemo(() => {
    switch (pathname) {
      case '/':
        return [{ title: 'Todo', href: '/todo' }];
      case '/todo':
        return [{ title: 'Add', href: '/todo/add' }];
      default:
        return [];
    }
  }, [pathname]);

  return (
    <aside id="app-header">
      <h1>
        <Link className="app-header-link" href="/">
          React Server Component Test
        </Link>
      </h1>
      <nav id="app-header-nav">
        {menus.map((menu) => (
          <Link className="app-header-link" key={menu.href} href={menu.href}>
            {menu.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
