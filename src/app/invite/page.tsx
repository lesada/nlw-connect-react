import logo from "@/assets/logo.svg";
import Image from "next/image";
import { InviteLinkInput } from "./invite-link-input";
import { InviteText } from "./invite-text";
import { Ranking } from "./ranking";
import { Stats } from "./stats";

export default function InvitePage() {
  const inviteLink = "http://localhost:3000/invite/0123";

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <InviteText />
        <InviteLinkInput inviteLink={inviteLink} />
        <Stats />
      </div>
      <Ranking />
    </div>
  );
}
