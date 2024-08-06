import { LinkItem } from "../types/LinkItem";
import LinkItemView from "./LinkItemView";

interface LinksViewProps {
    links : LinkItem[],
    onClickLinkItem : (link : string) => void,
    onDeleteLinkItem : (id : number) => void
}

export default function LinksView (
{
    links,
    onClickLinkItem,
    onDeleteLinkItem
} : LinksViewProps) {

    return (
        <div className="flex">
            {links.map(
                (link) => (
                    <LinkItemView
                        link={link}
                        onClickLinkItem= {onClickLinkItem}
                        onDeleteLinkItem= {onDeleteLinkItem}

                    />
                )
            )}
        </div>
    )
}
