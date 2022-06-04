import { Copy } from "./components/Copyright";
import { RepositoryList } from "./components/RepositoryList";
import "./css/global.scss";

export function App() {
  return (
    <>
      <RepositoryList />
      <Copy />
    </>
  );
}
