import React, { useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

/** Single-select plan list as a native-feeling bottom sheet. */
export default function PlanPicker({ options, value, onValueChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const selected = options.find((option) => option.value === value);

  const handleOpenChange = (next) => {
    setOpen(next);
    if (!next) trigger.current?.focus();
  };

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => handleOpenChange(true)}
        className="w-full inline-flex items-center justify-between rounded-md border border-input bg-background px-4 py-2.5 font-body text-sm text-left focus:outline-none focus:ring-2 focus:ring-ring">
        
        <span className={selected ? "" : "text-muted-foreground"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      </button>

      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerContent className="pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
          <div className="px-4 pt-2">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
              Membership type
            </p>
            <div
              role="listbox"
              aria-label="Membership type"
              className="max-h-[50vh] overflow-y-auto overscroll-contain">
              
              {options.map((option) =>
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={option.value === value}
                onClick={() => {
                  onValueChange(option.value);
                  handleOpenChange(false);
                }}
                className="flex w-full min-h-[44px] items-center justify-between gap-3 px-1 py-3 text-left font-body text-sm text-foreground border-b border-border last:border-0">
                
                  <span>{option.label}</span>
                  <Check
                  className={cn(
                    "h-4 w-4 shrink-0 text-primary",
                    option.value === value ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden="true" />
                
                </button>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>);

}