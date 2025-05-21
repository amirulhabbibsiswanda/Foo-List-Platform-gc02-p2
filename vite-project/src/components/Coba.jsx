
const data = ["amar", "indira", "beni"]
export default function Coba() {

    return (
        <>
            <div>
                {data.map((el) => {
                    return <p>{el}</p>
                })}
            </div>
        </>
    )
}