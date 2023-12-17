import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, Control, UseFormRegister } from "react-hook-form";

interface BulletPointFormProps {
  nestIndex: number;
  control: Control;
  register: UseFormRegister<any>;
  name: string;
}

const BulletPointForm = ({
  nestIndex,
  control,
  register,
  name,
}: BulletPointFormProps) => {
  const {
    fields: bulletPointFields,
    append: appendBulletPoint,
    remove: removeBulletPoint,
  } = useFieldArray({
    name: `${name}.${nestIndex}.achievements`,
    control,
  });
  return (
    <>
      {bulletPointFields.map((bulletPoint, bulletIndex) => {
        return (
          <FormItem key={bulletPoint.id}>
            {/* Achievements */}
            <FormLabel>Achievement</FormLabel>

            <div className="flex flex-row space-x-1">
              <FormControl>
                <Input
                  type="text"
                  {...register(
                    `${name}[${nestIndex}].achievements[${bulletIndex}].bullet`
                  )}
                  placeholder="Explain a highlight in just a few words"
                />
              </FormControl>
              <Button
                type="button"
                onClick={() => appendBulletPoint({ bullet: "" })}
              >
                +
              </Button>
              {bulletIndex > 0 && (
                <Button
                  type="button"
                  onClick={() => removeBulletPoint(bulletIndex)}
                >
                  -
                </Button>
              )}
            </div>
          </FormItem>
        );
      })}
    </>
  );
};

export default BulletPointForm;
