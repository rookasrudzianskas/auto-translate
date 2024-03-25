import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};

const TranslatePage = ({}) => {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  return (
    <div>

    </div>
  );
};

export default TranslatePage;
// by Rokas with ❤️
