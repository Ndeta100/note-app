'use client'
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
      <NextUIProvider>
          <main className='dark text-foreground bg-background'>
              <h1>Hi note app here</h1>
          </main>
      </NextUIProvider>
  )
}
