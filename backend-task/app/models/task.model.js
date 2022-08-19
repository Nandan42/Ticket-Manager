// model for task
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title:{
        type: String,
        required: true,
          }, 
      description: {
        type: String,
        required: false,
      },
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
          type : String,
          required: true,
      },
      priority: {
        type : String,
        required: true,
    },
    status: {
      type : String,
      required: true,
  },
    }
  );


  const Task = mongoose.model("task", schema);
  return Task;
};
