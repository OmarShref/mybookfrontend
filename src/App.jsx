import Books from "./components/Books";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="bg-gradient-to-tl from-purple-500 to-rose-300 p-4 font-poppins md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white px-4 py-4 shadow-lg sm:px-8">
          <Nav />
          <Landing />
          <Books />
        </div>
      </div>
    </>
  );
}

export default App;
