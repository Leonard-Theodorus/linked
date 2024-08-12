import { LinkItem } from "../types/LinkItem";

interface LinkItemViewProps {
    link : LinkItem,
    onClickLinkItem : (link : string) => void,
}

export default function LinkItemView (
{
    link,
    onClickLinkItem,

} : LinkItemViewProps) {

    function handleOnDrag(e : React.DragEvent, linkToDelete : LinkItem) {
        const deleteId : string = String(linkToDelete.id)
        console.log("DELETING")
        console.log(linkToDelete)
        console.log(deleteId)
        e.dataTransfer.setData("linkdel", deleteId)
    }
    
    return (
        <div 
        draggable
        className="border
        border-gray-200 
        rounded-md space-y-2 
        max-w-64
        max-h-64
        px-2
        py-1
        hover:cursor-pointer"
        onDragStart= {
            (e) => handleOnDrag(e, link)
        }
        onClick= {
            (e) => {
                e.preventDefault();
                onClickLinkItem(link.link)
            }
        }
        >
            <p className="font-bold text-center text-xl text-slate-900">
                {link.title}
            </p>
        </div>
    )
}
