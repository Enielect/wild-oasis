import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useCheckin() {
  const navigate = useNavigate();

  const { mutate: checkIn, isLoading: isChecking } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => {
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      });
    },
    onSuccess: (data) => {
      navigate("/");
      toast.success(`successfully checked-in ${data.id}`);
    },
  });

  return { checkIn, isChecking };
}

export default useCheckin;
