export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.info?.name ?? 'default name'}</strong>
            <p>{props.info?.description ?? 'default description'}</p>
            <a href={props.info?.link ?? 'default link'}>Acessar repositório</a>
        </li>
    )
}