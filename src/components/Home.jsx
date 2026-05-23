import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Loader from "./Loader";

export default function Home({ session, loading }) {
  return (
    <main className="flex flex-col gap-4 bg-steel-900">
      <Header />
      {loading ? <Loader /> : <HomeHero session={session} />}
      <Footer />
    </main>
  );
}
