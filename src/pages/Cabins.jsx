import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import Filter from "../ui/Filter";

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
            { value: "no-discount", label: "No discoutn" },
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
