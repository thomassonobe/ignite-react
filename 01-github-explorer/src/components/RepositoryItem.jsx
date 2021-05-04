import React from 'react';

function RepositoryItem(props) {
  const { repository } = props
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}

export default RepositoryItem;