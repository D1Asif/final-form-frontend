import { Input, Label, Radio, Textarea } from "keep-react";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";

const CheckoutPage = () => {

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
        {/* Left Column: Checkout Form */}
        <div className="flex-grow rounded-lg">
          <h1 className="text-heading-5 font-semibold mb-6">Checkout</h1>

          <hr className="border border-gray-100" />

          {/* Contact Information */}
          <div className="my-7">
            <h2 className="text-heading-6 font-semibold mb-5">Contact Information</h2>
            <fieldset className="space-y-2 text-lg my-3">
              <Label htmlFor="email" className="text-md font-normal text-gray-700">
                Email
              </Label>
              <Input id="email" type="text" />
            </fieldset>
          </div>

          {/* Shipping Information */}
          <div className="mb-7">
            <h2 className="text-heading-6 font-semibold mb-5">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <fieldset className="space-y-2 text-lg">
                <Label htmlFor="name" className="text-md font-normal text-gray-700">
                  Name
                </Label>
                <Input id="name" type="text" />
              </fieldset>
              <fieldset className="space-y-2 text-lg">
                <Label htmlFor="phone" className="text-md font-normal text-gray-700">
                  Phone
                </Label>
                <Input id="phone" type="text" />
              </fieldset>
            </div>
            <fieldset className="space-y-2 text-lg mt-4">
              <Label htmlFor="address" className="text-md font-normal text-gray-700">
                Address
              </Label>
              <Textarea id="address" rows={2} />
            </fieldset>
          </div>

          {/* Payment Section */}
          <div>
            <h2 className="text-heading-6 font-semibold mb-5">Payment</h2>
            <div className="space-y-4">
              <fieldset className="flex items-center gap-2">
                <Radio id="online" name="payment" variant="circle" />
                <Label htmlFor="bd" className="text-lg font-normal text-gray-700">Online Payment</Label>
              </fieldset>
              <fieldset className="flex items-center gap-2">
                <Radio id="cod" name="payment" variant="circle" />
                <Label htmlFor="usa" className="text-lg font-normal text-gray-700">Cash on Delivery</Label>
              </fieldset>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <CheckoutOrderSummary />
      </div>
    </div >
  );
};

export default CheckoutPage;
