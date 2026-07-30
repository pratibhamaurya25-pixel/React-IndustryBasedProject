import "../styles/loader.css"

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading tickets...</p>
    </div>
  );
}

export default Loader;