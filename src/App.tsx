import { useState } from 'react'
import './App.css'
import LinksView from './components/LinksView'
import { dummyLinks } from './data/LinkItemDummy'
import NewLinkItemView from './components/NewLinkItemView'

function App() {
    const [links, setLinks] = useState(dummyLinks)

    function clickLinkItem (link : string) {
        window.open(link, '_blank');
    }
    function deleteLinkItem (id : number) {
        setLinks (
            (prevLinks) => {

            }
        )
    }

    function submitNewLink () {

    }
    return (
        <main className='h-screen'>
            <div className='space-y-4 p-6'>
                <h1 className='text-center text-black text-4xl'>
                    Interwebs Breadcrumbs
                </h1>
            </div>

            <div className='max-w-lg mx-auto space-y-6'>
                <NewLinkItemView 
                    onSubmitNewLink={submitNewLink}
                />
                <LinksView 
                    links= {links}
                    onClickLinkItem = {clickLinkItem}
                    onDeleteLinkItem= {deleteLinkItem}
                />
            </div>

        </main>
    )
}

export default App

