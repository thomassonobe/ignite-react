import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'
const repository = {
  name: "unform3",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
}

//https://api.github.com/users/thomassonobe/repos

function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/thomassonobe/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

export default RepositoryList;