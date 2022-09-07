import { useAtomValue } from 'jotai'
import { repoStoreAtom } from '@/state'

export function useRepositoryService() {
    const { currentPath, setCurrentPath, setSelectedFile } = useAtomValue(repoStoreAtom)

    const openFileOrFolder = (type, path) => (type === 'tree' ? setCurrentPath(path.split('/')) : setSelectedFile(path))
    const toFolder = index => setCurrentPath([...currentPath].splice(0, index + 1))
    const folderUp = () => setCurrentPath([...currentPath].splice(0, currentPath.length - 1))
    const toTheRootFolder = () => setCurrentPath([])
    const closeFile = () => setSelectedFile('')

    return {
        openFileOrFolder,
        toFolder,
        folderUp,
        toTheRootFolder,
        closeFile
    }
}
