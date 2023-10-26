"use client";

import React from "react";
import { InjectedConnector, StarknetConfig } from '@starknet-react/core'

const connectors = [
  new InjectedConnector({ options: { id: "argentX" } }),
];

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
	console.log("Connectors: ", connectors)
	return (
		<>
			<StarknetConfig connectors={connectors} autoConnect>
				{children}
			</StarknetConfig>
		</>
	);
}
 
export default LayoutClient;