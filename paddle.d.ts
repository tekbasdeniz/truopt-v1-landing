export {};

declare global {
  interface Window {
    Paddle?: {
      Initialize: (options: { token: string; environment?: 'sandbox' | 'production' }) => void;
      PricePreview: (request: {
        items: Array<{ priceId: string; quantity: number }>;
        address?: { countryCode: string };
      }) => Promise<any>;
      Checkout?: {
        open: (options: {
          items: Array<{ priceId: string; quantity: number }>;
          settings?: {
            displayMode?: 'overlay' | 'inline';
            theme?: 'light' | 'dark';
            locale?: string;
          };
        }) => void;
      };
    };
  }
}