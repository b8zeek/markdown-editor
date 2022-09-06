import { useSetAtom } from 'jotai'
import { showSpinnerAtom } from '@/state'

export function useUIService() {
    const setShowSpinner = useSetAtom(showSpinnerAtom)

    const showSpinner = () => setShowSpinner(true)
    const hideSpinner = () => setShowSpinner(false)

    return {
        showSpinner,
        hideSpinner
    }
}
