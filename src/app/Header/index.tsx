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
      case '/todo/add':
        return [{ title: 'Back', href: '/todo' }];
      default:
        return [];
    }
  }, [pathname]);

  return (
    <aside id="app-header">
      <Link id="link-home" href="/">
        <h1>React Server Component Test</h1>
      </Link>
      <nav>
        {menus.map((menu) => (
          <Link className="link" key={menu.href} href={menu.href}>
            {menu.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
