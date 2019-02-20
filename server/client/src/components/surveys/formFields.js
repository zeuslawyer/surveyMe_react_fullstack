import SurveyInput from "./SurveyInput";

export const FIELD_OBJECTS = [
    {
      label: "Survey Title",
      name: "title",
      type: "text",
      component: SurveyInput,
      emptyFieldError: "Please provide a Survey Title"
    },
    {
      label: "Subject Line",
      name: "subject",
      type: "text",
      component: SurveyInput,
      emptyFieldError: "Please provide a Subject Line"
    },
    {
      label: "Email Body",
      name: "body",
      type: "text",
      component: SurveyInput,
      emptyFieldError: "Please provide the body of the covering email"
    },
    {
      label: "Recipient List",
      name: "recipients",
      type: "text",
      component: SurveyInput,
      placeholder: "Separate emails with commas",
      emptyFieldError: "Please provide recipient email IDs, separated by commas"
    }
  ];