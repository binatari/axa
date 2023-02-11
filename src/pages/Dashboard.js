import React, { useState, useEffect } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
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
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import GiftCardModal from "../components/Modals/GiftCardModal";
import USDModal from "../components/Modals/USDModal";
import { api } from "../utils/queries";
import WithDrawModal from "../components/Modals/WithDrawModal";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState([]);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('')
  const [pendingAmount, setPendingAmount] = useState(0);
  const [withdrew, setWithdrew] = useState(0);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  // useEffect(() => {
  //   setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  // }, [page]);

  const aggregate = async () => {
    setLoading(true)
    await api
      .get("/donations?pagination[pageSize]=" + count +'&fields[0]=amount&fields[1]=is_verified')
      .then((res) => {
        const getVerified = res.data.data.filter((res)=>res.attributes.is_verified)
        const getUnVerified = res.data.data.filter((res)=>!res.attributes.is_verified)
        const getAggregate = getVerified.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
        const getUnverifiedAggregate = getUnVerified.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
       setAmount(getAggregate)
       setPendingAmount(getUnverifiedAggregate)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
  };
  const allDonations = async () => {
    setLoading(true)
    await api
      .get("/donations")
      .then((res) => {
        setData(res.data.data)
        setCount(res.data.meta.pagination.total)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
      ;
  };

  const withDrawals = async () => {
    setLoading(true)
    await api
      .get("/withdrawals")
      .then((res) => {
        const getAggregate = res.data.data.reduce(function (
          accumulator,
          curValue
        ) {
          return accumulator + Number(curValue.attributes.amount);
        },
        0);
        setWithdrew(getAggregate)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
      ;
  };


  const getAddress = async () => {
 
    await api
      .get("/address")
      .then((res) => {
        setAddress(res.data.data.attributes.address)
      })
      .catch((err) => console.log(err))
      ;
  };

  useEffect(() => {
    getAddress()
    allDonations();
    withDrawals()
  }, []);

  const getInfo = () =>{
    allDonations()
    withDrawals()
  }

  useEffect(() => {
    if(count){
      aggregate();
    }
  }, [count]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total deposits" value={count}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Balance" value={!amount ? '$0' : "$" + (amount - withdrew)}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Pending deposit" value={'$' + pendingAmount}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Pending withdrawals" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="flex gap-3">
        <GiftCardModal cb={getInfo} />
        <USDModal address={address} cb={getInfo} />
        <WithDrawModal totalWithdraw={amount - withdrew} cb={getInfo} />
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Method</TableCell>
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
                  <Badge type={user.status}>{user.attributes.is_verified}</Badge>
                </TableCell>
                <TableCell>
                  <Badge type={"pending"}>{user.attributes.method}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.attributes.publishedAt).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            className="bg-custom-red"
            totalResults={totalResults}
            resultsPerPage={data?.length || 0}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
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
  );
}

export default Dashboard;
