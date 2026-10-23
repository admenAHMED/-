import { Card, Button } from '@travel/ui';

export default function Page() {
  return (
    <main style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
      <h1>Travel marketplace</h1>
      <p>Customer portal for flights, hotels, visas, and travel services.</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Book now</Button>
        <Button variant="secondary">Manage trip</Button>
      </div>
      <Card title="Featured offers">
        <ul>
          <li>Dubai package</li>
          <li>Visa processing</li>
          <li>Hotel upgrades</li>
        </ul>
      </Card>
    </main>
  );
}
