import React from 'react'
import Table from '../../components/Table'
import { BASE_URL } from '../Constant/Constant'
import { ConpanyCSS } from './companyCSS'

export const Company = () => {
  const colums = [
    {
        Header: "Id",
        accessor: "unique_id",
    },
    {
        Header: "Name",
        accessor: "name",
    },
  ]
  return (<ConpanyCSS>
      <Table
      url={`${BASE_URL}/companyList`}
      type={'companyList'}
      colums={colums}
      />
  </ConpanyCSS>)
}
