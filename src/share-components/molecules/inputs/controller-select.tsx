"use client";

import React from 'react';
import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../../atoms/select";
import { Label } from "../label";
import { Typography } from "../../atoms/typography";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ControllerSelectProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  icon?: LucideIcon;
  className?: string;
  required?: boolean;
}

export function ControllerSelect<T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  icon: Icon,
  className,
  required,
}: ControllerSelectProps<T>) {
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
      
      <div className="relative group/select">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/select:text-primary transition-colors z-10 pointer-events-none" />
        )}
        
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
              <SelectTrigger 
                className={cn(
                  Icon ? "pl-12" : "px-6",
                  error && "ring-2 ring-destructive/20 bg-destructive/5"
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
