// src/pages/Project.jsx
import Card from "../components/Card";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Card title="Portfolio Website" desc="React project" />
        <Card title="Blog App" desc="Reusable components" />
      </div>
    </div>
  );
}