import React, { useContext, createContext } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const address = publicKey?.toBase58();

  const publishCampaign = async (form) => {
    try {
      const campaignData = {
        title: form.title,
        description: form.description,
        target: form.target,
        deadline: new Date(form.deadline).getTime(),
        image: form.image,
        owner: address,
      };

      // Note: This is a simplified example. You'll need to implement the actual logic
      // to store the campaign data on-chain using your Solana program.
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('YourProgramAddressHere'), // Replace with your program's address
          lamports: 1000000, // Adjust as needed
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');

      console.log("Campaign published successfully", signature);
    } catch (error) {
      console.log("Failed to publish campaign", error);
    }
  };

  const getCampaigns = async () => {
    // Implement logic to fetch campaigns from your Solana program
    return [];
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    return allCampaigns.filter(campaign => campaign.owner === address);
  };

  const donate = async (campaignId, amount) => {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(campaignId), // Assuming campaignId is a Solana address
          lamports: amount * 1e9, // Convert SOL to lamports
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');

      console.log("Donation successful", signature);
    } catch (error) {
      console.log("Failed to donate", error);
    }
  };

  const getDonations = async (campaignId) => {
    // Implement logic to fetch donations for a specific campaign from your Solana program
    return [];
  };

  return (
    <StateContext.Provider
      value={{
        address,
        publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
