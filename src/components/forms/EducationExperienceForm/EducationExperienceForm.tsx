import { useFieldArray, useFormContext } from "react-hook-form";
import BulletPointForm from "../BulletPointForm/BulletPointForm";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const EducationExperienceForm = () => {
  const { register, control } = useFormContext();
  const valueName: string = "educationInfoValues";
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    name: valueName,
    control,
  });

  const onAddEducation = () => {
    appendEducation({
      companyName: "",
      jobRole: "",
      duration: "",
      achievements: [{}],
    });
  };

  return (
    <>
      {educationFields.map((field, index) => {
        return (
          <div key={field.id} className="space-y-3 mt-6">
            {/* School name */}
            <FormItem>
              <FormLabel>School name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Best University"
                  {...register(`educationInfoValues.${index}.institutionName`)}
                />
              </FormControl>
            </FormItem>

            {/* Study Name */}
            <FormItem>
              <FormLabel>Study Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Bachelors of Business Management"
                  {...register(`educationInfoValues.${index}.studyName`)}
                />
              </FormControl>
            </FormItem>

            {/* Duration */}
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="2022 - 2023"
                  {...register(`educationInfoValues.${index}.duration`)}
                />
              </FormControl>
            </FormItem>

            <BulletPointForm
              name={valueName}
              nestIndex={index}
              {...{ control, register }}
            />

            <div>
              <Separator className="py-1 mt-6" />
            </div>

            {/* Render "Add Job" button only after the last job entry */}
            {index === educationFields.length - 1 && (
              <Button type="button" onClick={onAddEducation} className="mr-1">
                Add Education
              </Button>
            )}

            {/* Show "Delete Job" for all entries except the first one */}
            {educationFields.length > 1 &&
              index === educationFields.length - 1 && (
                <Button type="button" onClick={() => removeEducation(index)}>
                  Delete Education
                </Button>
              )}
          </div>
        );
      })}
    </>
  );
};

export default EducationExperienceForm;
