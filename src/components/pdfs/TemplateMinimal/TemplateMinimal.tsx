import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { EducationInfoValues } from "@/types/types";
import { WorkInfoValues } from "@/types/types";

// Register fonts
Font.register({
  family: "Montserrat",
  fonts: [
    { src: "./assets/fonts/Montserrat-Regular.ttf" }, // Default
    { src: "./assets/fonts/Montserrat-Bold.ttf", fontWeight: 700 },
    { src: "./assets/fonts/Montserrat-Italic.ttf", fontStyle: "italic" },
    {
      src: "./assets/fonts/Montserrat-BoldItalic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
    { src: "./assets/fonts/Montserrat-SemiBold.ttf", fontWeight: 600 },
    {
      src: "./assets/fonts/Montserrat-SemiBoldItalic.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
    { src: "./assets/fonts/Montserrat-Medium.ttf", fontWeight: 500 },
    {
      src: "./assets/fonts/Montserrat-MediumItalic.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    { src: "./assets/fonts/Montserrat-Light.ttf", fontWeight: 300 },
    {
      src: "./assets/fonts/Montserrat-LightItalic.ttf",
      fontWeight: 300,
      fontStyle: "italic",
    },
    { src: "./assets/fonts/Montserrat-ExtraBold.ttf", fontWeight: 800 },
    {
      src: "./assets/fonts/Montserrat-ExtraBoldItalic.ttf",
      fontWeight: 800,
      fontStyle: "italic",
    },
    { src: "./assets/fonts/Montserrat-Black.ttf", fontWeight: 900 },
    {
      src: "./assets/fonts/Montserrat-BlackItalic.ttf",
      fontWeight: 900,
      fontStyle: "italic",
    },
    { src: "assets/fonts/Montserrat-Thin.ttf", fontWeight: 100 },
    {
      src: "assets/fonts/Montserrat-ThinItalic.ttf",
      fontWeight: 100,
      fontStyle: "italic",
    },
    { src: "assets/fonts/Montserrat-ExtraLight.ttf", fontWeight: 200 },
    {
      src: "assets/fonts/Montserrat-ExtraLightItalic.ttf",
      fontWeight: 200,
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "CrimsonText",
  fonts: [
    { src: "assets/fonts/CrimsonText-Regular.ttf" },
    { src: "assets/fonts/CrimsonText-Bold.ttf", fontWeight: 700 },
    { src: "assets/fonts/CrimsonText-Italic.ttf", fontStyle: "italic" },
    {
      src: "assets/fonts/CrimsonText-BoldItalic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
    { src: "assets/fonts/CrimsonText-SemiBold.ttf", fontWeight: 600 },
    {
      src: "assets/fonts/CrimsonText-SemiBoldItalic.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 95, // Adjust padding as needed
    fontFamily: "CrimsonText", // Default font for the document
  },
  nameSection: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 6,
    textAlign: "center",
    letterSpacing: 2,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: 600,
  },
  contactText: {
    marginBottom: 2,
    textTransform: "uppercase",
  },
  sectionHeader: {
    fontFamily: "Montserrat",
    fontSize: 7,
    fontWeight: 700,
    textTransform: "uppercase",
    borderColor: "#000000",
    borderTop: 1,
    paddingTop: 4,
    marginBottom: 6,
    letterSpacing: 1,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  titleHeader: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 2,
  },
  listItem: {
    fontSize: 8,
    marginBottom: 2,
    display: "flex",
    flexDirection: "row",
  },
  bulletPoint: {
    width: 15,
    textAlign: "center",
    fontSize: 14,
    position: "relative",
    bottom: 3,
    right: 5,
  },
  listItemContent: {
    fontSize: 11,
    flex: 1, // take up the rest of the space in the flex container
    textAlign: "left", // align the text to the left
    maxWidth: 375,
  },
  italicsSubtitle: {
    fontSize: 12,
    marginBottom: 3,
    fontStyle: "italic",
  },
  placeDuration: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upperCase: {
    textTransform: "uppercase",
  },
  marginTop: {
    marginTop: 10,
  },
  welcomeMessageContainer: {
    textAlign: "center", // Center the welcome message
    marginTop: 50, // Add some margin at the top
  },
  welcomeMessage: {
    fontFamily: "Montserrat",
    fontSize: 16,
    marginBottom: 6,
  },
});

const TemplateMinimal = () => {
  const context = useContext(ResumeDataContext);

  if (!context) {
    throw new Error(
      "Template Minimal must be used within a ResumeDataProvider"
    );
  }

  const { resumeData, isSubmitted } = context;

  const educationInfoValues: EducationInfoValues[] =
    resumeData?.educationInfoValues || [];
  const workInfoValues: WorkInfoValues[] = resumeData?.workInfoValues || [];

  const renderEducation = (educationInfoValues: EducationInfoValues[]) => {
    return educationInfoValues.map((edu, index: number) => (
      <View key={index} wrap={false}>
        <View style={styles.placeDuration}>
          <Text style={styles.titleHeader}>{edu.studyName.trim()}</Text>
          <Text style={styles.titleHeader}>{edu.duration.trim()}</Text>
        </View>
        <Text style={styles.italicsSubtitle}>{edu.institutionName.trim()}</Text>

        {edu.achievements.map((achievement, idx: number) => (
          <View style={styles.listItem} key={idx}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemContent}>
              {achievement.bullet?.trim()}
            </Text>
          </View>
        ))}
      </View>
    ));
  };

  // Function to render work items
  const renderWorkExperience = (workInfoValues: WorkInfoValues[]) => {
    return workInfoValues.map((work, index: number) => (
      <View key={index} wrap={false}>
        <View style={styles.placeDuration}>
          <Text style={styles.titleHeader}>{work.companyName.trim()}</Text>
          <Text style={styles.titleHeader}>{work.duration.trim()}</Text>
        </View>
        <Text style={styles.italicsSubtitle}>{work.jobRole.trim()}</Text>

        {work.achievements.map((achievement, idx: number) => (
          <View style={styles.listItem} key={idx}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listItemContent}>
              {achievement.bullet?.trim()}
            </Text>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <div className="w-full h-[100%] flex items-baseline">
      <PDFViewer
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      >
        <Document
          pageMode="fullScreen"
          title={resumeData?.personalInfoValues.firstName}
        >
          <Page size="A4" style={styles.page}>
            {!isSubmitted && (
              <View style={styles.welcomeMessageContainer}>
                <Text style={styles.welcomeMessage}>
                  Hey! Glad to have you. Simply fill in the info you'd like and
                  click submit to render the PDF.
                </Text>
                <Text style={styles.welcomeMessage}>
                  This is a heavily opinionated resume template, its goals are:
                </Text>
                <Text style={styles.welcomeMessage}>- Unique minimal look</Text>
                <Text style={styles.welcomeMessage}>
                  - Promoting consiseness to your achievements.
                </Text>
                <Text style={styles.welcomeMessage}>
                  Ideally, this will make it an easier read for hiring managers.
                </Text>
              </View>
            )}

            {isSubmitted && (
              <>
                {/* Personal Info */}
                <View>
                  <View style={styles.nameSection}>
                    <Text style={styles.upperCase}>
                      {`${resumeData?.personalInfoValues.firstName.trim()} ${resumeData?.personalInfoValues.lastName.trim()}`}
                    </Text>
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactText}>
                      {resumeData?.personalInfoValues.address.trim()}
                    </Text>
                    <View style={styles.flexRow}>
                      <Text style={styles.contactText}>
                        {resumeData?.personalInfoValues.phoneNumber.trim()}
                      </Text>
                      <Text style={styles.contactText}>
                        {resumeData?.personalInfoValues.email.trim()}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Business Experience Section */}
                <Text style={styles.sectionHeader}>Business Experience</Text>
                {renderWorkExperience(workInfoValues)}

                {/* Education Section */}
                <Text style={styles.sectionHeader}>Education</Text>
                {renderEducation(educationInfoValues)}
              </>
            )}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default TemplateMinimal;
