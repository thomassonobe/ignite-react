interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  }
}

function RepositoryItem(props: RepositoryItemProps) {
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