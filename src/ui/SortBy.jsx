import { useSearchParams } from "react-router-dom";
import StyledSelect from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let sortBy;
  function handleChange(e) {
    searchParams.set("SortBy", e.target.value);
    sortBy = e.target.value || "";
    setSearchParams(searchParams);
  }

  return (
    <StyledSelect type="white" value={sortBy} onChange={handleChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default SortBy;
