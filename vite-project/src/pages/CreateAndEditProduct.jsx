import Button from "../components/Button";

export default function CreateAndEditProduct() {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-center text-xl">Cuisine Input Form</p>


            <form class="w-250 max-w-full mx-auto border border-black">
                <div class="mb-5">
                    <label for="cuisineName" class="block mb-2 text-sm font-medium text-black ">Cuisine Name</label>
                    <input type="text" name="cuisineName" id="cuisineName" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="" required />
                </div>
                <div class="mb-5">
                    <label for="price" class="block mb-2 text-sm font-medium text-black">Description</label>
                    <input name="price" type="text" id="price" class="shadow-xs  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 bg-yellow-100 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-sm font-medium text-black">Price</label>
                    <input name="description" type="number" id="description" class="shadow-xs bg-yellow-100 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="imageUrl" class="block mb-2 text-sm font-medium text-black">Image Url</label>
                    <input name="imageUrl" type="number" id="imageUrl" class="shadow-xs bg-yellow-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>

                <div>
                    <label htmlFor="">Category</label>
                    <select name="category" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Author</label>
                    <select name="author" id="">
                        <option value=""></option>
                    </select>
                </div>

                <Button />
            </form>


        </div>

    )
}