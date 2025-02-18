import logo from "@/assets/logo.svg";
import Image from "next/image";
import { InviteLinkInput } from "./invite-link-input";
import { Ranking } from "./ranking";
import { Stats } from "./stats";

export default function InvitePage() {
  const inviteLink = "http://localhost:3000/invite/0123";

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Your registration has been confirmed
          </h1>
          <p className="">
            To access the event, access the link in your email.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Share the event
            </h2>
            <p className="text-gray-300">
              Invite your friends to participate in the event, share the
              experience and compete for prizes. The more the merrier!
            </p>
          </div>
        </div>
        <InviteLinkInput inviteLink={inviteLink} />
        <Stats />
      </div>
      <Ranking />
    </div>
  );
}
