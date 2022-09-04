import { atomWithStorage } from 'jotai/utils'

export const personalAccessTokenAtom = atomWithStorage(
    'personal-access-token',
    localStorage.getItem('personal-access-token')
)