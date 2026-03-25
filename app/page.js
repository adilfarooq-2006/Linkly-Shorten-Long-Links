"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [loading, setloading] = useState(false)

  const generate = () => {
    if (!url || !shorturl) {
      alert("Please fill in both fields");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    setloading(true)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        setloading(false)
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center ">
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div> */}

        <div className="main-text mt-20 text-white flex flex-col items-center justify-center">
          <h1 className=" text-xl px-10 md:text-6xl  text-center  bg-gradient-to-r from-[rgb(235,86,142)] to-[#144EE3] bg-clip-text text-transparent font-bold ">
            Shorten Your Looong Links :)
          </h1>
          <p className="md:px-125 px-10 text-center mt-5 text-gray-300">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
        </div>
        <div className="inputs mt-5 flex items-center justify-center flex-col gap-3">
          <input
            onChange={(e) => seturl(e.target.value)}
            value={url}
            className="bg-[#181E29] text-gray-300 px-4 focus:ring-[#4a5565] p-4 w-[20rem] md:w-[30rem] rounded-full border border-gray-700"
            type="text"
            placeholder="Enter the URL here"
          />
          <input
            onChange={(e) => setshorturl(e.target.value)}
            value={shorturl}
            className="bg-[#181E29] text-gray-300 px-4 focus:ring-[#4a5565] p-4 w-[20rem] md:w-[30rem] rounded-full border border-gray-700"
            type="text"
            placeholder="Enter your desired name for URL"
          />
          <button
            onClick={generate}
            className="text-white hover:cursor-pointer p-4 w-44 rounded-full font-semibold text-xl  bg-[#144EE3]">
            {loading ? "Shortning..." : "Shorten Now!"}
          </button>
        </div>

        {generated && (
          <div className="mt-10 bg-[#181E29] backdrop-blur-sm rounded-2xl p-6 border border-gray-700 w-full max-w-2xl animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-[rgb(235,86,142)] font-semibold mb-2">
                  Your shortened link:
                </div>
                <Link
                  className="text-white hover:text-blue-300 hover:underline underline-offset-4 transition-colors duration-300 break-all"
                  target="_blank"
                  href={generated}>
                  {generated}
                </Link>
              </div>
              <button
                onClick={copyToClipboard}
                className="ml-4 hover:cursor-pointer bg-gradient-to-bl from-[rgb(235,86,142)] to-[#144EE3] hover:bg-green-600 text-white p-3 rounded-xl transition-colors duration-300"
                title="Copy to clipboard">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
