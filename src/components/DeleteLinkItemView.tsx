interface DeleteLinkItemViewProps {
    handleDrop : (e : React.DragEvent) => void
}

export default function DeleteLinkItemView (
{
    handleDrop
} : DeleteLinkItemViewProps) {

    return (
        <div 
        onDragOver= {(e) => e.preventDefault()}
        onDrop= {handleDrop}
        className="rounded-md p-2 border border-gray-300 bg-gray-700">

            <p className="text-center text-red-300">
                Delete Link
            </p>

        </div>
    )
}
