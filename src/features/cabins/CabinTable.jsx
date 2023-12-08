import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabin } from "../../services/apiCabins";

import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);
//   width: calc(100% - 120px);
//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

const StyledTable = styled.div`
  width: calc(100% - 120px);
  margin: 0 auto;
`;

export default function CabinTable() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["Cabins"],
    queryFn: getCabin,
  });

  //sorting the cabins
  const [searchParams] = useSearchParams();

  let filteredCabin;

  //having troubles with always short-circcuiting the cabins to avoid the code breaking every time i reload
  // the page

  const allCabins = searchParams.get("discount");
  if (!allCabins) filteredCabin = cabins;
  if (allCabins === "all") filteredCabin = cabins;
  if (allCabins === "with-discount")
    filteredCabin = cabins?.filter((cabin) => cabin.discount > 0);
  if (allCabins === "no-discount")
    filteredCabin = cabins?.filter((cabin) => cabin.discount === 0);
  // const filteredCabin = console.log(cabins);
  if (cabins?.error) console.error("error loading the cabins");
  // useEffect(() => console.log(filteredCabin), [filteredCabin]);

  const sortValue = searchParams.get("sortBy") || 'startDate-asc'; 
  const [filter, direction] = sortValue.split("-");
  console.log(filter)
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabin = filteredCabin?.sort(
    (a, b) => (a[filter] - b[filter]) * modifier
  );

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <StyledTable>
        <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header role="row">
            <div></div>
            <div>CABIN</div>
            <div>CAPACITY</div>
            <div>PRICE</div>
            <div>DISCOUNT</div>
            <div></div>
          </Table.Header>
          <Table.Body
            // data={cabins}
            // data={filteredCabin}
            data={sortedCabin}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        </Table>
      </StyledTable>
    </Menus>
  );
}
