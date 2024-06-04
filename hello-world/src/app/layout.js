
export default function RootLayout(props) {
  return <html lang="en">
    <body>
      <div>
        {props.children}
      </div>
    </body>
  </html>
}