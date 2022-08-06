import React, { useState } from "react";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";

// components
import Button from "../components/Button";
import Alert from "../components/Alert";

// utils
import { isValidEmail } from "../utils/Formatter";

// email js
import { send } from "emailjs-com";

export default function ContactPage() {
  const defaultInputs = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [inputs, setInputs] = useState(defaultInputs);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState([]);

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let tempErrors = [];

    if (!inputs.firstName) {
      tempErrors["firstName"] = "Veuillez remplir le champ prénom.";
    }
    if (!inputs.lastName) {
      tempErrors["lastName"] = "Veuillez remplir le champ nom.";
    }
    if (!inputs.email) {
      tempErrors["email"] = "Veuillez remplir le champ e-mail.";
    } else if (!isValidEmail(inputs.email)) {
      tempErrors["email"] = "L'e-mail n'est pas au bon format.";
    }
    if (!inputs.phone) {
      tempErrors["phone"] = "Veuillez remplir le champ téléphone.";
    } else if (inputs.phone.length > 10) {
      tempErrors["phone"] = "Le numéro de téléphone doit contenir 10 chiffres.";
    }
    if (!inputs.subject) {
      tempErrors["subject"] = "Veuillez remplir le champ sujet.";
    }
    if (!inputs.message) {
      tempErrors["message"] = "Veuillez remplir le champ message.";
    }

    if (tempErrors) {
      setErrors(tempErrors);
    } else {
      const toSend = {
        from_name: `${inputs.lastName} ${inputs.firstName}`,
        email: inputs.email,
        subject: inputs.subject,
        message: inputs.message,
      };
      send(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_MAIL_USER_ID
      )
        .then((response) => {
          setSuccess(
            "Votre message a bien été envoyé, une réponse vous sera envoyée dans les plus brefs délais."
          );
          setInputs(defaultInputs);
        })
        .catch((error) => {
          tempErrors["firstName"] =
            "Le formulaire de contact est temporairement en maintenance.";
          setErrors(tempErrors);
        });
    }
  };

  return (
    <StyledContactPage>
        <Helmet>
            <title>Fred Batiment - Contact</title>
        </Helmet>
      <Main>
        <Form onSubmit={(event) => onSubmit(event)}>
          <FormTitle>Contact</FormTitle>
          {success ? <Alert type="success" message={success} /> : null}
          <FormGroups>
            <FormGroup>
              <FormLabel>Prénom</FormLabel>
              <FormInput
                id="firstName"
                onChange={(event) => onChange(event)}
                value={inputs.firstName}
                type="text"
                placeholder="Votre prénom"
              />
              {errors["firstName"] ? (
                <Alert type="error" message={errors["firstName"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormLabel>Nom</FormLabel>
              <FormInput
                id="lastName"
                onChange={(event) => onChange(event)}
                value={inputs.lastName}
                type="text"
                placeholder="Votre nom"
              />
              {errors["lastName"] ? (
                <Alert type="error" message={errors["lastName"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormLabel>E-mail</FormLabel>
              <FormInput
                id="email"
                onChange={(event) => onChange(event)}
                value={inputs.email}
                type="email"
              />
              {errors["email"] ? (
                <Alert type="error" message={errors["email"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormLabel>Téléphone</FormLabel>
              <FormInput
                id="phone"
                onChange={(event) => onChange(event)}
                value={inputs.phone}
                type="number"
                placeholder="Votre téléphone"
              />
              {errors["phone"] ? (
                <Alert type="error" message={errors["phone"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormLabel>Sujet</FormLabel>
              <FormInput
                id="subject"
                onChange={(event) => onChange(event)}
                value={inputs.subject}
                type="text"
                placeholder="Votre sujet"
              />
              {errors["subject"] ? (
                <Alert type="error" message={errors["subject"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea
                id="message"
                onChange={(event) => onChange(event)}
                value={inputs.message}
                rows={3}
                placeholder="Votre message"
              />
              {errors["message"] ? (
                <Alert type="error" message={errors["message"]} />
              ) : null}
            </FormGroup>
            <FormGroup>
              <Button title="Envoyer" />
            </FormGroup>
          </FormGroups>
        </Form>
      </Main>
    </StyledContactPage>
  );
}

const StyledContactPage = styled.div``;
const Main = styled.main``;
const Form = styled.form`
  padding: 20px;
  max-width: 425px;
  margin: 0 auto;
`;
const FormTitle = styled.h2`
  text-align: center;
`;
const FormGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.label`
  margin: 0 0 5px 0;
`;
const FormInput = styled.input`
  padding: 5px;
  font-family: inherit;
  outline: none;
`;
const FormTextarea = styled.textarea`
  resize: vertical;
  font-family: inherit;
  min-height: 100px;
  padding: 5px;
  outline: none;
`;
