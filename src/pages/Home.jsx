import CTA from "../components/CTA";

export default function Home({ setPage }) {
  return (
    <div>
      <h1>Welcome 👋</h1>
      <p>I am Oluchi Nduka, a web developer.</p>
      <CTA setPage={setPage} />
    </div>
  );
}