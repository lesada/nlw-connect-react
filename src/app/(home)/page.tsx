import logo from "@/assets/logo.svg";
import Image from "next/image";
import { EventInformation } from "./event-information";
import { SubscriptionForm } from "./subscription-form";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span> Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <EventInformation />
        <SubscriptionForm />
      </div>
    </div>
  );
}
