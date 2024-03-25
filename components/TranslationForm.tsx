"use client";

import React, {useRef, useState} from 'react';
import {TranslationLanguages} from "@/app/translate/page";
import translate from "@/actions/translate";
import { useFormState } from "react-dom";

const initialState = {
  inputLanguage: "auto",
  input: "",
  outputLanguage: "es",
  output: "",
};

export type State = typeof initialState;

const TranslationForm = ({ languages }: { languages: TranslationLanguages }) => {
  const [state, formAction] = useFormState(translate, initialState);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div>

    </div>
  );
};

export default TranslationForm;
// by Rokas with ❤️
