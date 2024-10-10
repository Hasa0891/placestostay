import "./resources/globals.css";

export const metadata = {
  title: "Places to Stay",
  description: "Place Booking Website",
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
