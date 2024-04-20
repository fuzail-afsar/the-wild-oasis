// import Button from "ui/Button";
// import Modal from "ui/Modal";
// import CreateCabinForm from "./CreateCabinForm";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="new-cabin">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="new-cabin">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const closeModalHandler = () => setIsOpenModal(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((isForm) => !isForm)}>
//         add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={closeModalHandler}>
//           <CreateCabinForm closeModal={closeModalHandler} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
