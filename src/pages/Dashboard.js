import React, { useState, useEffect } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import {
  Button,
} from "@windmill/react-ui";
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
import PaymentModal from "../components/Modals/PaymentModal";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState([]);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [address, setAddress] = useState('')
  const [network, setNetwork] = useState('')
  const [pendingAmount, setPendingAmount] = useState(0);
  const [withdrew, setWithdrew] = useState(0);
  const [withdrawCount, setwithdrawCount] = useState(0);

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

  const [user, setUser] = useState({});


  const aggregateInvestment = async () => {
    setLoading(true)
    await api
      .get("/investments?pagination[pageSize]=" + '1000' +'&fields[0]=amount&fields[1]=type')
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
       setInvestmentAmount(getAggregate + getCommercialAggregate + getResidentialAggregate)
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
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
        setWithdrawals(res.data.data)
        setwithdrawCount(res.data.meta.pagination.total)
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
        setNetwork(res.data.data.attributes?.network || '')
      })
      .catch((err) => console.log(err))
      ;
  };


  const userDetails = async () => {
    await api
      .get("/users/me")
      .then((res) => {
        setUser(res.data)
        return res;
      })
      .catch((err) => {

      });
  };

  useEffect(() => {
    userDetails();
  }, []);

  useEffect(() => {
    getAddress()
    allDonations();
    withDrawals()
    aggregateInvestment()
  }, []);

  const getInfo = () =>{
    allDonations()
    userDetails()
    withDrawals()
  }

  useEffect(() => {
    if(count){
      aggregate();
    }
  }, [count]);


  console.log(Number(user?.balance))
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />
      

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="TOTAL DEPOSITS" value={count}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="BALANCE" value={!user?.balance ? '$0' : "$" + (user?.balance)}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="TOTAL PENDING DEPOSITS" value={'$' + pendingAmount}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="WITHDRAWALS" value={withdrawCount}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="flex gap-3 justify-between">
        {/* <GiftCardModal cb={getInfo} /> */}
        <div className="flex gap-3">
        <PaymentModal address={address} network={network} cb={getInfo} />
        <WithDrawModal totalWithdraw={user?.balance ? Number(user?.balance) : 0} cb={getInfo} />
        </div>
        <Button  onClick={()=>setToggle(!toggle)}>
         {!toggle ? 'View withdrawals' : 'View Deposits'}
        </Button>
      </div>
      {
        !toggle ?       <TableContainer>
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
                  <Badge type={user.status}>{user.attributes.is_verified ? 'verified' : 'pending'}</Badge>
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
        {/* <TableFooter>
          <Pagination
            className="bg-custom-red"
            totalResults={totalResults}
            resultsPerPage={data?.length || 0}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter> */}
      </TableContainer> :       <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {withdrawals.map((user, i) => (
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
                  <Badge type={user.status}>{user.attributes.is_verified ? 'verified' : 'pending'}</Badge>
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
        {/* <TableFooter>
          <Pagination
            className="bg-custom-red"
            totalResults={totalResults}
            resultsPerPage={data?.length || 0}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter> */}
      </TableContainer>
      }


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
