import {
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../../utils/pagination-util";

function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const pageIndex = searchParams.get("page") || 1;
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("SortBy") || "startDate-asc";
  const [sortValue, order] = sortByRaw.split("-");

  const sortBy = { field: "SortBy", value: sortValue, order };

  // FETCHING QUERIES
  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, pageIndex],
    queryFn: () => getBookings(filter, sortBy, pageIndex),
  });

  // PRE-FETCHING QUERIES
  if (pageIndex < count / ITEMS_PER_PAGE)
    queryClient.prefetchQuery(["bookings", filter, sortBy, pageIndex + 1], () =>
      getBookings(filter, sortBy, pageIndex + 1)
    );

  if (pageIndex > 1)
    queryClient.prefetchQuery(["bookings", filter, sortBy, pageIndex - 1], () =>
      getBookings(filter, sortBy, pageIndex - 1)
    );

  return { isLoading, error, bookings, count };
}

export default useBookings;
