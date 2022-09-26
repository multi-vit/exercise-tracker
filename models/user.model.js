export default function userSchema(mongoose) {
  const userSchema = new mongoose.Schema({
    username: String,
    //Prevent version key being selected when querying (but keep creating it as per best practice)
    __v: { type: Number, select: false },
  });

  const User = mongoose.model("User", userSchema);
  return User;
}
