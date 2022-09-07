import { useNavigate } from 'react-router-dom'

export function useRepositoriesService() {
    const navigate = useNavigate()

    const selectRepo = ({ name, defaultBranchRefName }) => navigate(`/${name}~${defaultBranchRefName}`)

    return {
        selectRepo
    }
}
