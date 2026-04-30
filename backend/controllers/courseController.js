const Course = require("../models/Course");

// CREATE COURSE (Instructor)
exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;

    const course = await Course.create({
      title,
      description,
      price,
      image,
      instructor: req.user.id,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL COURSES
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE COURSE
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "name email"
    );

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};