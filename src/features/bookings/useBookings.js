import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  const pageIndex = searchParams.get("page") || 1;
  const filterValue = searchParams.get("status");
  const filter =    
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("SortBy") || "startDate-asc";
  const [sortValue, order] = sortByRaw.split("-");

  const sortBy = { field: "SortBy", value: sortValue, order };

  const {
    isLoading,
    error,
    data: { bookings, count },
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings(filter, sortBy, pageIndex),
  });

  return { isLoading, error, bookings, count };
}

export default useBookings;
