import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const { bookingId } = useParams();
  const { data: booking, isLoading, error } = useQuery({
    queryKey: ["Bookings", bookingId],
    queryFn: () => getBooking(bookingId),
  });

  return { booking, bookingId, isLoading };
}

export default useBooking;