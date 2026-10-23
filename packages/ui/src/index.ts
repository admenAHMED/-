import * as React from 'react';

export function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const styles = {
    background: variant === 'primary' ? '#0f172a' : '#e2e8f0',
    color: variant === 'primary' ? '#fff' : '#0f172a',
    border: 'none',
    borderRadius: 8,
    padding: '0.7rem 1.1rem',
    cursor: 'pointer',
    fontWeight: 600,
  } as const;

  return <button style={styles}>{children}</button>;
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem' }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  );
}
