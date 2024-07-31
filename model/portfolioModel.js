// import mongoose from "mongoose";

// const introSchema = new mongoose.Schema({
//   welcomeText: {
//     type: String,
//     required: true,
//   },
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   caption: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const aboutSchema = new mongoose.Schema({
//   lottieURL: {
//     type: String,
//     required: true,
//   },
//   description1: {
//     type: String,
//     required: true,
//   },
//   description2: {
//     type: String,
//     required: true,
//   },
//   skills: {
//     type: Array,
//     required: true,
//   },
// });

// const experienceSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   period: {
//     type: String,
//     required: true,
//   },
//   company: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const projectsSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   shortDescription: {
//     type: String,
//     required: true,
//   },
//   detailedDescription: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
//   technologies: {
//     type: Array,
//     required: true,
//   },
// });

// const coursesSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
// });

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = {
//   Intro: mongoose.model("intros", introSchema),
//   About: mongoose.model("abouts", aboutSchema),
//   Experience: mongoose.model("experiences", experienceSchema),
//   Project: mongoose.model("projects", projectsSchema),
//   Course: mongoose.model("courses", coursesSchema),
//   Contact: mongoose.model("contacts", contactSchema),
// };



import mongoose from "mongoose";

// Intro Schema and Model
const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Intro = mongoose.model("Intro", introSchema);

// About Schema and Model
// About Schema and Model
const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: [{
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
      min: 0, // Minimum value of 0%
      max: 100, // Maximum value of 100%
    }
  }],
});

const About = mongoose.model("About", aboutSchema);

// Experience Schema and Model
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

// Projects Schema and Model
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  detailedDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});

const Project = mongoose.model("Project", projectsSchema);

// Courses Schema and Model
const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", coursesSchema);

// Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);


const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

export { Intro, About, Experience, Project, Course, Contact,Message };
