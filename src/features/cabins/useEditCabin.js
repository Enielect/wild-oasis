import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinAction, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      //console.log(data);
      toast.success("Cabin was successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Cabins"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error.message);
    },
  });

  return { editCabinAction, isEditing };
}
