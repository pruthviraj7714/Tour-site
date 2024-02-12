import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        {/* left side */}
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/531035/pexels-photo-531035.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/457876/pexels-photo-457876.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/947448/pexels-photo-947448.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim
          facilis reprehenderit amet doloribus unde cum alias eveniet velit,
          voluptatum qui molestias modi quam aspernatur quidem quos et impedit.
          Quidem?
        </p>
        <p className="pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit
          commodi atque cumque beatae autem. A, exercitationem ducimus. Incidunt
          saepe aspernatur totam voluptate, atque cumque odio explicabo commodi!
          Maiores, accusantium! Cum delectus voluptatem natus autem reiciendis,
          soluta, corporis atque facilis blanditiis maxime tenetur similique
          porro ratione tempora perferendis repellat minus error. Unde tempora
          totam quisquam repellat inventore deserunt accusamus mollitia!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
