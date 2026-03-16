import mongoose from "mongoose";
const { Schema } = mongoose;

const EducationSchema = new Schema({
  degreeName: { type: String, required: true },
  collegeName: { type: String, required: true },
  startYear: { type: Number, required: true },
  endYear: { type: Number, required: true },
  CGPA: { type: Number, required: true },
  summary: { type: String, required: true },
});

const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  projectRole: { type: String, required: true },
  projectStartYear: { type: Number, required: true },
  projectEndYear: { type: Number, required: true },
  projectDuration: { type: Number, required: true },
  projectSummary: { type: String, required: true },
  techStack: [String],
});

const SkillItemSchema = new Schema({
  skillName: { type: String, required: true },
  skillLevel: String,
  skillsExperience: { type: Number, required: true },
});

const SkillCategorySchema = new Schema({
  skillFieldName: { type: String, required: true },
  skillsStack: [SkillItemSchema],
  skillSummary: { type: String, required: true },
});

const ResumeSchema = new Schema(
  {
    personalsDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      age: { type: Number, required: true },
      emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      jobTarget: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      optionalNumber: { type: String, required: true },
      linkedInUrl: { type: String, required: true },
      githubUrl: { type: String, required: true },
      birthDate: { type: Date, required: true },
    },
    optionalsDetails: {
      gender: String,
      personalWebsite: { type: String, required: true },
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      nationality: { type: String, required: true },
      summary: { type: String, required: true },
    },
    educationalDetails: [EducationSchema],
    projectsDetails: [ProjectSchema],
    skillsDetails: [SkillCategorySchema],
  },
  {
    timestamps: true,
  },
);

export const Resume = mongoose.model("Resume", ResumeSchema);

