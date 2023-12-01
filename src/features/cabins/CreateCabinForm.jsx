import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ editCabin = {}, onCloseModal }) {
  const { editCabinAction, isEditing } = useEditCabin();
  const { createCabin, isCreating } = useCreateCabin();

  const { id: editId, ...editItems } = editCabin;
  console.log(editItems);

  const isEditingSession = Boolean(editId);

  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: isEditingSession ? editItems : {},
  });

  const isAction = isCreating || isEditing;

  const { errors } = formState;
  console.log(errors);

  function onSubmit(data) {
    console.log(data);

    const imageValue =
      typeof data.image === "string" ? data.image : data.image[0];
    if (isEditingSession) {
      editCabinAction(
        { newCabin: { ...data, image: imageValue }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else
      createCabin(
        { ...data, image: imageValue },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          {...register("name", {
            required: "Please input the cabin name",
          })}
          id="name"
          disabled={isAction}
        />
      </FormRow>

      <FormRow label="MaxCapacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          {...register("maxCapacity", {
            min: {
              value: 0,
              message: "The regular price cannot be negative",
            },
          })}
          id="maxCapacity"
          disabled={isAction}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          {...register("regularPrice", {
            min: {
              value: 0,
              message: "The regular price cannot be negative",
            },
          })}
          id="regularPrice"
          disabled={isAction}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          {...register("discount", {
            validate: (value) =>
              getValues().regularPrice >= value ||
              "The discount should be less than the regular price",
          })}
          id="discount"
          defaultValue={0}
          disabled={isAction}
        />
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Textarea
          type="number"
          {...register("description", {
            required: "Please input the description",
          })}
          id="description"
          defaultValue=""
          disabled={isAction}
        />
      </FormRow>

      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <FileInput
          type="file"
          id="image"
          {...register("image", {
            required: isEditingSession ? false : "Please input the image",
          })}
          accept="image/*"
          disabled={isAction}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>{isEditingSession ? "Edit cabin" : "Create new Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
