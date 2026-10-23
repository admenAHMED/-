import { Card, Button } from '@travel/ui';

export default function Page() {
  return (
    <main style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
      <h1>Operations dashboard</h1>
      <p>Order pipeline, provider queue, settlements, and commission tracking.</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Review orders</Button>
        <Button variant="secondary">Generate report</Button>
      </div>
      <Card title="Today overview">
        <ul>
          <li>214 bookings</li>
          <li>18 pending settlements</li>
          <li>4 provider issues</li>
        </ul>
      </Card>
    </main>
  );
}
