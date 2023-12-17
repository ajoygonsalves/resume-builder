import { z } from "zod";

const BulletPointSchema = z.object({
  bullet: z.string().optional(),
});

const PersonalInfoValuesSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
});

const WorkInfoValuesSchema = z.object({
  companyName: z.string(),
  jobRole: z.string(),
  duration: z.string(),
  achievements: z.array(BulletPointSchema),
});

const EducationInfoValuesSchema = z.object({
  institutionName: z.string(),
  studyName: z.string(),
  duration: z.string(),
  achievements: z.array(BulletPointSchema),
});

export const FormAggregateValuesSchema = z.object({
  personalInfoValues: PersonalInfoValuesSchema,
  workInfoValues: z.array(WorkInfoValuesSchema),
  educationInfoValues: z.array(EducationInfoValuesSchema),
  // Uncomment and define SkillsInfoValuesSchema if needed
  // skillsInfoValues: SkillsInfoValuesSchema,
});
