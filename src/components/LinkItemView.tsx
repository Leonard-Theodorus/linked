import { LinkItem } from "../types/LinkItem";

interface LinkItemViewProps {
    link : LinkItem,
    onClickLinkItem : (link : string) => void,
    onDeleteLinkItem : (id : number) => void
}

export default function LinkItemView (
{
    link,
    onClickLinkItem,
    onDeleteLinkItem

} : LinkItemViewProps) {
    
    return (
        <div 
        className="border border-gray-200 rounded-md space-y-2"
        onClick= {
            (e) => {
                e.preventDefault();
                onClickLinkItem(link.link)
            }
        }
        >
            <p className="font-bold text-xl text-slate-900">
                {link.title}
            </p>
        </div>
    )
}
