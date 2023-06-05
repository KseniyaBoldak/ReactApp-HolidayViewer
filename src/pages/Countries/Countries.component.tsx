import {
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'
import usePagination from '../../screens/Pagination/usePagination'
import Pagination from '../../screens/Pagination'
import key from 'weak-key'
import CountriesForHolidaysApi from '../../api/CountriesForHolidays.api'
import './countries.style.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Flag from '../../components/Flag'

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

    //initialize countries
    useEffect(() => {
        CountriesForHolidaysApi.getCountries()
            .then(setCountries)
            .catch((e) => console.log(e))
    }, [])

    const updateCountry = useCallback(
        (event: { target: { value: SetStateAction<string> } }) =>
            searchCountry(event.target.value),
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

    if (!getCountryCode || !getCountryName) return null

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
                    .map((field: any) => {
                        return (
                            <Button
                                onClick={() => {
                                    getCountryCode(field.countyCode)
                                    getCountryName(field.name)
                                }}
                                text={field}
                                key={key(field)}
                                children={
                                    <Flag
                                        countryCode={field.countryCode}
                                        country={field.name}
                                    />
                                }
                            />
                        )
                    })}
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
