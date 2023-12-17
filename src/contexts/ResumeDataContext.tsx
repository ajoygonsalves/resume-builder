import { createContext, useState, ReactNode } from "react";
import { FormAggregateValues } from "@/types/types";

interface ResumeDataContextType {
  resumeData: FormAggregateValues | null;
  updateResumeData: (newData: FormAggregateValues) => void;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
}

type ResumeDataProviderProps = {
  children: ReactNode;
};

export const ResumeDataContext = createContext<
  ResumeDataContextType | undefined
>(undefined);

export const ResumeDataProvider = ({ children }: ResumeDataProviderProps) => {
  const [resumeData, setResumeData] = useState<FormAggregateValues | null>(
    null
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const updateResumeData = (newData: FormAggregateValues) => {
    setResumeData(newData);
  };

  return (
    <ResumeDataContext.Provider
      value={{ resumeData, updateResumeData, isSubmitted, setIsSubmitted }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
