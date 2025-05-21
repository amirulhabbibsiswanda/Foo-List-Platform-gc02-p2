
export default function ProductDetail() {
    return (

        <div className="flex flex-col justify-center w-200 border border-black" style={{}}>
            <img className="w" src="https://www.maggi.co.uk/sites/default/files/srh_recipes/2058a74f39245e0065743463242b5f91.jpg" alt="" />
            <div className="text-center">
                <label htmlFor="">Product Name</label>
                <p>Spring Rolls</p>
                <label htmlFor="">Description</label>
                <p>Crispy vegetable spring rolls served with sweet chili sauce.</p>
                <label htmlFor="">Price</label>
                <p>30000</p>
                <label htmlFor="">Category Id</label>
                <p>1</p>
                <label htmlFor="">Author Id</label>
                <p>1</p>
            </div>
        </div>
    );
}