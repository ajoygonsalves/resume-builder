import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const PersonalInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2 mt-6">
      {/* First Name */}
      <FormItem>
        <FormLabel htmlFor="personalInfoValues.firstName">First Name</FormLabel>
        <FormControl>
          <Input
            id="personalInfoValues.firstName"
            type="text"
            {...register("personalInfoValues.firstName")}
            placeholder="John"
          />
        </FormControl>
      </FormItem>

      {/* Last Name */}
      <FormItem>
        <FormLabel htmlFor="personalInfoValues.lastName">Last Name</FormLabel>
        <FormControl>
          <Input
            id="personalInfoValues.lastName"
            type="text"
            {...register("personalInfoValues.lastName")}
            placeholder="Doe"
          />
        </FormControl>
      </FormItem>

      {/* Address */}
      <FormItem>
        <FormLabel htmlFor="personalInfoValues.address">Address</FormLabel>
        <FormControl>
          <Input
            id="personalInfoValues.address"
            type="text"
            {...register("personalInfoValues.address")}
            placeholder="2712 Broadway St"
          />
        </FormControl>
      </FormItem>

      {/* Phone number */}
      <FormItem>
        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
        <FormControl>
          <Input
            id="personalInfoValues.phoneNumber"
            type="text"
            {...register("personalInfoValues.phoneNumber")}
            placeholder="(912) 555-4321"
          />
        </FormControl>
      </FormItem>

      {/* Email */}
      <FormItem>
        <FormLabel htmlFor="personalInfoValues.email">Email</FormLabel>
        <FormControl>
          <Input
            id="personalInfoValues.email"
            type="text"
            {...register("personalInfoValues.email")}
            placeholder="john@gmail.com"
          />
        </FormControl>
      </FormItem>

      {errors.email && (
        <FormMessage>{errors.email.message as string}</FormMessage>
      )}
    </div>
  );
};
