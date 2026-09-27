"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, checked, onCheckedChange, onChange, ...props }, ref) => {
        return (
            <label className={cn("inline-flex items-center cursor-pointer", className)}>
                <input
                    type="checkbox"
                    className="peer sr-only"
                    ref={ref}
                    checked={checked}
                    onChange={(e) => {
                        onChange?.(e)
                        onCheckedChange?.(e.target.checked)
                    }}
                    {...props}
                />
                <div className="relative w-11 h-6 bg-input rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-background after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
            </label>
        )
    }
)
Switch.displayName = "Switch"

export { Switch }
