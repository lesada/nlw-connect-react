import medalCooper from "@/assets/medal-cooper.svg";
import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";
import { getRanking } from "@/http/api";
import Image from "next/image";

export async function Ranking() {
  const { ranking } = await getRanking();

  const medalIcons = [medalGold, medalSilver, medalCooper];

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking
      </h2>
      <div className="space-y-4">
        {ranking.map((rank, i) => (
          <div
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            key={rank.id}
          >
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">{i + 1}&ordm;</span> | {rank.name}
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {rank.score} pts
            </span>
            <Image
              src={medalIcons[i]}
              alt=""
              className="absolute top-0 right-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
