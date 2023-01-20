import Image from "next/image";
import React from "react";

const hydrangea = () => {
  return (
    <>
      <div className="container mx-auto dark:text-white text-xl">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          nostrum illum iure, illo dolores tempore eius fugit reiciendis dicta
          voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem rerum quaerat corporis, odio maiores voluptatum animi
          tempore veniam ipsum recusandae atque esse mollitia quo nemo quis?
          Tempore deserunt, optio sed reiciendis blanditiis atque laudantium
          dolore repellendus, a obcaecati excepturi dolorum nemo amet ad
          pariatur? Dolorum a, inventore ad maxime necessitatibus laboriosam
          molestias exercitationem similique id maiores, temporibus error ipsa
          sit.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nulla.
        </p>
        <br />
        <Image
          src={"/hydrangea-cover.jpg"}
          className="rounded-t-lg w-full h-40"
          alt=""
          width="0"
          height="100"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eius,
          eos vel neque deleniti dolor ipsum debitis, placeat a adipisci nihil
          quisquam veniam consequatur, aspernatur recusandae laboriosam
          provident voluptatibus mollitia.
        </p>
      </div>
    </>
  );
};

export default hydrangea;
