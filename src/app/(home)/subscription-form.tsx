"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { subscriptionFormSchema, TSubscriptionForm } from "./schema";

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubscriptionForm>({
    resolver: zodResolver(subscriptionFormSchema),
  });

  function onSubscribe(data: any) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Subscribe
      </h2>

      <div className="space-y-3">
        <InputRoot error={errors.name?.message}>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Full Name"
            {...register("name")}
          />
        </InputRoot>

        <InputRoot error={errors.email?.message}>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="text" placeholder="Email" {...register("email")} />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirm
        <ArrowRight className="size-6" />
      </Button>
    </form>
  );
}
