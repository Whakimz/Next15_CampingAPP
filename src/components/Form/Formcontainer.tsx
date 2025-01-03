"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunction } from "../../../utils/types";

const initialState = {
  message: "",
};

type FormcontainerProps = {
  children: React.ReactNode;
  action: actionFunction;
};

const Formcontainer = ({ action, children }: FormcontainerProps) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);
  return <form action={formAction}>{children}</form>;
};
export default Formcontainer;
