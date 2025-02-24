import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

export const metadata = {
  title: "Real Estate Listings",
  description: "A helpful website to list available homes for sale or rent.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
