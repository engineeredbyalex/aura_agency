import Link from "next/link";
import Button from "../ui/Button";

export default function ProjectsSection() {
  return (
    <div className="min-h-screen w-screen absolute top-[150vh] px-5 lg:px-20 py-10 bg-white">
      <div className=" border-[#F33304] w-full border-t-[2px] py-10 flex flex-col gap-5">
        <h3>We design, build, and expertly deliver truly one-of-a-kind digital experiences.</h3>
        <div className="w-full gap-5 lg:gap-0 flex flex-col lg:flex-row items-center lg:items-end justify-between">
            <h6 className="w-full lg:w-[35%] text-[#959595]">
            A Selection of our most passionately crafted works with forward-thinking clients and friends over the years.
            </h6>
        <Link className="w-full lg:w-auto" href={'/projects'}>
        <Button/>
        </Link>
        </div>
      </div>
    </div>
  );
}
