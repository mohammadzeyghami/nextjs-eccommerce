"use client";

import React from "react";
import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../atoms/button";
import { Calendar } from "../../atoms/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../atoms/popover";
import { Label } from "../label";
import { Typography } from "../../atoms/typography";

interface ControllerDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export function ControllerDatePicker<T extends FieldValues>({
  name,
  label,
  placeholder = "Pick a date",
  className,
  required,
}: ControllerDatePickerProps<T>) {
  const { control, formState: { errors } } = useFormContext<T>();
  const error = errors[name]?.message as string | undefined;

  return (
    <div className={cn("space-y-2.5 w-full", className)}>
      {label && (
        <Label
          htmlFor={name}
          className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-start font-normal rounded-xl px-4 py-3 text-body-md bg-muted/20 border border-primary/20 hover:bg-muted/10 transition-all duration-300 gap-3",
                  !field.value && "text-muted-foreground",
                  error && "ring-2 ring-destructive/20 bg-destructive/5"
                )}
              >
                <CalendarIcon className="h-4 w-4 text-primary" />
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>{placeholder}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-3xl" align="start" sideOffset={8}>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />

      {error && (
        <Typography
          variant="small"
          weight="bold"
          className="text-destructive mt-1 px-1 lowercase first-letter:uppercase"
        >
          {error}
        </Typography>
      )}
    </div>
  );
}
