import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSetting } from "./useSetting";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    setting: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const updateBlurHandler = (field) => (e) => {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  };

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          name="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={updateBlurHandler("minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          name="maxBookingLength"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={updateBlurHandler("maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          name="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={updateBlurHandler("maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          name="breakfastPrice"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={updateBlurHandler("breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
