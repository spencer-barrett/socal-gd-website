import Image from "next/image";

export default function Middle() {
  return (
    <div className="flex flex-col items-center justify-center  bg-dark-400 text-center  ">
      {/* SECTION CHIP*/}
      <div
        className="
         w-28
          relative
          rounded-3xl
          p-[2px]
          bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
        "
      >
        <div
          className="
          rounded-full
          bg-dark-400
          px-4
          py-1
        "
        >
          <p
            className="
            
            text-title-md
            bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
            text-transparent bg-clip-text
          "
          >
            About
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION  */}
      <div className="text-heading-xl mt-12 mb-4 text-white">About Us</div>
      <div className="text-heading-md  mb-4 text-white">
        Workshops, guest speakers, networking
      </div>

      {/* IMAGE + BOX */}
      <div className="w-108 bg-white py-20 px-80 m-40 rounded-3xl">
        <Image
          src={"/images/googlecomputer1.png"}
          alt={"Computer"}
          height={800}
          width={800}
        />
      </div>
      {/* Activity Section */}
      {/* SECTION CHIP*/}
      <div
        className="
         w-28
          relative
          rounded-3xl
          p-[2px]
          bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
        "
      >
        <div
          className="
          rounded-full
          bg-dark-400
          px-4
          py-1
        "
        >
          <p
            className="
            
            text-title-md
            bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
            text-transparent bg-clip-text
          "
          >
            Activity
          </p>
        </div>
      </div>
      {/* HEADER + DESCRIPTION  */}
      <div className="text-heading-xl mt-12 mb-4 text-white">
        See What We Have Been Up To
      </div>
      <div className="text-heading-md  mb-4 text-white">
        Discover the events we participate and host.
      </div>
      <div className="flex m-4">
        {/* First Col */}
        <div className="flex flex-col text-center bg-white rounded-xl p-8">
          <p className="">Featured Events</p>
          <Image
            src={"/images/googlecomputer1.png"}
            alt={"logo"}
            height={400}
            width={400}
          />
        </div>

        {/* Secound Col */}
        <div className="flex flex-col">
          <div className="bg-white rounded-xl p-8 text-center m-4">
            <p className="text-heading-md ">What We Do</p>
            <p className="w-96 text-wrap">
              Meet and learn with other budding developers and build solutions
              for local businesses and communities with Google technology.
            </p>
          </div>
          {/* Stat Row */}
          <div className="flex flex-row m-4">
            {/* Box 1 */}
            <div className="flex flex-col m-2 bg-white rounded-xl p-4">
              <p className="text-heading-md">2100+</p>
              <p className="">College and university chapters+</p>
            </div>
            {/* Box 1 */}
            <div className="flex flex-col m-2 bg-white rounded-xl p-4">
              <p className="text-heading-md">100</p>
              <p className="">Countries Participating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
