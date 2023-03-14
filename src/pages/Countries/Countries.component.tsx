import { useEffect, useMemo, useState } from 'react'
import usePagination from '../../common/hooks/usePagination'
import DatenagerApi from '../../api/Datenager.api'
import Country from '../../components/Country/Country.component'
import Pagination from '../../components/Pagination/Pagination.component'
import key from 'weak-key'
import './countries.style.css'

export type CountriesProps = {
    getCountryCode?: React.Dispatch<any>
    getCountryName?: React.Dispatch<any>
}

const Countries = (props: CountriesProps) => {
    const [country, setCountries] = useState<any>([])
    const [search, searchCountry] = useState<string>('')
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

    const getCountries = async () => {
        try {
            const responseData = await DatenagerApi.get(
                '/api/v3/AvailableCountries'
            )
            const countries = responseData.data
            setCountries(countries)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCountries()
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
        <>
            <article className="countries">
                <div className="countries__searchLine">
                    <h2 className="countries__searchLine__name">
                        Begin your search with a country:
                    </h2>
                    <input
                        className="countries__searchLine__input"
                        onChange={(event) => searchCountry(event.target.value)}
                    />
                </div>
                <div className="countries__searchedCountry">
                    {searchedCountry
                        .slice(firstContentIndex, lastContentIndex)
                        .map((field: any) => {
                            return (
                                <Country
                                    field={field}
                                    getCountryCode={props.getCountryCode}
                                    getCountryName={props.getCountryName}
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
        </>
    )
}
Countries.displayName = 'Countries'
export default Countries
