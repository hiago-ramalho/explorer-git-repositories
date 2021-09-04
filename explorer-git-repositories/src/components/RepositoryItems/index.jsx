import './index.css'

export function RepositoryItems(props) {
  return (
    <li>
      <a
        className="repo-name"
        href={props.repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {props.repository.name}
      </a>

      <p className="repo-description">
        {props.repository.description ? props.repository.description : '. . .'}
      </p>

      <a
        className="button"
        href={props.repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Acesse o repositório
      </a>
    </li>
  )
}
