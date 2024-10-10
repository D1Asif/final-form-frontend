import { Input, Label, Radio, Textarea, toast } from "keep-react";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../redux/api/baseApi";
import { clearCart } from "../redux/features/cart/cartSlice";

const CheckoutPage = () => {
  const [formState, setFormSate] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("");
  const { items: cartItems } = useAppSelector((selector) => selector.cart);
  const [createOrder, { data, isLoading, isError }] = useCreateOrderMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormSate({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      customerName: formState.name,
      customerEmail: formState.email,
      customerPhone: formState.phone,
      deliveryAddress: formState.address,
      paymentMethod,
      items: cartItems.map((item) => ({ productId: item.productId, quantity: item.quantity })),
      totalPrice: total,
      shippingCost: shipping
    }

    createOrder(body)
  }

  console.log(data);

  useEffect(() => {
    if (data?.success) {
      dispatch(clearCart())
      navigate("/order-success")
    }
  }, [data?.success])

  if (isError) {
    toast.error("Something went wrong!")
  }

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      <form className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16" onSubmit={handleOrderSubmit}>
        {/* Left Column: Checkout Form */}
        <div className="flex-grow rounded-lg">
          <h1 className="text-heading-5 font-semibold mb-6">Checkout</h1>

          <hr className="border border-gray-100" />

          {/* Contact Information */}
          <div className="my-7">
            <h2 className="text-heading-6 font-semibold mb-5">Contact Information</h2>
            <fieldset className="space-y-2 text-lg my-3">
              <Label htmlFor="email" className="text-md font-normal text-gray-700">
                Email*
              </Label>
              <Input id="email" type="text" onChange={handleChange} required />
            </fieldset>
          </div>

          {/* Shipping Information */}
          <div className="mb-7">
            <h2 className="text-heading-6 font-semibold mb-5">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <fieldset className="space-y-2 text-lg">
                <Label htmlFor="name" className="text-md font-normal text-gray-700">
                  Name*
                </Label>
                <Input id="name" type="text" onChange={handleChange} required />
              </fieldset>
              <fieldset className="space-y-2 text-lg">
                <Label htmlFor="phone" className="text-md font-normal text-gray-700">
                  Phone*
                </Label>
                <Input id="phone" type="text" onChange={handleChange} required />
              </fieldset>
            </div>
            <fieldset className="space-y-2 text-lg mt-4">
              <Label htmlFor="address" className="text-md font-normal text-gray-700">
                Address*
              </Label>
              <Textarea id="address" rows={2} onChange={handleChange} required />
            </fieldset>
          </div>

          {/* Payment Section */}
          <div>
            <h2 className="text-heading-6 font-semibold mb-5">Payment*</h2>
            <div className="space-y-4">
              <fieldset className="flex items-center gap-2">
                <Radio id="Online Payment" name="payment" variant="circle"
                  onChange={(e) => setPaymentMethod(e.target.id)} required
                />
                <Label htmlFor="bd" className="text-lg font-normal text-gray-700">Online Payment</Label>
              </fieldset>
              <fieldset className="flex items-center gap-2">
                <Radio id="Cash on Delivery" name="payment" variant="circle"
                  onChange={(e) => setPaymentMethod(e.target.id)} required
                />
                <Label htmlFor="usa" className="text-lg font-normal text-gray-700">Cash on Delivery</Label>
              </fieldset>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <CheckoutOrderSummary cartItems={cartItems} isLoading={isLoading} subtotal={subtotal} shipping={shipping} total={total} />
      </form>
    </div >
  );
};

export default CheckoutPage;
