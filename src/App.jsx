import useClan from "./hooks/useClans";

function App() {
  const { data, error, loading } = useClan();
  console.log(data);
  return <div className="App">This is Clash of Clan</div>;
}

export default App;
