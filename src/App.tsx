import { Box } from "./components/Box"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header>
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
        <span>Found 123 top results</span>
      </Header>
      <div className="my-3 mx-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-fit">
          <Box title="Movies">Movies list</Box>
        </div>

        <div className="h-fit">
          <Box title="Movies Watched">Watched Movies list</Box>
        </div>
      </div>
    </>
  )
}

export default App
