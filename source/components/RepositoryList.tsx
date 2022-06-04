import { RepositoryItem } from "./RepositoryItem";
import "../css/repositores.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositores, setRepositores] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Rafael-Machado01/repos")
      .then((response) => response.json())
      .then((data) => setRepositores(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositores.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
