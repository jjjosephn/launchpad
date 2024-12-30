// import { createClient } from '@sanity/client';

// // Set up the Sanity client with your project details
// const client = createClient({
//   projectId: '8g2fvzts', // replace with your Sanity project ID
//   dataset: 'production', // replace with your dataset name
//   apiVersion: '2023-01-01', // specify a recent API version
//   useCdn: false, // use false for real-time updates
//   token: 'sk4OfvzZYtDmrwDNrTd0Lkq7MMpOYRSNah2cCW3b32154stjaTMk7VXQK6onR1TLt2PChsLl0ypP1yDlZDsPb3rrsqqdwV7QuvBNzZa66op168ShVo7eacAdR9MBYsPtuf1fHS7eNLfaoDeTS82qaGxPcKyEC5gJtaISeScwWQkGA3Tf7jNY'
// });

// async function deleteDrafts() {
//   try {
//     // Fetch the draft document
//     const draftId = 'drafts.362b0e8c-a18b-4e7c-9899-207340cc8cb9';
//     const draft = await client.fetch(`*[]`);
//     console.log('Draft:', draft);

//     if (draft.length === 0) {
//       console.log('No draft found with the specified ID.');
//       return;
//     }

//     // Perform the deletion of the draft
//     await client.delete(draftId);
//     console.log(`Draft with ID "${draftId}" deleted successfully.`);
//   } catch (err) {
//     console.error('Error deleting draft:', err);
//   }
// }

// // Call the function to delete drafts
// deleteDrafts();
