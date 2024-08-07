import { useState } from "react"


interface NewLinkItemProps{
    link : string,
    title : string,
    topic : string,
    topics : string[],
    onSubmitNewLink : (newLink : string, newTitle : string, newTopic : string) => void
}

export default function NewLinkItemView (
{
    link,
    title,
    topic,
    topics,
    onSubmitNewLink
} : NewLinkItemProps) {
    

    const [newLink, setNewLink] = useState(link)
    const [newTitle, setNewTitle] = useState(title) 
    const [newTopic, setNewTopic] = useState(topic) 


    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmitNewLink(newLink, newTitle, newTopic)
        setNewLink("")
        setNewTitle("")
        setNewTopic(topics[0])
    }

    function checkLink() : boolean {
        if (newLink.startsWith("https://") || newLink.startsWith("http://")) {
            return true
        }
        return false
    }

    function handleTopicSelected (selectedTopic : string) {
        setNewTopic(selectedTopic)
    }

    function checkTitleAndTopic (title : string, topic : string) {
        if (title.trim().length !== 0 && topic.trim().length !== 0) {
            return true
        }
        return false
    }

    return (
        <form 
        className="flex flex-col"
        onSubmit={handleSubmit}
        >
            <div className="flex">
                <input
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                placeholder="Type in the link to save"
                className="grow border border-gray-400 rounded-md p-2"
                />
            </div>

            {checkLink() && (
                <div className="flex">
                    <input 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Title for this link"
                    className="border border-gray-400 rounded-md p-2 mx-2"
                    />
                    <select 
                    className="border border-gray-400 rounded-md"
                    value= {newTopic}
                    key={topic}
                    onChange= {(e) => handleTopicSelected(e.target.value)}>
                        {topics.map(
                            (topic) => (
                                <option value={topic}>{topic}</option>
                            )
                        )}
                    </select>

                </div>
            )}

            {checkTitleAndTopic(newTitle, newTopic) && (
                <button 
                type="submit"
                className="rounded-md border bg-slate-900 text-white p-2 my-2"
                >
                    Save link
                </button>
            )}
            
            
        </form>
    )
}
