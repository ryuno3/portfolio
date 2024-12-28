import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="p-0 m-0">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
