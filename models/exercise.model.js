export default function exerciseSchema(mongoose) {
  const exerciseSchema = new mongoose.Schema({
    userId: String,
    description: String,
    duration: Number,
    date: Date,
    //Prevent version key being selected when querying (but keep creating it as per best practice)
    __v: { type: Number, select: false },
  });

  const Exercise = mongoose.model("Exercise", exerciseSchema);
  return Exercise;
}
