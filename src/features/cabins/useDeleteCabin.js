import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

export function useDeleteCabin () {
    const queryClient = useQueryClient();

  const { mutate: deleteCabinAction } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      console.log("adding a cabin was successful");

      //invalidating the queries help update the view on the site without reloading the page
      queryClient.invalidateQueries({
        queryKey: ["Cabins"],
      });
    },
    onError: () => console.log("There was a problem adding a cabin"),
  });
  
  return {
    deleteCabinAction,
  };
}