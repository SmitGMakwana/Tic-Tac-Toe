import "./App.css";
import Board from "./Board";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          project-Tic Tac Toe 🎮
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
