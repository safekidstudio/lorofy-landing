"use client";

import NumberFlow from "@number-flow/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NumberFlowStatProps {
  /** Raw numeric value or string format like "50K+", "2M+", "4.8 ★" */
  value: number | string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  /** Trigger animation only once on scroll into view */
  once?: boolean;
  /** Duration of the smooth spin animation in milliseconds (default: 900ms) */
  duration?: number;
}

function parseStatValue(
  val: number | string,
  explicitPrefix?: string,
  explicitSuffix?: string,
  explicitDecimals?: number,
) {
  if (typeof val === "number") {
    return {
      numericValue: val,
      prefix: explicitPrefix ?? "",
      suffix: explicitSuffix ?? "",
      decimals: explicitDecimals ?? (Number.isInteger(val) ? 0 : 1),
    };
  }

  // Regex matches: optional non-digits (prefix), number with optional decimal, remainder (suffix)
  const match = val.match(/^([^\d.-]*)([\d.,]+)(.*)$/);
  if (!match) {
    return {
      numericValue: 0,
      prefix: explicitPrefix ?? "",
      suffix: explicitSuffix ?? val,
      decimals: explicitDecimals ?? 0,
    };
  }

  const [, rawPrefix, rawNum, rawSuffix] = match;
  const cleanedNum = rawNum.replace(/,/g, "");
  const numericValue = parseFloat(cleanedNum) || 0;

  const decimalMatch = cleanedNum.match(/\.(\d+)/);
  const detectedDecimals = decimalMatch ? decimalMatch[1].length : 0;

  return {
    numericValue,
    prefix: explicitPrefix ?? rawPrefix,
    suffix: explicitSuffix ?? rawSuffix,
    decimals: explicitDecimals ?? detectedDecimals,
  };
}

export function NumberFlowStat({
  value,
  prefix: propPrefix,
  suffix: propSuffix,
  decimals: propDecimals,
  className = "",
  once = true,
  duration = 1500,
}: NumberFlowStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -50px 0px" });

  const { numericValue, prefix, suffix, decimals } = parseStatValue(
    value,
    propPrefix,
    propSuffix,
    propDecimals,
  );

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setCurrentValue(numericValue);
    } else if (!once) {
      setCurrentValue(0);
    }
  }, [isInView, numericValue, once]);

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline justify-center select-none ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <NumberFlow
        value={currentValue}
        transformTiming={{
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        spinTiming={{
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        opacityTiming={{
          duration: duration * 0.5,
          easing: "ease-out",
        }}
        format={{
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        willChange
      />
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
