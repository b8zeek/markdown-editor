import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { atomWithStore } from 'jotai/zustand'
import create from 'zustand/vanilla'

export const personalAccessTokenAtom = atomWithStorage(
    'personal-access-token',
    localStorage.getItem('personal-access-token')
)

// const store = create({
//     selectedRepo: null
// })

// const storeAtom = atomWithStore(store)

export const selectedRepoAtom = atom(null)
