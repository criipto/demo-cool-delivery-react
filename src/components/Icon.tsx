import { ReactElement } from "react";

export type IconProps = {
  className?: string;
}

export function ArrowRightIcon({className}: IconProps): ReactElement {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17"><path d="m10.022 14.012-.719-.718 4.26-4.26H.53v-1h13.031L9.297 3.768l.718-.687 5.454 5.453-5.447 5.478Z" fill="currentColor" /></svg>
  );
}

export function BoxOpenFullIcon({className}: IconProps): ReactElement {
  return <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 28">
    <path d="m2.5 12.4 10 .25 10-.25 2.5 5-8.75.62-3.75-5.37-3.75 5.37L0 17.4l2.5-5Zm0 13.62-.092-6.908 6.889.392 3.125-4.355 3.242 4.354 6.744-.391.092 6.908-10.247 1.63L2.5 26.02Z" fill="currentColor" />
    <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-5" y="-10" width="34" height="22">
      <path d="m28 11.242-15.455.438-17.369-.477V-9.015H27.92L28 11.242Z" fill="#fff" />
    </mask>
    <g mask="url(#a)" fill="currentColor">
      <path d="m24.223 1.922-.33.826-.272-.102-2.416 6.03a3.738 3.738 0 0 1 1.06 4.31l-2.853 7.138-7.06-2.82 2.853-7.14a3.739 3.739 0 0 1 3.74-2.392L21.4 1.758l-.276-.104.33-.826 2.769 1.094ZM15.199 15.36l3.49 1.395 1.902-4.76-3.49-1.394-1.902 4.76ZM1.904 4.353l.236.591.195-.072.73 1.777s.074.162.476 1.133c.403.971-.298 2.998.164 4.115l1.791 4.485 4.286-1.632-1.79-4.485c-.435-1.128-2.441-2.198-2.83-3.13-.39-.933-.49-1.128-.49-1.128l-.745-1.771.198-.076-.236-.591-1.985.784ZM8.1 13.217l-2.501 1-1.363-3.412 2.501-1L8.1 13.218Z" /><path d="m9.416 1.617.08.727.237-.02.26 2.19s.032.2.177 1.399c.146 1.197-1.254 3.222-1.086 4.6l.598 5.51 5.241-.484-.598-5.51c-.133-1.381-2.02-3.182-2.164-4.333-.143-1.151-.195-1.397-.195-1.397l-.277-2.189.242-.021-.079-.727-2.436.255Zm4.12 11.708-3.074.335-.456-4.191 3.073-.335.456 4.191Z" />
    </g>
  </svg>;
}

export function CheckIcon({className}: IconProps): ReactElement {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 25"><path fillRule="evenodd" clipRule="evenodd" d="M34.95 4.401 15.147 24.203.81 9.865 4.346 6.33l10.802 10.802L31.413.866 34.949 4.4Z" fill="currentColor" /></svg>
  );
}

export function ChildrenIcon({className}: IconProps): ReactElement {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M5.953 7c0-1.031.563-2.016 1.5-2.578a3.102 3.102 0 0 1 3 0c.938.562 1.5 1.547 1.5 2.578a3.049 3.049 0 0 1-1.5 2.625 3.103 3.103 0 0 1-3 0A3.049 3.049 0 0 1 5.953 7Zm-2.11 17.75 2.204-10.156-3.234 4.125-1.172-.89L6.562 11.5h4.782l4.969 6.328-1.172.89-3.282-4.124 2.204 10.156h-2.11V28h-1.5v-3.25h-3V28h-1.5v-3.25h-2.11ZM23.954 4c1.078 0 2.063.61 2.625 1.5.516.938.516 2.11 0 3a3.049 3.049 0 0 1-2.625 1.5c-1.078 0-2.062-.563-2.578-1.5-.563-.89-.563-2.063 0-3 .516-.89 1.5-1.5 2.578-1.5Zm-2.469 7.5h4.985l3.89 6.375-1.265.797-2.39-3.844 1 13.172h-1.5l-.453-5h-3.613l-.435 5h-1.5l1-13.172-2.344 3.844-1.312-.797 3.937-6.375Z" fill="currentColor"/>
    </svg>
  );
}

export function GearIcon({className}: IconProps): ReactElement {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M6.24 9.631c.197-.519.468-.989.826-1.464l.392-.495-.175-.62-.675-2.044 2.067-1.184 1.422 1.617.446.465.678-.074a5.1 5.1 0 0 1 1.628.013l.669.067.445-.48 1.433-1.586 2.045 1.215-.69 2.016-.174.64.378.503c.17.218.34.436.495.707.136.237.238.494.34.75l.243.582.64.174 2.088.424.012 2.379-2.092.433-.64.141-.28.611a5.098 5.098 0 0 1-.813 1.41l-.406.549.209.6.622 2.03-2.068 1.184-1.402-1.583-.446-.465-.644.054a4.789 4.789 0 0 1-1.662.007l-.635-.087-.445.48-1.433 1.586-2.08-1.195.691-2.016.174-.64-.378-.503a6.048 6.048 0 0 1-.461-.726c-.136-.238-.272-.475-.374-.732l-.243-.58-.64-.175-2.088-.424.022-2.398 2.092-.434.64-.14.246-.592Zm2.695-7.396L5.14 4.409l.924 3.027c-.392.495-.726 1.091-1.006 1.702L2.014 9.8 2 14.175l3.049.685c.121.29.296.596.451.867.175.305.35.61.539.862l-.952 2.976 3.782 2.2 2.11-2.289c.668.068 1.352.081 1.977-.006l2.124 2.294 3.796-2.174-.938-2.974c.407-.548.726-1.091.987-1.736l3.062-.628L22 9.877l-3.049-.685-.038-.088a7.981 7.981 0 0 0-.399-.832 8.223 8.223 0 0 0-.553-.809l.952-2.976-3.782-2.2-2.11 2.289c-.668-.068-1.318-.1-1.977.006l-2.11-2.347Zm5.855 9.774a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0Zm1.2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="currentColor"/></svg>
  );
}

export function MinusIcon({className}: IconProps): ReactElement {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.5 7.5v1H.5v-1h15Z" fill="currentColor"/></svg>
  );
}

export function PlusIcon({className}: IconProps): ReactElement {
  return <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.5 7.5h7v1h-7v7h-1v-7h-7v-1h7v-7h1v7Z" fill="currentColor"/></svg>;
}

export function SearchIcon({className}: IconProps): ReactElement {
  return <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M15.726 9.291a6.3 6.3 0 1 1-12.6 0 6.3 6.3 0 0 1 12.6 0Zm-2.328 6.363a7.5 7.5 0 1 1 2.176-2.066l6.5 6.5-2.121 2.121-6.555-6.555Zm1.033-.664.424-.424 5.522 5.522-.424.424-5.522-5.522Z" fill="currentColor"/></svg>;
}

export function TrashIcon({className}: IconProps): ReactElement {
  return <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M4.958 0h5.87l.672 2H15v1h-1.094L14 16H2l.063-13H1V2h3.469l.49-2Zm.667 2h4.719l-.337-1H5.902l-.277 1ZM3.062 3l-.156 12h10.156l-.156-12H3.062ZM6 13V5h1v8H6Zm3-8v8h1V5H9Z" fill="currentColor"/></svg>;
}

export function UserIcon({className}: IconProps): ReactElement {
  return <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path fillRule="evenodd" clipRule="evenodd" d="M6.082 14.712 5.33 21.95h13.338l-.75-7.238H6.081ZM19 13.512l1 9.638H4l1-9.638h14Zm-7-2.558a3.8 3.8 0 0 0 3.8-3.802 3.8 3.8 0 1 0-3.8 3.802Zm0 1.2a5 5 0 0 0 5-5.002 5 5 0 1 0-5 5.002Z" fill="currentColor"/></svg>;
}
