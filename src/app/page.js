import About from "./components/About";
import Form from "./components/ContactMe";
import Hero from "./components/Home";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Form />
    </div>
  );
}
