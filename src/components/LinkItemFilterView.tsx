import { LinkFilter } from "../types/LinkFilter"

interface LinkItemFilterViewProps {
    filters : LinkFilter[],
    onClickFilter : (filter : string, isChecked : boolean) => void
}

export default function LinkItemFilterView (
{
    filters,
    onClickFilter
} : LinkItemFilterViewProps) {


    return (
        <div>
            <p className="text-slate-900 font-semibold">
                Filter Links
            </p>
            {filters.map(
                (filter) => (
                    <div className="flex">
                        <p
                        key= {filter.topic}
                        className="text-slate-900 mx-1">
                            {filter.topic}
                        </p>
                        <input
                        onChange= {(e) => onClickFilter(filter.topic, e.target.checked)}
                        type="checkbox" />

                    </div>
                )
            )}
        </div>
    )
}
