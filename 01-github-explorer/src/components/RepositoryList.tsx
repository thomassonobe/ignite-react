import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}
function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  useEffect(() => {
    fetch('https://api.github.com/users/thomassonobe/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem repository={repository} key={repository.name} />)}
      </ul>
    </section>
  )
}

export default RepositoryList;