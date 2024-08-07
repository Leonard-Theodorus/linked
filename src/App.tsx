import { useEffect, useState } from 'react'
import './App.css'
import LinksView from './components/LinksView'
import { dummyLinks } from './data/LinkItemDummy'
import NewLinkItemView from './components/NewLinkItemView'
import { LinkItem } from './types/LinkItem'
import DeleteLinkItemView from './components/DeleteLinkItemView'
import LinkItemFilterView from './components/LinkItemFilterView'
import { linkFilters } from './data/LinkFilters'

function App() {
    let initialLinksState = dummyLinks

    const [links, setLinks] = useState(initialLinksState)
    const [filteredLinks, setFilteredLinks] = useState(initialLinksState)

    const [isDragging, setDragging] = useState(false)
    const [filters, setFilters] = useState(linkFilters)

    const topics : string[] = ["Informative", "Entertainment", "Misc"]
    let newTitle : string = ""
    let newLink : string = ""
    let newTopic : string = topics[0]


    function clickLinkItem (link : string) {
        window.open(link, '_blank');
    }

    function handleDrop (e : React.DragEvent) {
        e.preventDefault()
        setDragging(false)
        const toBeDeleted = parseInt(e.dataTransfer.getData("linkdel"))
        deleteLinkItem(toBeDeleted)
    }

    function deleteLinkItem (id : number) {
        setLinks (
            (prevLinks) => (
                prevLinks.filter(link => link.id !== id)
            )
        )
    }

    function submitNewLink (newLink : string, newTitle : string, newTopic : string) {
        const newLinkItem : LinkItem = {
            id : Date.now(),
            topic : newTopic,
            title : newTitle,
            link : newLink
        }
        setLinks([...links, newLinkItem])
    }

    function filterItems (filteredTopic : string, isChecked : boolean) {
        setFilters(
            (prevFilters) => (
                prevFilters.map(
                    (filter) => {
                        if (filter.topic === filteredTopic) {
                            filter.isChecked = isChecked
                        }
                        return filter
                    }
                )
            )
        )
    }

    useEffect( () => {
            const selectedFilters : string[] = filters.filter(
                (item) => item.isChecked
            ).map(
                (item) => item.topic
            )

            if (selectedFilters.length === 0) {
                setFilteredLinks(links)
            }
            else {
                const filteredLinkItems = links.filter(item => selectedFilters.includes(item.topic))
                //TODO: Find a better way to ensure the state is always the same
                setFilteredLinks(filteredLinkItems)
            }

        },
        [links, filters]
    )



    return (
        <main className='h-screen'>
            <div className='space-y-4 p-6'>
                <h1 className='text-center text-black text-4xl'>
                    Interwebs Breadcrumbs
                </h1>
            </div>

            <div className='flex justify-around '>
                <div className='flex-shrink w-1/4 ml-32'>
                    <LinkItemFilterView 
                        filters={filters}
                        onClickFilter={filterItems}
                    />

                </div>

                <div className='max-w-lg mr-auto space-y-4'>
                    <NewLinkItemView 
                        link= {newLink}
                        title= {newTitle}
                        topic= {newTopic}
                        topics = {topics}
                        onSubmitNewLink= {submitNewLink}
                    />

                    <DeleteLinkItemView 
                        handleDrop={handleDrop}
                    />

                    <LinksView 
                        links= {filteredLinks}
                        onClickLinkItem = {clickLinkItem}
                    />
                </div>

            </div>


        </main>
    )
}

export default App

