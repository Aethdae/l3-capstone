import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Loader from "./Loader";

export default function Home({ session, loading, error }) {
  return (
    <main className="flex flex-col gap-4 bg-steel-900">
      <Header session={session} />
      {loading ? <Loader /> : <HomeHero session={session} />}
      <Footer />
    </main>
  );
}
