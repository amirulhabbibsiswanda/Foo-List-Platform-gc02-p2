
export default function TableCuisines() {
    return (

        <div className="relative overflow-x-auto">
            <p className="text-center text-2xl font-semibold">Products List</p>
            <div className="flex justify-center">

                <table className="text-center max-w-full w-200 text-sm rtl:text-right text-black border border-black">
                    <tr className="border border-black">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Spring Rolls</td>
                        <td>ini deskripsi</td>
                        <td>harganya</td>
                        <td>nama kategori</td>
                        <td>
                            <button className="text-red-500 hover:cursor-pointer" type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Spring Rolls</td>
                        <td>ini deskripsi</td>
                        <td>harganya</td>
                        <td>nama kategori</td>
                        <td>
                            <button className="text-red-500 hover:cursor-pointer" type="button">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    )

}