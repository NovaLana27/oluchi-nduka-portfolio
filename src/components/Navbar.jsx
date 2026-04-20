export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>Oluchi Nduka</h2>
      <p>Portfolio</p>
    </div>
  );
}

const styles = {
  nav: {
    background: "#a3a3d8",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between"
  }
};