import { Radio } from "lucide-react";

export function EventInformation() {
  return (
    <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-semibold text-gray-200 text-xl">
          About the event
        </h2>
        <span className="flex items-center gap-2 text-purple font-semibold text-xs">
          <Radio className="size-5" />
          LIVE
        </span>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        An event made by and for developers passionate about creating innovative
        solutions and sharing knowledge. Let's dive into the latest trends in
        software development, system architecture, and emerging technologies
        with talks, workshops, and hackathons.
        <br />
        <br />
        March 25-27, 2025
      </p>
    </div>
  );
}
