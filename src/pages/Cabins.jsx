import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";

function Cabins() {
  //error, data, isLoading, status, isStale

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <Filter
          filterName="discount"
          options={[
            { value: "all", label: "All" },
            { value: "with-discount", label: "With discount" },
            { value: "no-discount", label: "No discount" },
          ]}
        />

        <SortBy
          options={[
            { label: "Sort by name (A - Z) ", value: "name-asc" },
            { label: "Sort by name (Z - a) ", value: "name-desc" },
            { label: "Sort by price (low first)", value: "regularPrice-asc" },
            { label: "Sort by price (high first)", value: "regularPrice-desc" },
            { label: "Sort by capacity (low first)", value: "maxCpapcity-asc" },
            {
              label: "Sort by capacity (high first)",
              value: "maxCapacity-desc",
            },
          ]}
        />
      </Row>

      <Row type="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
