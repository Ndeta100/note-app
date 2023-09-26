'use client'
import {NextUIProvider} from "@nextui-org/react";
import {Notes} from "@/components/note/Notes";
export default function Home() {
  return (
      <NextUIProvider>
          <main className='dark text-foreground bg-background'>
              <Notes/>
          </main>
      </NextUIProvider>
  )
}
