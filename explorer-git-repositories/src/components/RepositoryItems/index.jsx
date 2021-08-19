import './index.css'

export function RepositoryItems(props) {
  return (
    <li>
      <p className="repo-name">{props.repository.name}</p>

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
