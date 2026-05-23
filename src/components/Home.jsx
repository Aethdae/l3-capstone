import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home({ session, loading }) {
  return (
    <main className="min-h-[60vh]">
      <Header />
      {loading ? <div>Loading...</div> : <div>Home</div>}
      <Footer />
    </main>
  );
}
