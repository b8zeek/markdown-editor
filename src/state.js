import { atomWithStorage } from 'jotai/utils'
import create from 'zustand/vanilla'
import { atomWithStore } from 'jotai/zustand'

export const personalAccessTokenAtom = atomWithStorage(
    'personal-access-token',
    localStorage.getItem('personal-access-token')
)

const initRepoState = {
    repositoryName: '',
    branchName: '',
    currentPath: [],
    selectedFile: ''
}

const repoStore = create(set => ({
    ...initRepoState,
    setRepositoryName: v => set({ repositoryName: v }),
    setBranchName: v => set({ branchName: v }),
    setCurrentPath: v => set({ currentPath: v }),
    setSelectedFile: v => set({ selectedFile: v }),
    resetRepoState: () => set({ ...initRepoState })
}))

export const repoStoreAtom = atomWithStore(repoStore)
