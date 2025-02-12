import "./globals.css";

export const metadata = {
  title: "Real Estate Listings",
  description: "A helpful website to list available homes for sale or rent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
