'use client';

import { ReactNode, useState } from 'react';

import { AppContext } from './AppProvider';
import { Tform } from '../domain/form';

export default function AppService({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState({} as Tform);

  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      <body>{children}</body>
    </AppContext.Provider>
  );
}
