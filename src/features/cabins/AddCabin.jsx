import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {

  return (
    <Modal>
      <Modal.Open opens ='create-cabin'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='create-cabin'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

//creating the api of the compound component for the modat

export default AddCabin;
