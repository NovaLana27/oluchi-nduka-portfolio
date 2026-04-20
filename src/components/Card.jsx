export default function Card({ title, desc }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)"
  }
};