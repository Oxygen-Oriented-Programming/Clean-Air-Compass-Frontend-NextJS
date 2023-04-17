import Image from "next/image";
import faqChart from "public/faqChart.png";

export default function Chart(props) {
  return (
    <>
      <div className="hidden md:fixed lg:fixed lg:top-5 lg:right-56 md:top-5 md:right-56 cursor-pointer">
        <Image
          className="rounded-lg h-14 transition-all w-fit hover:h-[30rem] hover:w-auto "
          src={faqChart}
          alt=""
          text="faq chart"
        />
      </div>
    </>
  );
}
