import React, { useState } from "react";

export const Test = () => {
  var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        // console.log(nums[j++]);
        nums[j++] = nums[i];

        //  console.log(nums);
      }
    }

    console.log(j);
  };

  removeElement([3, 2, 2, 3], 3);
  //15
  //19, 19, 19, 20, 19, 8, 19

  return <div style={{ position: "Absolute", marginTop: "100px" }}></div>;
};
//Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//Output: 1,4,13
