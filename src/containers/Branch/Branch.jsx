import React from "react";
import Table from "../../components/Table";
import { BASE_URL } from "../Constant/Constant";

export const Branch = () => {
  const colums = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Company Id",
      accessor: "company_id",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Location",
      accessor: "mapLocation",
    },
    {
      title: "Phone No.",
      accessor: "phoneNumbers",
    },
    {
      Header: "Action",
      render: (index) => {
        return (
          <>
            {/* <Button type="primary" onClick={() => confirm(index._id)}>Edit</Button>
                  <Popconfirm placement="topLeft" title={"Do You Want To Delete This User?"} onConfirm={() => this.delete(index._id)} okText="Yes" cancelText="No">
                      <Button type="danger">Delete</Button>
                  </Popconfirm> */}
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table
        url={`${BASE_URL}/branchList`}
        type={"branchList"}
        colums={colums}
      />
    </>
  );
};
