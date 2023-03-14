import { create } from 'zustand'

export const useHolidayStore = create((set) => ({
    countryCode: '',
    setCountryCode: (code: string) => set({ countryCode: code }),
}))
