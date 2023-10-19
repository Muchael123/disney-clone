import Image from 'next/image'
import Header from '@/src/components/Header'
import Brand from '@/src/components/Brand'
import Slider from '@/src/components/Slider'

export default function Home() {
  return (
  <div >
      <Header />
      <main>
        <Slider />
        <Brand />
      </main>
  </div>
  )
}
