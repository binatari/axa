import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'
import { api } from '../utils/queries'
import InvestModal from '../components/Modals/InvestModal'
import Note from '../components/Note'

function Investment() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState([]);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [commercial, setCommercial] = useState(0);
  const [residential, setResidential] = useState(0);
  const [industrial, setIndustrial] = useState(0);

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data

  const aggregate = async () => {
    setLoading(true)
    await api
      .get("/investments?pagination[pageSize]=" + count +'&fields[0]=amount&fields[1]=type')
      .then((res) => {
        const getIndustrial = res.data.data.filter((res)=>res.attributes.type == 'industrial')
        const getCommercial = res.data.data.filter((res)=>res.attributes.type == 'commercial')
        const getResidential = res.data.data.filter((res)=>res.attributes.type == 'residential')
        const getAggregate = getIndustrial.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
        const getCommercialAggregate = getCommercial.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
        const getResidentialAggregate = getResidential.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
       setAmount(getAggregate + getCommercialAggregate + getResidentialAggregate)
       setCommercial(getCommercialAggregate)
       setResidential(getResidentialAggregate)
       setIndustrial(getAggregate)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
  };
  const allDonations = async () => {
    setLoading(true)
    await api
      .get("/investments")
      .then((res) => {
        setData(res.data.data)
        setCount(res.data.meta.pagination.total)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
  };
  useEffect(() => {
 

    allDonations();
  }, []);

  useEffect(() => {
    if(count){
      aggregate();
    }
  }, [count]);

  return (
    <>
      <PageTitle>Investment</PageTitle>

      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Investment balance" value={'$'+amount}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Residential investments"  value={'$'+ residential}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Commercial investments"  value={'$'+commercial}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Industrial investments"  value={'$'+ industrial}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <Note/>
      <div className="flex gap-3">
        <InvestModal cb={()=> allDonations()} />
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                {/* <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell> */}
                <TableCell>
                  <span className="text-sm">$ {user.attributes.amount}</span>
                </TableCell>
                <TableCell>
                <span className="text-sm"> {user.attributes.type}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.attributes.publishedAt).toLocaleDateString()}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableFooter>
          <Pagination
            className='bg-custom-red'
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter> */}
      </TableContainer>

      {/* <PageTitle>Charts</PageTitle> */}
      {/* <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
    </>
  )
}

export default Investment
