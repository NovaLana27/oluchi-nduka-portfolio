export default function Sidebar({ setPage }) {
  return (
    <div style={styles.sidebar}>
      <p onClick={() => setPage("home")}>Home</p>
      <p onClick={() => setPage("about")}>About</p>
      <p onClick={() => setPage("projects")}> Projects</p>
      <p onClick={() => setPage("contact")}>Contact</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#a3a3d8",
    color: "white",
    height: "100vh",
    padding: "20px"
  }
};