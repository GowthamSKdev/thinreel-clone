import { Link } from "react-router-dom";

export default function NotFountPage() {
  return (
    <section className="h-screen bg-slate-900 text-white">
      <h1>404.</h1>
      <p>Not Found Page.</p>
      <Link to={"/"}>Back Home</Link>
    </section>
  );
}
