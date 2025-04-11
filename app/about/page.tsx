"use client";
import { Pencil } from "lucide-react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "The sunset goes down later then usual at 7:30.",
    "In the world cup, the most goals scored was 10",
    "The earliest versions of soccer can be traced back 3,000 years.",
    "Algeria is the largest country in Africa.",
    "The Sahara takes up most of Algeria.",
    "The FIFA world cup is the most watched sport event in the world.",
    "The most goals scored by one person in the European league was 50.",
    "France is the most visited country in the world.",
    "France is smaller than Texas.",
    "Washington produces more apples than any other state.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <Button
        className="bg-sky-600 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press 4 Fact
      </Button>
      <p>{fact}</p>
      <img
        alt="Three people"
        src="https://issaquah.instructure.com/files/17001064/download?download_frd=1&verifier=lp3FeXcExR1eY5va6vSzABxrE9s5QQYdZGbQOVWx"
      />
      <p>Mayors cup in Vegas with my teammates.</p>
      <img
        alt="Soccer field"
        src="https://issaquah.instructure.com/files/17001206/download?download_frd=1&verifier=7XuMmG2ElDcPlAYVjKgrMi0vXFLMym9z7zAVVDJl"
      />
      <p>
        One of my favorite things to do is going to the fields with my friends.
      </p>
      <img
        alt="Me and my teammates"
        src="https://issaquah.instructure.com/files/17018065/download?download_frd=1&verifier=684RNn6yo6Q4MiDQmavXWWACunOj8iEXyduBqXpj"
      />
      <p>Some of my favorite people are my team and my coach.</p>
      <img
        alt="Mosque in Algeria"
        src="https://issaquah.instructure.com/files/17018226/download?download_frd=1&verifier=gVgD37yeaxePiRsjjCsEBGyNnrz9NemLiq9DlfRp"
      />
      <p>
        One of my favorite places is where i&apos;m from and it&apos;s Oran in
        Algeria.
      </p>
      <h1 className={title()}>Interests</h1>
      <p>
        Some of my favorite things to do are playing soccer with my friends as
        well as just hanging out with them whether it&apos;s in person or over
        phone. My brother and sister are also really important to me because we
        grew up really close. In addition, I love to go shopping especially for
        clothes. This information is essential to me because it&apos;s what
        makes me myself and are what i&apos;m interested in.
      </p>
      <h1 className={title()}>Links</h1>

      {/* <div className= "border-2 border-black p-4" href="https://garliccrush.com/">Garlic Crush Websit </div> i tried making a boarder but ran out of time -rhea */}
      {/* fix this boarder!! */}

      {/* <im trying to add a link for one of my favorite restaurant which is garlic crush in gilman* DONE, fix on formatting/ Avishi}
      {/* i also want to fix the western WA surf link to move down , Fix on format Avishi*/}
      <p>______________________</p>
      <a href="https://westernwasurf.com/">Western WA Surf Soccer Club</a>
      <h1>-----------------------------------</h1>
      {/* <p><b>(CLICK) Above is the link of the Western WA Surf Soccer Club where Norah plays!</b></p> Avishi */}
      <Button
        as={Link}
        className="bg-blue-900"
        href="https://issaquah.instructure.com/"
      >
        <Pencil />
        Canvas
      </Button>
    </div>
  );
}
