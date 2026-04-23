"use client";

import React from "react";
import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";
import { Textarea } from "../../atoms/textarea";
import { Label } from "../label";
import { Typography } from "../../atoms/typography";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ControllerTextareaProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  icon?: LucideIcon;
  className?: string;
  rows?: number;
  required?: boolean;
}

export function ControllerTextarea<T extends FieldValues>({
  name,
  label,
  placeholder,
  icon: Icon,
  className,
  rows = 4,
  required,
}: ControllerTextareaProps<T>) {
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

      <div className="relative group/textarea">
        {Icon && (
          <Icon className="absolute left-4 top-4 size-5 text-muted-foreground group-focus-within/textarea:text-primary transition-colors z-10 pointer-events-none" />
        )}

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              rows={rows}
              className={cn(
                Icon && "pl-12",
                error && "ring-2 ring-destructive/20 bg-destructive/5"
              )}
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
