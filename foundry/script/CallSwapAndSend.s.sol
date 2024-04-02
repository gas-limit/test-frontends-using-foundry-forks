// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/swapAndSend.sol";

contract CallSwapAndSend is Script {
    function run() public {

        address contractAddress = 0x4Dd5336F3C0D70893A7a86c6aEBe9B953E87c891;

        address recipient = 0x2Da0F33BB8e9352e226457a63C4A22F877446aD8;

        SwapAndSend swapAndSend = SwapAndSend(contractAddress);

        uint256 amount = 100 ether;

        vm.startBroadcast();
        swapAndSend.swapAndSend{value: amount}(recipient);
        vm.stopBroadcast();
    }
}
