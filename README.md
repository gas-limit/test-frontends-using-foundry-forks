# Video Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/t4JB9_6QaSE/0.jpg)](https://www.youtube.com/watch?v=t4JB9_6QaSE)

## 1. fork eth mainnet
`FORK_URL=https://ethereum-rpc.publicnode.com`

`anvil --fork-url $FORK_URL --port 9001 --chain-id 1337`

## 2. deploy contract which swaps eth for USDC and sends it to the recipient
`forge create SwapAndSend --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --rpc-url localhost:9001`

## 3. use script to call the swap contract 
`forge script script/CallSwapAndSend.s.sol:CallSwapAndSend --rpc-url http://localhost:9001 --broadcast --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

## 4. call balanceOf in CLI
`cast call --rpc-url http://localhost:9001 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 "balanceOf(address)(uint256)" 0x2Da0F33BB8e9352e226457a63C4A22F877446aD8`

## 5. configure fork in metamask
Enter the fork name, rpc url: `http://localhost:9001` Chain ID: 1337
