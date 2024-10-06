import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Why Does The Moon Shine So?
      </h1>
      <p className="max-w-[600px] text-foreground my-8 sm:text-base">
      <i>the gold dome of the capitol</i><br/>
      <i>converted to an alloy of moonlight, shape</i><br/>
      <i>without detail, the myth, the archetype, the soul</i><br/>
      <i>filled with fire that is moonlight really, taken</i><br/>
      <i>from another source and briefly</i><br/>
      <i>shining as the moon shines: stone or not</i><br/>
      <i>the moon is still that much of a living thing.</i><br/>
      <br/>
      <b>– Louise Glück</b>
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Read
        </Link>
      </div>
    </div>
  );
}