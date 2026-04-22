"use client";

import * as React from "react";
import { X } from "lucide-react";
import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";
import { Badge } from "../../atoms/badge";
import { Command, CommandGroup, CommandItem, CommandList } from "../../atoms/command";
import { Command as CommandPrimitive } from "cmdk";
import { Label } from "../label";
import { Typography } from "../../atoms/typography";
import { cn } from "@/lib/utils";

interface ControllerMultiSelectProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
  required?: boolean;
}

export function ControllerMultiSelect<T extends FieldValues>({
  name,
  label,
  placeholder = "Select items...",
  options,
  className,
  required,
}: ControllerMultiSelectProps<T>) {
  const { control, formState: { errors } } = useFormContext<T>();
  const error = errors[name]?.message as string | undefined;
  
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={cn("space-y-2.5 w-full", className)}>
      {label && (
        <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selected = (field.value as string[]) || [];
          
          const handleUnselect = (itemValue: string) => {
            field.onChange(selected.filter((i) => i !== itemValue));
          };

          const handleSelect = (itemValue: string) => {
            setInputValue("");
            if (selected.includes(itemValue)) {
              field.onChange(selected.filter((i) => i !== itemValue));
            } else {
              field.onChange([...selected, itemValue]);
            }
          };

          return (
            <Command
              onKeyDown={(e) => {
                const input = inputRef.current;
                if (input) {
                  if (e.key === "Delete" || e.key === "Backspace") {
                    if (input.value === "") {
                      const newSelected = [...selected];
                      newSelected.pop();
                      field.onChange(newSelected);
                    }
                  }
                  if (e.key === "Escape") {
                    input.blur();
                  }
                }
              }}
              className="overflow-visible bg-transparent"
            >
              <div className="group rounded-2xl bg-muted/20 px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-background transition-all duration-300">
                <div className="flex flex-wrap gap-1">
                  {selected.map((itemValue) => {
                    const option = options.find((o) => o.value === itemValue);
                    return (
                      <Badge
                        key={itemValue}
                        variant="secondary"
                        className="rounded-xl px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1"
                      >
                        {option?.label || itemValue}
                        <button
                          className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleUnselect(itemValue);
                            }
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={() => handleUnselect(itemValue)}
                        >
                          <X className="h-3 w-3 text-muted-foreground hover:text-foreground transition-colors" />
                        </button>
                      </Badge>
                    );
                  })}
                  <CommandPrimitive.Input
                    ref={inputRef}
                    value={inputValue}
                    onValueChange={setInputValue}
                    onBlur={() => setOpen(false)}
                    onFocus={() => setOpen(true)}
                    placeholder={selected.length > 0 ? "" : placeholder}
                    className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground min-w-[120px] h-9 font-bold"
                  />
                </div>
              </div>
              <div className="relative mt-2">
                {open && options.length > 0 && (
                  <div className="absolute top-0 z-50 w-full rounded-2xl border bg-popover text-popover-foreground shadow-2xl outline-none animate-in fade-in-0 zoom-in-95 backdrop-blur-xl">
                    <CommandList>
                       <CommandGroup className="h-full overflow-auto p-2">
                        {options.map((option) => {
                          const isSelected = selected.includes(option.value);
                          return (
                            <CommandItem
                              key={option.value}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onSelect={() => handleSelect(option.value)}
                              className={cn(
                                "rounded-xl px-4 py-2.5 my-1 cursor-pointer transition-all",
                                isSelected ? "bg-primary/10 text-primary" : "hover:bg-muted"
                              )}
                            >
                              <span className="font-medium">{option.label}</span>
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </CommandList>
                  </div>
                )}
              </div>
            </Command>
          );
        }}
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
