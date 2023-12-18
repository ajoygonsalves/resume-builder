import { useForm, FormProvider } from "react-hook-form";
import { PersonalInfoForm } from "../PersonalInfoForm";
import WorkExperienceForm from "@/components/forms/WorkExperienceForm/WorkExperienceForm";
import EducationExperienceForm from "@/components/forms/EducationExperienceForm/EducationExperienceForm";
import { FormAggregateValues } from "@/types/types";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAggregateValuesSchema } from "@/types/schemas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const FormAggregate = () => {
  const context = useContext(ResumeDataContext);

  if (!context) {
    throw new Error("FormAggregate must be used within a ResumeDataProvider");
  }

  const { updateResumeData, setIsSubmitted } = context;

  const methods = useForm<FormAggregateValues>({
    resolver: zodResolver(FormAggregateValuesSchema),
    defaultValues: {
      personalInfoValues: {
        firstName: "",
        lastName: "",
      },
      workInfoValues: [
        {
          companyName: "",
          jobRole: "",
          duration: "",
          achievements: [{}],
        },
      ],
      educationInfoValues: [
        {
          institutionName: "",
          studyName: "",
          duration: "",
          achievements: [{}],
        },
      ],
    },
  });

  const onSubmit = (data: FormAggregateValues) => {
    updateResumeData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="overflow-scroll">
      <Tabs defaultValue="personal" className="w-full">
        <div className="flex flex-row justify-between">
          <TabsList>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <Button type="submit" form="aggregate">
            Submit
          </Button>
        </div>

        <FormProvider {...methods}>
          <form id="aggregate" onSubmit={methods.handleSubmit(onSubmit)}>
            {/* Personal Info */}
            <TabsContent value="personal">
              <PersonalInfoForm />
            </TabsContent>

            {/* Work */}
            <TabsContent value="work">
              <WorkExperienceForm />
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <EducationExperienceForm />
            </TabsContent>
            {/* Skills */}
          </form>
        </FormProvider>
      </Tabs>
    </div>
  );
};

export default FormAggregate;
