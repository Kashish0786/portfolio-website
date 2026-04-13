import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">

       {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="md:ml-64">

      <Navbar />

        <Hero />


        <Projects />

        <Contact />

    </div>
    </main>
  );
}
