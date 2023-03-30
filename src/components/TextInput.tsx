import React from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";

import Image from "next/image";

export const TextField = ({
  type,
  name,
  htmlFor,
  label,
  value,
  error,
  focus,
  disabled,
  divClass,
  inputClass,
  inputWrapperClass,
  labelClass,
  context,
  ...rest
}: {
  type: string;
  name: string;
  htmlFor: string;
  label?: string;
  value: any;
  error: any;
  focus?: string;
  disabled?: boolean;
  divClass?: string;
  inputClass?: string;
  inputWrapperClass?: string;
  labelClass?: string;
  context?: any;
  [x: string]: any;
}) => (
  <div className={`w-full ${divClass}`}>
    {!!label && (
      <label
        htmlFor={htmlFor}
        className={`text-[0.95rem] text-text-black inline-block mb-1 ${labelClass}`}
      >
        {label}
      </label>
    )}
    <div
      className={`w-full h-12 flex items-center gap-3 ${
        context ? "pr-3" : "pr-0"
      } rounded-[5px] overflow-hidden ${
        focus === name
          ? "border-primary-yellow bg-white"
          : disabled
          ? "border-input-border-gray bg-white"
          : error
          ? "border-red-500 bg-primary-white"
          : "border-input-border-gray bg-white"
      } border-[1px] ${inputWrapperClass}`}
    >
      <Field
        type={type}
        name={name}
        id={htmlFor}
        value={value}
        disabled={disabled ? true : false}
        className={`flex-1 h-full bg-transparent outline-none text-[1rem] text-text-black ${
          context ? "pl-3 pr-1" : "px-3"
        } py-1 ${inputClass}`}
        autoComplete="off"
        {...rest}
      />
      {!!context && context}
    </div>
    <ErrorMessage name={name} className="error" component="p" />
  </div>
);

export const DateField = ({
  name,
  htmlFor,
  label,
  value,
  error,
  focus,
  disabled,
  divClass,
  inputClass,
  labelClass,
  dateFormat,
  placeholder,
  startDate,
  onChange,
  onClick,
  context,
  ...rest
}: {
  name: string;
  htmlFor: string;
  label: string;
  value: any;
  error: any;
  onChange: (date: any) => void;
  onClick: () => void;
  focus?: string;
  disabled?: boolean;
  divClass?: string;
  inputClass?: string;
  labelClass?: string;
  dateFormat?: string;
  placeholder?: string;
  startDate?: any;
  context?: any;
  [x: string]: any;
}) => (
  <div className={`w-full ${divClass}`}>
    <label
      className={`text-[0.95rem] text-text-black inline-block mb-1 ${labelClass}`}
    >
      {label}
    </label>
    <div
      className={`w-full h-12 flex items-center gap-3 pr-3 rounded-[5px] ${
        focus === name
          ? "border-primary-yellow bg-primary-white"
          : disabled
          ? "border-input-border-gray bg-gray-100"
          : error
          ? "border-red-500 bg-primary-white"
          : "border-input-border-gray bg-primary-white"
      } border-[1px]`}
    >
      {
        <div className="flex-1 h-full relative">
          <DatePicker
            name={name}
            dateFormat={dateFormat || "dd MMM, yyyy"}
            selected={value}
            id={htmlFor}
            startDate={startDate || null}
            placeholderText={placeholder}
            wrapperClassName="calendar__wrapper"
            popperClassName="calendar__popper"
            className={`w-full h-full bg-transparent text-black/80 font-[400] px-3 py-1 outline-none ${inputClass}`}
            onChange={onChange}
            disabled={disabled ? true : false}
            autoComplete="off"
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={80}
            scrollableYearDropdown
            {...rest}
          />
        </div>
      }
      <label
        htmlFor={htmlFor}
        className="m-0 p-0 inline-block relative w-[25px] h-[25px] cursor-pointer"
      >
        <Image src="/icons/calendar-icon.svg" alt="" fill onClick={onClick} />
      </label>
    </div>
    <ErrorMessage name={name} component="p" className="error" />
  </div>
);

export const RadioButton = ({
  name,
  htmlFor,
  value,
  disabled,
  divClass,
  labelClass,
  checked,
  context,
  gray,
  ...rest
}: {
  name: string;
  htmlFor: string;
  value: any;
  focus?: string;
  disabled?: boolean;
  divClass?: string;
  labelClass?: string;
  checked?: boolean;
  context?: any;
  gray?: boolean;
  [x: string]: any;
}) => (
  <div className={`w-full ${divClass}`}>
    <div className={`w-full flex items-center gap-x-3 ${labelClass}`}>
      <label
        htmlFor={htmlFor}
        className={`w-6 h-6 flex items-center cursor-pointer justify-center gap-3 ${
          checked
            ? "border-primary-yellow"
            : gray
            ? "border-gray-300"
            : "border-primary-yellow"
        } rounded-full border-[1px]`}
      >
        {!!checked && (
          <div className="w-[14px] h-[14px] rounded-full bg-primary-yellow" />
        )}
        <Field
          type="radio"
          name={name}
          id={htmlFor}
          value={value}
          disabled={disabled ? true : false}
          className={`hidden`}
          autoComplete="off"
          {...rest}
        />
      </label>
      {!!context && context}
    </div>
    <ErrorMessage name={name} className="error" component="p" />
  </div>
);
export const SelectField = ({
  type = "text",
  name,
  htmlFor,
  value,
  placeholder,
  handleBlur,
  onChange,
  divClass,
  textClass,
  labelClass,
  inputClass,
  outerDivClass,
  label,
  error,
  ...rest
}: {
  type?: string;
  name: string;
  htmlFor: string;
  handleBlur: any;
  textClass?: string;
  error?: string;
  value: any;
  placeholder: string;
  focus?: string;
  onChange?: string;
  disabled?: boolean;
  inputClass?: string;
  divClass?: string;
  outerDivClass?: string;
  labelClass?: string;
  checked?: boolean;
  label?: any;
  context?: any;
  gray?: boolean;
}) => {
  return (
    <div className={`w-full ${divClass}`}>
      <label htmlFor={htmlFor} className={`text-sm font-extra ${labelClass}`}>
        {label}
      </label>
      <div
        className={`rounded-[7px] ${
          error ? "border-input-red-bg" : "border-transparent"
        } ${outerDivClass} `}
      >
        <div
          className={`w-full h-11 border-[1px] rounded-[5px] mt-[0.4rem] flex items-center gap-2 px-3 ${
            error
              ? "border-primary-red bg-input-red-bg"
              : value
              ? "bg-white border-black/25"
              : "bg-input-gray border-0"
          } ${inputClass}`}
        >
          {onChange ? (
            <Field
              onBlur={() => handleBlur()}
              as="select"
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              className={`flex-1 h-full bg-transparent font-[400] text-sm px-1 py-1 text-black outline-none placeholder:text-[14px] placeholder:text-black placeholder:opacity-10 ${textClass}`}
              {...rest}
            />
          ) : (
            <Field
              onBlur={() => handleBlur()}
              as="select"
              type={type}
              name={name}
              placeholder={placeholder}
              className={`flex-1 h-full bg-transparent font-[400] text-sm px-1 py-1 text-black outline-none placeholder:text-[14px] placeholder:text-black placeholder:opacity-10 ${textClass}`}
              {...rest}
            />
          )}
        </div>
      </div>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};
