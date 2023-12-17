import { useFieldArray, useFormContext } from "react-hook-form";
import BulletPointForm from "../BulletPointForm/BulletPointForm";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const WorkExperienceForm = () => {
  const { register, control } = useFormContext();
  const valueName: string = "workInfoValues";
  const {
    fields: jobFields,
    append: appendJob,
    remove: removeJob,
  } = useFieldArray({
    name: valueName,
    control,
  });

  const onAddJob = () => {
    appendJob({
      companyName: "",
      jobRole: "",
      duration: "",
      achievements: [{}],
    });
  };

  return (
    <>
      {jobFields.map((field, index) => {
        return (
          <div key={field.id} className="space-y-3 mt-6">
            {/* Company Name */}
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...register(`workInfoValues.${index}.companyName`)}
                  placeholder="Best Company Ltd"
                ></Input>
              </FormControl>
            </FormItem>

            {/* Job Role */}
            <FormItem>
              <FormLabel>Job Role</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...register(`workInfoValues.${index}.jobRole`)}
                  placeholder="Developer"
                ></Input>
              </FormControl>
            </FormItem>

            {/* Duration */}
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...register(`workInfoValues.${index}.duration`)}
                  placeholder="2023 - Present"
                ></Input>
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
            {index === jobFields.length - 1 && (
              <Button type="button" onClick={onAddJob} className="mr-1">
                Add Job
              </Button>
            )}

            {/* Show "Delete Job" for all entries except the first one */}
            {jobFields.length > 1 && index === jobFields.length - 1 && (
              <Button type="button" onClick={() => removeJob(index)}>
                Delete Job
              </Button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default WorkExperienceForm;
