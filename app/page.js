"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="main-text mt-20 text-white flex flex-col items-center justify-center">
          <h1 className=" text-5xl px-10 md:text-5xl  text-center  bg-gradient-to-r from-[#EB568E] to-[#144EE3] bg-clip-text text-transparent font-bold ">Shorten Your Looong Links :)</h1>
          <p className="md:px-125 px-10 text-center mt-5 text-gray-300">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
        </div>
        <div className="inputs mt-5 flex items-center justify-center flex-col gap-3">
          <input onChange={e => seturl(e.target.value)} value={url} className="bg-[#181E29] text-gray-300 px-4 focus:ring-[#C9CED6] p-4 w-[20rem] md:w-[30rem] rounded-full" type="text" placeholder="Enter the URL here" />
          <input onChange={e => setshorturl(e.target.value)} value={shorturl} className="bg-[#181E29] text-gray-300 px-4 focus:ring-[#C9CED6] p-4 w-[20rem] md:w-[30rem] rounded-full" type="text" placeholder="Enter your desired name for URL" />
          <button onClick={generate} className="text-white p-4 w-44 rounded-full font-semibold text-xl  bg-[#144EE3]">Shorten Now!</button>
        </div>

        {generated && <>
          <div className="text-gray-300 mt-5 bg-[#181E29] p-4 rounded-lg px-10 ">
            <div className="font-semibold text-xl ">Shorten Link:</div>
            <Link className="text-white hover:underline-offset-4 hover:underline hover:text-blue-300" target="_blank" href={generated}>{generated}
            </Link>
          </div>
        </>
        }

      </div>
    </>
  );
}
