"use client";

import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userName } = useUser();
  const router = useRouter();

  useEffect(() => {
    // This effect handles redirection if the user is definitively logged out.
    // It runs when userName or router changes.
    // The check `userName === null` is important because initially userName might be `undefined`
    // as the context loads. We only want to redirect if it's explicitly `null`.
    if (userName === null) {
      router.push('/login');
    }
  }, [userName, router]);

  // If userName is null (user is logged out), don't render children.
  // This prevents flashing content before redirection.
  if (userName === null) {
    return null; // Or a loading spinner
  }

  // If userName is still undefined (context might be loading, not yet determined if logged in or out),
  // also don't render children yet.
  // This handles the initial state before useEffect has a chance to run with a definitive userName.
  if (userName === undefined) {
     return null; // Or a loading indicator
  }

  // If userName is a non-empty string (user is logged in), render the children.
  // The check `if (!userName)` from the prompt is a bit broad if `undefined` means loading.
  // So, we explicitly check for `userName` being truthy (i.e. a string) here.
  if (userName) {
    return <>{children}</>;
  }

  // Fallback, should ideally be covered by previous checks (e.g. if userName becomes empty string)
  // but as a safeguard, return null.
  return null;
};

export default ProtectedRoute;
