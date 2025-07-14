import { About, Footer, Instructions, Search } from "@/components";
import React from "react";

function page() {
  return (
    <main>
      <p>Donwload your favorites videos</p>
      <Search />
      <hr />
      <Instructions />
      <hr />
      <About />
      <hr />
      <Footer />
    </main>
  );
}

export default page;
