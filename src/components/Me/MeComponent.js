import React, { useState } from 'react';
import SocialComponent from '../Social/Social';



const MeComponent = () =>  {
  return (

    <div>
      <div class="grid grid-cols-3 space-y-8">
      <div class="lg:col-start-2 lg:col-span-1 col-span-3 text-center">
          <p class="text-5xl">Alex Pérez Ferreira</p>
          <div> <p>.NET DEVELOPER | BARCELONA</p></div>
      </div>
     <div class="lg:col-start-2 lg:col-span-1 col-span-3 mx-8">
     <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1994</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Born in Barcelona</p>
       
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>
       
     </div>
      </div>

    </div>
  );
}

export default MeComponent;