import { LinkItem } from "../types/LinkItem";
import LinkItemView from "./LinkItemView";

interface LinksViewProps {
    links : LinkItem[],
    onClickLinkItem : (link : string) => void,
}

export default function LinksView (
{
    links,
    onClickLinkItem,
} : LinksViewProps) {

    return (
        <div 
        className="grid grid-cols-4 gap-4 max-w-lg ">
            {links.map(
                (link) => (
                    <LinkItemView
                        link={link}
                        key= {link.id}
                        onClickLinkItem= {onClickLinkItem}

                    />
                )
            )}
        </div>
    )
}
