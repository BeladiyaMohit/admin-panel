import { TableData } from "./Table"
import { TableStyle } from "../../asset/TableCss"

export function Table() {
    const columns = [{
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },]

    const data = [{ "firstName": "beladiya mohit", "lastName": "Dhirubhai" }]

    return (
        <TableStyle>
            <TableData columns={columns} data={data} />
        </TableStyle>
    )
}