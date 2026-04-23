"use client";

import React from 'react';
import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";
import { Input } from "./input";
import { Label } from "../label";
import { Typography } from "../../atoms/typography";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ControllerInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  icon?: LucideIcon;
  className?: string;
  inputClassName?: string;
  required?: boolean;
}

export function ControllerInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  className,
  inputClassName,
  required,
}: ControllerInputProps<T>) {
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

      <div className="relative group/input">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
        )}

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              className={cn(
                "w-full bg-muted/20 border border-primary/20 rounded-xl px-4 py-3 text-body-md text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-background transition-all duration-300",
                Icon ? "pl-12" : "px-4",
                error && "border-destructive focus-visible:ring-destructive/20 bg-destructive/5",
                inputClassName
              )}
              aria-invalid={!!error}
            />
          )}
        />
      </div>

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

