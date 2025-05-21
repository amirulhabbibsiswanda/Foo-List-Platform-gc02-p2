
export default function Loop(items) {

    return (
        <>
            {items.map((el) => {
                <div id="per-item" className="w-100 mt-5">
                    <img id="item-image" src={el.imageUrl} alt="" />
                    <div id="item-description" className="text-center py-4">
                        <p id="item-name" className="text-2xl font-bold">{el.name}</p>
                        <p id="item-description" className="text-xl font-normal">{el.description}</p>
                    </div>
                    <button type="button" className="text-blue-500 underline text-lg">menuju ke detail item</button>

                </div>
            })}

        </>
    )
}
