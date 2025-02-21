import {
  getSubscribersSubscriberIdRankingClicks,
  getSubscribersSubscriberIdRankingCount,
  getSubscribersSubscriberIdRankingPosition,
} from "@/http/api";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

type StatsProps = {
  subscriberId: string;
};

export async function Stats({ subscriberId }: StatsProps) {
  const { clicks } =
    await getSubscribersSubscriberIdRankingClicks(subscriberId);

  const { count } = await getSubscribersSubscriberIdRankingCount(subscriberId);

  const { position } =
    await getSubscribersSubscriberIdRankingPosition(subscriberId);

  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {clicks}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Hits with the link
        </span>
        <MousePointerClick className="size-5 text-purple top-3 left-3 absolute" />
      </div>

      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {count}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Registrations made
        </span>
        <BadgeCheck className="size-5 text-purple top-3 left-3 absolute" />
      </div>

      <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {position}&ordm;
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Ranking position
        </span>
        <Medal className="size-5 text-purple top-3 left-3 absolute" />
      </div>
    </div>
  );
}
