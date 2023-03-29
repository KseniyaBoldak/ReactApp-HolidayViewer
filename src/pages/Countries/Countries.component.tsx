import { useEffect, useMemo, useState } from 'react'
import usePagination from '../../common/hooks/usePagination'
import Pagination from '../../screens/Pagination'
import key from 'weak-key'
import CountriesForHolidaysApi from '../../api/CountriesForHolidays.api'
import './countries.style.css'
import Button from '../../components/Button'
import Input from '../../components/Input'

export type CountriesProps = {
    getCountryCode?: React.Dispatch<any>
    getCountryName?: React.Dispatch<any>
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

    useEffect(() => {
        CountriesForHolidaysApi.getCountries()
            .then(setCountries)
            .catch((e) => console.log(e))
    }, [])

    const searchedCountry = useMemo(() => {
        if (search) {
            return country.filter((field: any) =>
                field.name.toLowerCase().includes(search.toLowerCase())
            )
        }
        return country
    }, [search, country])

    return (
        <article className="countries" {...otherProps}>
            <div className="countries__searchLine">
                <h2 className="countries__searchLine__name">
                    Begin your search with a country:
                </h2>
                <Input
                    onChange={(event) => searchCountry(event.target.value)}
                />
            </div>
            <div className="countries__searchedCountry">
                {searchedCountry
                    .slice(firstContentIndex, lastContentIndex)
                    .map((field: any) => {
                        return (
                            <Button
                                field={field}
                                getCountryCode={getCountryCode}
                                getCountryName={getCountryName}
                                key={key(field)}
                            />
                        )
                    })}
            </div>
            <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </article>
    )
}
