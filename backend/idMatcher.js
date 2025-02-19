import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { learningsModule } from './models/learnings.js'; // Import the correct module
import { userModule } from './models/user.js'; // Import the correct module

// Connect to MongoDB
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    updateCreatorsLearnings();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Function to update creators' learnings array
const updateCreatorsLearnings = async () => {
  try {
    // Fetch all learnings from the learnings collection
    const learnings = await learningsModule.find({}); // Use learningsModule instead of Learning

    // Iterate through each learning document
    for (const learning of learnings) {
      const creatorId = learning.creator; // Assuming the field is named "creator"
      const learningId = learning._id;

      // Update the creators collection to include this learning in the creator's learnings array
      await userModule.updateOne( // Use userModule instead of Creator
        { _id: creatorId }, // Match the creator by their _id
        { $addToSet: { learnings: learningId } } // Add the learningId to the learnings array
      );
    }

    console.log("All learnings have been added to their respective creators.");
  } catch (err) {
    console.error("Error updating creators' learnings:", err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};