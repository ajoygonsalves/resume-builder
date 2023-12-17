export type BulletPoint = {
  bullet?: string; // Using optional because the first entry in achievements array is an empty object
};

// Define the type for personal information
export type PersonalInfoValues = {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
};

// Define the type for work experience information
export type WorkInfoValues = {
  companyName: string;
  jobRole: string;
  duration: string;
  achievements: BulletPoint[];
};

// Define the type for education information
export type EducationInfoValues = {
  institutionName: string;
  studyName: string;
  duration: string;
  achievements: BulletPoint[];
};

// Define the type for the skills section if needed
// export type SkillsInfoValues = {
//   // ... properties of skills
// };

// Aggregate type that uses the above-defined types
export type FormAggregateValues = {
  personalInfoValues: PersonalInfoValues;
  workInfoValues: WorkInfoValues[];
  educationInfoValues: EducationInfoValues[];
  // skillsInfoValues: SkillsInfoValues[];
};
