import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/authContext";
import { TodoProvider } from "@/context/todoDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Todo",
  description: "Created For Triluxo Technologies Private Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TodoProvider>
        {children}
        </TodoProvider>
        </AuthProvider>
        </body>
    </html>
  );
}
