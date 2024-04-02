// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRouter {
    function swapExactETHForTokens(uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)
        external
        payable
        returns (uint256[] memory amounts);
}

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract SwapAndSend {
    address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;


    function swapAndSend(address recipient) external payable {
        address[] memory path = new address[](2);
        path[0] = WETH;
        path[1] = USDC;

        IRouter(ROUTER).swapExactETHForTokens{value: msg.value}(0, path, address(this), block.timestamp + 15);

        uint256 usdcBalance = IERC20(USDC).balanceOf(address(this));
        require(IERC20(USDC).transfer(recipient, usdcBalance), "Transfer failed");
       
    }
}
