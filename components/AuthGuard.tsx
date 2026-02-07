"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn && ["/", "/dashboard", "/vault", "/portfolio"].includes(pathname)) {
        router.push('/login');
      }
    }
  }, [pathname, router]);
  return <>{children}</>;
}
