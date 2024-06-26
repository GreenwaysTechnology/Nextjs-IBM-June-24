import { Inter } from "next/font/google";
import { Links } from "./components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {


    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="header">
                    <h1>Header</h1>
                    <hr />
                    {/* Nav Bar */}
                    <Links />
                </div>
                {children}
                <div id="footer">
                    <h3>footer</h3>
                </div>
            </body>
        </html>
    );
}
