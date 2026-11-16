import { useEffect } from 'react';
import { profile } from '../data/profile';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${profile.name} · ${profile.role}`;
  }, [title]);
}
