import Navbar from '@/components/Navbar';
import Hero from '../components/Hero'
export default function Home() {
  return (
    
    <>
    <Navbar />
    <main className="relative bg-black-100 flex justify-center items-center  h-screen  mx-auto overflow-hidden">
      <div className="">
        <Hero />
      </div>
    </main>

    </>
  );
}
