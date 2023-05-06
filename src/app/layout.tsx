import StyledJsxRegistry from '@/components/StyledJsxRegistry';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

interface Props {
  children: ReactNode;
}

const font = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledJsxRegistry>{props.children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
