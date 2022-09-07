import styled from 'styled-components'

import { useRepositories } from '@hooks'

import { useRepositoriesService } from '@services'

import { Heading } from '@components'
import { RepoItem, PreloaderRepoItem } from './RepoItem'

export function RepositoriesPage() {
    const { selectRepo } = useRepositoriesService()

    const { data: repositories, loading } = useRepositories()

    console.log('REPOSITORIES:', repositories)

    return (
        <Container>
            <Heading>Repositories</Heading>
            <RepoContainer>
                {loading
                    ? Array(20)
                          .fill()
                          .map((_, index) => <PreloaderRepoItem key={index} />)
                    : repositories.map(repo => (
                          <RepoItem
                              key={repo.id}
                              name={repo.name}
                              url={repo.url}
                              createdAt={repo.createdAt}
                              updatedAt={repo.updatedAt}
                              onClick={selectRepo.bind(null, repo)}
                          />
                      ))}
            </RepoContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const RepoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
