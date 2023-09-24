import "./App.css";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
import MainStatistics from "./components/MainStatistics";

function App() {
  return (
    <div className="flex">
      <div className="bg-white min-w-[250px] px-4 py-6">
        <Menu />
      </div>
      <div className="bg-slate-100 w-full h-screen px-8 py-4">
        <TopBar />
        <p className="text-slate-800 text-2xl font-bold mt-10">
          Welcome, Dr. Stephen
        </p>
        <p className="text-slate-500">Have a nice day at great work</p>
        <MainStatistics />
      </div>
    </div>
  );
}

export default App;
