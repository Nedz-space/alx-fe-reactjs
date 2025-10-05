import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-center mt-6">GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
