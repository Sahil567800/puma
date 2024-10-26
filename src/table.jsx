const Table = () => {
    let obj = [
        { id: 0, course: "frontend", duration: "6 months", fees: 10000, faculty: "vansh" },
        { id: 1, course: "backend", duration: "8 months", fees: 15000, faculty: "nitin" },
        { id: 2, course: "python", duration: "6 months", fees: 20000, faculty: "sahil" },
        { id: 3, course: "java", duration: "6 months", fees: 25000, faculty: "deependra" }
    ]

    let tf = 0;
    for (let i = 0; i < obj.length; i++) {
        tf += obj[i].fees;
    }
    let discount = tf*0.10
    let discounted= tf-discount;


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Duration</th>
                        <th>fees</th>
                        <th>faculty</th>
                    </tr>
                </thead>
                <tbody>
                    {obj.map((value, index) => (
                        <tr key={index}>
                            <td>{value.course}</td>
                            <td>{value.duration}</td>
                            <td>{value.fees}</td>
                            <td>{value.faculty}</td>

                        </tr>

                    ))}

                </tbody>
               
            </table>
            <h1> your discount is {discounted}</h1>

        </>
    )
}
export default Table;