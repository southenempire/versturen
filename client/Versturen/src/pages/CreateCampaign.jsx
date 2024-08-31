import React from 'react'

const CreateCampaign = () => {
  return (
    <div>
      
    </div>
  )
}

export default CreateCampaign



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
// import { useConnection } from '@solana/wallet-adapter-react';
// import * as anchor from '@project-serum/anchor';
// import { money } from '../assets';
// import { CustomButton, FormField, Loader } from '../components';
// import { checkIfImage } from '../utils';

// const CreateCampaign = () => {
//   const navigate = useNavigate();
//   const { connection } = useConnection();
//   const { publicKey, sendTransaction } = useWallet();
//   const [isLoading, setIsLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     title: '',
//     description: '',
//     target: '',
//     deadline: '',
//     image: ''
//   });

//   const handleFormFieldChange = (fieldName, e) => {
//     setForm({ ...form, [fieldName]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!publicKey) {
//       alert('Please connect your wallet!');
//       return;
//     }

//     checkIfImage(form.image, async (exists) => {
//       if(exists) {
//         setIsLoading(true);
//         try {
//           const provider = new anchor.AnchorProvider(connection, window.solana, 'confirmed');
//           const program = new anchor.Program(IDL, new PublicKey('YOUR_PROGRAM_ID'), provider);

//           const [campaignPda] = await PublicKey.findProgramAddress(
//             [Buffer.from('campaign'), publicKey.toBuffer()],
//             program.programId
//           );

//           const tx = await program.methods.createCampaign(
//             form.title,
//             form.description,
//             new anchor.BN(parseFloat(form.target) * anchor.web3.LAMPORTS_PER_SOL),
//             new anchor.BN(new Date(form.deadline).getTime() / 1000),
//             form.image
//           )
//           .accounts({
//             campaign: campaignPda,
//             user: publicKey,
//             systemProgram: SystemProgram.programId,
//           })
//           .rpc();

//           console.log("Transaction signature", tx);
          
//           setIsLoading(false);
//           navigate('/');
//         } catch (error) {
//           console.error("Error creating campaign:", error);
//           setIsLoading(false);
//           alert('Failed to create campaign. Please try again.');
//         }
//       } else {
//         alert('Provide valid image URL')
//         setForm({ ...form, image: '' });
//       }
//     })
//   }

//   return (
//     <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
//       {isLoading && <Loader />}
//       <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
//         <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
//       </div>
//       <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
//         <div className="flex flex-wrap gap-[40px]">
//           <FormField 
//             labelName="Your Name *"
//             placeholder="John Doe"
//             inputType="text"
//             value={form.name}
//             handleChange={(e) => handleFormFieldChange('name', e)}
//           />
//           <FormField 
//             labelName="Campaign Title *"
//             placeholder="Write a title"
//             inputType="text"
//             value={form.title}
//             handleChange={(e) => handleFormFieldChange('title', e)}
//           />
//         </div>
//         <FormField 
//             labelName="Story *"
//             placeholder="Write your story"
//             isTextArea
//             value={form.description}
//             handleChange={(e) => handleFormFieldChange('description', e)}
//           />
//         <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
//           <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
//           <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
//         </div>
//         <div className="flex flex-wrap gap-[40px]">
//           <FormField 
//             labelName="Goal *"
//             placeholder="SOL 0.50"
//             inputType="text"
//             value={form.target}
//             handleChange={(e) => handleFormFieldChange('target', e)}
//           />
//           <FormField 
//             labelName="End Date *"
//             placeholder="End Date"
//             inputType="date"
//             value={form.deadline}
//             handleChange={(e) => handleFormFieldChange('deadline', e)}
//           />
//         </div>
//         <FormField 
//             labelName="Campaign image *"
//             placeholder="Place image URL of your campaign"
//             inputType="url"
//             value={form.image}
//             handleChange={(e) => handleFormFieldChange('image', e)}
//           />
//           <div className="flex justify-center items-center mt-[40px]">
//             <CustomButton 
//               btnType="submit"
//               title="Submit new campaign"
//               styles="bg-[#1dc071]"
//             />
//           </div>
//       </form>
//     </div>
//   )
// }

// export default CreateCampaign;