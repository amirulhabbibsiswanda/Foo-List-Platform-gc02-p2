import Button from "./Button"
export default function AddStaff() {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-center text-xl">Add New Staff</p>


            <form class="w-250 max-w-full mx-auto border border-black">
                <div class="mb-5">
                    <label for="username" class="block mb-2 text-sm font-medium text-black ">Username</label>
                    <input type="text" name="username" id="username" class="shadow-xs bg-fuchsia-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="" required />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
                    <input name="email" type="text" id="email" class="shadow-xs  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 bg-fuchsia-200 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                    <input name="password" type="text" id="password" class="shadow-xs bg-fuchsia-200 border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="phoneNumber" class="block mb-2 text-sm font-medium text-black">Phone Number</label>
                    <input name="phoneNumber" type="text" id="phoneNumber" class="shadow-xs bg-fuchsia-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>
                <div class="mb-5">
                    <label for="Address" class="block mb-2 text-sm font-medium text-black">Address</label>
                    <input name="Address" type="text" id="Address" class="shadow-xs bg-fuchsia-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                </div>

                <Button />
            </form>


        </div>

    )
}