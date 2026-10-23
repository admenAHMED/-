export const appConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api',
  appName: 'Travel Marketplace ERP',
};

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}
