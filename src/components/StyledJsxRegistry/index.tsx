'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { ReactNode, useState } from 'react';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

interface Props {
  children: ReactNode;
}
export default function StyledJsxRegistry(props: Props) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(createStyleRegistry);

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return (
    <StyleRegistry registry={jsxStyleRegistry}>{props.children}</StyleRegistry>
  );
}
