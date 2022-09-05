import { atomWithStorage } from 'jotai/utils'
import create from 'zustand/vanilla'
import { atomWithStore } from 'jotai/zustand'

export const personalAccessTokenAtom = atomWithStorage(
    'personal-access-token',
    localStorage.getItem('personal-access-token')
)

const repoStore = create(set => ({
    repositoryName: '',
    setRepositoryName: v => set({ repositoryName: v }),
    branchName: '',
    setBranchName: v => set({ branchName: v }),
    currentPath: [],
    setCurrentPath: v => set({ currentPath: v }),
    selectedFile: '',
    setSelectedFile: v => set({ selectedFile: v })
}))

export const repoStoreAtom = atomWithStore(repoStore)
