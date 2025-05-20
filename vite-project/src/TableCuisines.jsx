
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
                    </tr>
                    <tr>
                        <td>Spring Rolls</td>
                        <td>ini deskripsi</td>
                        <td>harganya</td>
                        <td>nama kategori</td>
                    </tr>
                </table>
            </div>
        </div>

    )
    // <div class="relative overflow-x-auto">
    //     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //             <tr>
    //                 <th scope="col" class="px-6 py-3">
    //                     Product name
    //                 </th>

    //                 <th scope="col" class="px-6 py-3">
    //                     Category
    //                 </th>
    //                 <th scope="col" class="px-6 py-3">
    //                     Price
    //                 </th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    //                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                     Apple MacBook Pro 17"
    //                 </th>

    //                 <td class="px-6 py-4">
    //                     Laptop
    //                 </td>
    //                 <td class="px-6 py-4">
    //                     $2999
    //                 </td>
    //             </tr>
    //             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
    //                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                     Microsoft Surface Pro
    //                 </th>

    //                 <td class="px-6 py-4">
    //                     Laptop PC
    //                 </td>
    //                 <td class="px-6 py-4">
    //                     $1999
    //                 </td>
    //             </tr>
    //             <tr class="bg-white dark:bg-gray-800">
    //                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                     Magic Mouse 2
    //                 </th>
    //                 <td class="px-6 py-4">
    //                     Black
    //                 </td>
    //                 <td class="px-6 py-4">
    //                     Accessories
    //                 </td>
    //                 <td class="px-6 py-4">
    //                     $99
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>

}