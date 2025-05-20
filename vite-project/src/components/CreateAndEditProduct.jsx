
export default function CreateAndEditProduct() {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-center">Input Form</p>


            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
                    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base input</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
                    <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </form>



            <form class="max-w-md mx-auto">
                <div class="">
                    <label htmlFor="">Cuisine Name</label>
                    <input className="border border-black" type="text" name="cuisineName" />
                </div>
                <div class="">
                    <label htmlFor="">Description</label>
                    <textarea className="border border-black" name="description" id=""></textarea>
                </div>
                <div class="">
                    <label htmlFor="">Price</label>
                    <input className="border border-black" type="text" name="price" />
                </div>
                <div class="">
                    <label htmlFor="">Image Url</label>
                    <input className="border border-black" type="text" name="imageUrl" />
                </div>
                <div class="">
                    <label htmlFor="">Category</label>
                    <select name="category" id="">
                        <option value="">1</option>
                    </select>
                </div>
                <div class="">
                    <label htmlFor="">Author</label>
                    <select name="author" id="">
                        <option value="">2</option>
                    </select>
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    )
}