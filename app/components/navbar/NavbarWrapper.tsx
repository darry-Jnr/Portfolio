'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const HIDE_NAVBAR_ON = ['/not-found', '/_not-found'];

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hide = HIDE_NAVBAR_ON.includes(pathname);
  if (hide) return null;
  return <Navbar />;
}