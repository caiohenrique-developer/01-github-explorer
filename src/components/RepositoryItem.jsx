export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repositoryInfo?.name ?? 'Default name'}</strong>
            <p>{props.repositoryInfo?.description ?? 'Default description'}</p>
            <a target="_blank" href={props.repositoryInfo?.html_url ?? '#'}>Acessar repositório</a>
        </li>
    )
}