<template>
    <button class="fancy-btn">
        <slot/> 
      </button>
  </template>
  
  <style>
  .fancy-btn {
    color: #fff;
    background: linear-gradient(315deg, yellow 25%, red);
    cursor: pointer;
    }
  </style>