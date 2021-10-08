import mongoose, { Schema, Document } from "mongoose";

interface Chore extends Document {
  choreName: string;
  isPinned: boolean;
  cardColor?: string;
  durations?: Duration[];
}

interface Duration extends Document {
  duration: string;
  started: string;
  ended: string;
}

const choreSchema = new Schema<Chore>({
  choreName: {
    type: String,
    required: true,
    unique: true,
  },
  durations: [
    {
      started: String,
      ended: String,
      duration: String,
    },
  ],
  cardColor: {
    type: String,
    default: "none",
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<Chore>("Chore", choreSchema);
