const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const BugsSchema = new Schema ({

    title : {
        type: String,
        trim: true
      },
  
     description : {
        type: String,
        trim: true
      },
  
     link : {
        type: String,
        trim: true
      },

      dueDate: {
        type: String,
        trim: true
      },
  
      pay: {
          type: String,
          trim: true
        },

        languages: {
            type: String,
            trim: true
        },
        user: {
          type: String,
          trim: true
        },

});

var Bugs = mongoose.model('Bugs', BugsSchema);

module.exports = Bugs;