import Country from './Country/Country.component'
import usePagination from '../../screens/Pagination/usePagination'
import Pagination from '../../screens/Pagination'
import Input from '../../components/Input'

import CountriesForHolidaysApi from '../../api/CountriesForHolidays.api'
import {
    type SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'

import './Countries.style.css'
import './Flag.style.css'

export type CountriesProps = {
    getCountryCode?: (value: string) => void
    getCountryName?: (value: string) => void
    countries?: any
    onCountryNameChange?: React.Dispatch<any>
}

export default function Countries(props: CountriesProps) {
    const [country, setCountries] = useState<any>([])
    const [search, searchCountry] = useState<string>('')
    const { getCountryCode, getCountryName, ...otherProps } = props
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 12,
        count: country.length,
    })

    // initialize countries
    useEffect(() => {
        CountriesForHolidaysApi.getCountries()
            .then(setCountries)
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const updateCountry = useCallback(
        (event: { target: { value: SetStateAction<string> } }) => {
            searchCountry(event.target.value)
        },
        []
    )

    const searchedCountry = useMemo(() => {
        if (search) {
            return country.filter((field: any) =>
                field.name.toLowerCase().includes(search.toLowerCase())
            )
        }
        return country
    }, [search, country])

    if (getCountryCode == null || getCountryName == null) return null

    return (
        <article className="countries" {...otherProps}>
            <div className="countries__searchLine">
                <h2 className="countries__searchLine__name">
                    Begin your search with a country:
                </h2>
                <Input
                    className="__countries-search"
                    onChange={updateCountry}
                />
            </div>
            <div className="countries__searchedCountry">
                {searchedCountry
                    .slice(firstContentIndex, lastContentIndex)
                    .map((field: any) => (
                        <Country
                            field={field}
                            onClick={() => {
                                getCountryCode(field.countyCode)
                                getCountryName(field.name)
                            }}
                        />
                    ))}
            </div>
            <Pagination
                contentPerPage={12}
                count={country.length}
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </article>
    )
}
