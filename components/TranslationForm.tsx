"use client";

import translate from "@/actions/translate";
import { TranslationLanguages } from "@/app/translate/page";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { MicIcon, SpeakerIcon, Volume2Icon } from "lucide-react";
import { Button } from "./ui/button";

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
    <>
      <div className="flex space-x-2">
        <div className="flex items-center group cursor-pointer border rounded-md w-fit px-3 py-2 bg-[#E7F0FE] mb-5">
          <Image
            src="https://links.papareact.com/r9c"
            alt="logo"
            width={30}
            height={30}
          />

          {/* style like a blue google button */}
          <p className="text-sm font-medium text-blue-500 group-hover:underline ml-2 mt-1">
            Text
          </p>
        </div>

        {/*<Recorder uploadAudio={uploadAudio} />*/}
      </div>

      <form action={formAction}>
        <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div className="flex-1 space-y-2">
            <Select name="inputLanguage" defaultValue="auto">
              <SelectTrigger className="w-[280px] border-none text-blue-500 font-bold">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Want us to figure it out?</SelectLabel>

                  <SelectItem key="auto" value="auto">
                    Auto-Detection
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Language</SelectLabel>
                  {Object.entries(languages.translation).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Type your message here."
              className="min-h-32 text-xl"
              name="input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <Select name="outputLanguage" defaultValue="es">
                <SelectTrigger className="w-[280px] border-none text-blue-500 font-bold">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {Object.entries(languages.translation).map(
                      ([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                type="button"
                // onClick={playAudio}
                disabled={!output}
              >
                <Volume2Icon
                  size={24}
                  className="text-blue-500 cursor-pointer disabled:cursor-not-allowed"
                />
              </Button>
            </div>

            <Textarea
              className="min-h-32 text-xl bg-gray-50 border-none"
              placeholder="Translation will appear here..."
              name="output"
              value={output}
              onChange={(e) => {
                setOutput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          {/*<SubmitButton disabled={!input} />*/}
          <button type="submit" hidden ref={submitBtnRef} />
        </div>
      </form>
    </>
  );
};

export default TranslationForm;
// by Rokas with ❤️