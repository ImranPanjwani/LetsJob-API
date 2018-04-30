const mongoose = require('mongoose');
const slug = require('slug');
const uniqueValidator = require('mongoose-unique-validator');

const jobSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['ENGR', 'MARKT', 'TEACH', 'IT', 'FINACC', 'BD', 'BANK']
  },
  times_viewed: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  contact_emails: [
    {
      type: String,
      validate: {
        validator(v) {
          return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: ' {VALUE} is not a valid email !'
      }
    }
  ],
  contact_numbers: [
    {
      type: Number,
      validate: {
        validator(v) {
          return /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(v);
        },
        message: '{VALUE} is not a valid mobile number !'
      }
    }
  ]
},
{ timestamps: true });

jobSchema.plugin(uniqueValidator, ' is already taken');

jobSchema.pre('validate', (next) => {
  if (!this.slug) {
    this.slugify();
  }

  next();
});

jobSchema.methods.slugify = () => {
  this.slug = `${slug(this.title)}-${Math.round(Math.random() * (36 ** 6)).toString()}`;
};

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
