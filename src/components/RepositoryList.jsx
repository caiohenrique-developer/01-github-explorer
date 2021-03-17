import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repositoryInfo = {
    name: "unform8",
    description: "Forms in React",
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem info={repositoryInfo} />
                <RepositoryItem info={repositoryInfo} />
                <RepositoryItem info={repositoryInfo} />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}