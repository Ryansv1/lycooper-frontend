"use client";

import { Grid, Flex, GridItem, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Sensores() {
  return (
    <>
      <Grid className="text-white min-h-screen relative pt-28 bg-blue-900 grid-cols-1 grid-flow-row">
        <h1 className=" text-sm relative text-center text-white z-10 mt-4"></h1>
        <Grid className="rounded-md m-4 p-4 grid-cols-1 sm:grid-cols-2 gap-4">
          <GridItem className="bg-green-400 rounded-md flex flex-col justify-center items-center"></GridItem>
          <GridItem className="bg-green-400 rounded-md flex flex-col justify-center items-center">
            <Flex>
              <Heading className="text-white">Temperatura está</Heading>
            </Flex>
          </GridItem>
        </Grid>
        <Grid className="rounded-md m-4 p-4 grid-cols-1 sm:grid-cols-2 gap-4">
          <GridItem className="bg-green-400 rounded-md flex flex-col justify-center items-center"></GridItem>
          <GridItem className="bg-green-400 rounded-md flex flex-col justify-center items-center"></GridItem>
        </Grid>
      </Grid>
    </>
  );
}
