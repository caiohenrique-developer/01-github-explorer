import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface RepositoryState {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<RepositoryState[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/caiohenrique-developer/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repositoryInfo => <RepositoryItem key={repositoryInfo.name} repositoryInfo={repositoryInfo} />)}
            </ul>
        </section>
    )
}