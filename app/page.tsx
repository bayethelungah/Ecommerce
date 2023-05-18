import React from "react";
import Container from "@/components/ui/container";
import Card from "@/components/card";

async function getHeroImages() {}

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-start items-center h-screen before:z-[-1] before:absolute before:bg-primary before:h-1/3 before:w-full z-0 mt-5">
      <h1 className=" text-4xl font-bold mt-7">Hand Crafted Delights</h1>
      <div className="flex justify-center items-center gap-44 mt-16">
        <Container className=" rounded-full p-[10%]">Hello world</Container>
        <Container className=" rounded-full p-[10%]">Hello world</Container>
        <Container className=" rounded-full p-[10%]">Hello world</Container>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h3 className="text-2xl font-bold self-start">Hot Items</h3>
        <div className="flex justify-start items-center">
          <Card>Item 1</Card>
        </div>
      </div>
    </div>
  );
}
