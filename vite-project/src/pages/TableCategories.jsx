
export default function TableCategories() {
    return (
        <div className="relative overflow-x-auto">
            <p className="text-center text-2xl font-semibold">Category List</p>
            <div className="flex justify-center">

                <table className="text-center max-w-full w-200 text-sm rtl:text-right text-black border border-black">
                    <tr className="border border-black">
                        <th>NAME</th>
                    </tr>
                    <tr>
                        <td>APPETIZER</td>

                    </tr>
                </table>
            </div>
        </div>

    )
}