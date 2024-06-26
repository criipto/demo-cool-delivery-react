import { ReactElement } from 'react';
import { BoxOpenFullIcon } from './Icon';

export function Logo(): ReactElement {
  return (
    <div className="flex items-center gap-2.5 text-primary-600">
      <BoxOpenFullIcon className="h-7 w-7" />
      <Heading className="mt-1 h-3.5" />
    </div>
  );
}

type HeadingProps = {
  className?: string;
};

export function Heading({ className }: HeadingProps): ReactElement {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 134 14"
      className={className}
    >
      <path
        d="M6.462 13.216c-.852 0-1.62-.132-2.304-.396a4.703 4.703 0 0 1-1.746-1.206c-.48-.54-.852-1.206-1.116-1.998C1.032 8.812.9 7.876.9 6.808c0-1.056.132-1.992.396-2.808.264-.828.636-1.518 1.116-2.07A4.611 4.611 0 0 1 4.158.652C4.842.364 5.61.22 6.462.22c1.164 0 2.124.24 2.88.72.756.468 1.362 1.212 1.818 2.232L8.802 4.396c-.168-.528-.432-.948-.792-1.26-.348-.324-.864-.486-1.548-.486-.804 0-1.452.264-1.944.792-.48.516-.72 1.272-.72 2.268v2.016c0 .996.24 1.758.72 2.286.492.516 1.14.774 1.944.774.672 0 1.206-.18 1.602-.54.408-.372.708-.816.9-1.332l2.232 1.296c-.468.96-1.086 1.704-1.854 2.232-.756.516-1.716.774-2.88.774Zm11.1 0c-.828 0-1.584-.138-2.268-.414a4.61 4.61 0 0 1-1.746-1.224c-.48-.552-.852-1.23-1.116-2.034-.264-.816-.396-1.758-.396-2.826s.132-2.004.396-2.808c.264-.816.636-1.494 1.116-2.034A4.524 4.524 0 0 1 15.294.634c.684-.276 1.44-.414 2.268-.414.828 0 1.584.138 2.268.414.684.276 1.266.69 1.746 1.242.48.54.852 1.218 1.116 2.034.264.804.396 1.74.396 2.808 0 1.068-.132 2.01-.396 2.826-.264.804-.636 1.482-1.116 2.034a4.61 4.61 0 0 1-1.746 1.224c-.684.276-1.44.414-2.268.414Zm0-2.43c.828 0 1.47-.27 1.926-.81.468-.54.702-1.314.702-2.322V5.782c0-1.008-.234-1.782-.702-2.322-.456-.54-1.098-.81-1.926-.81-.828 0-1.476.27-1.944.81-.456.54-.684 1.314-.684 2.322v1.872c0 1.008.228 1.782.684 2.322.468.54 1.116.81 1.944.81Zm12.49 2.43c-.828 0-1.584-.138-2.268-.414a4.61 4.61 0 0 1-1.746-1.224c-.48-.552-.852-1.23-1.116-2.034-.264-.816-.396-1.758-.396-2.826s.132-2.004.396-2.808c.264-.816.636-1.494 1.116-2.034A4.524 4.524 0 0 1 27.784.634c.684-.276 1.44-.414 2.268-.414.828 0 1.584.138 2.268.414.684.276 1.266.69 1.746 1.242.48.54.852 1.218 1.116 2.034.264.804.396 1.74.396 2.808 0 1.068-.132 2.01-.396 2.826-.264.804-.636 1.482-1.116 2.034a4.61 4.61 0 0 1-1.746 1.224c-.684.276-1.44.414-2.268.414Zm0-2.43c.828 0 1.47-.27 1.926-.81.468-.54.702-1.314.702-2.322V5.782c0-1.008-.234-1.782-.702-2.322-.456-.54-1.098-.81-1.926-.81-.828 0-1.476.27-1.944.81-.456.54-.684 1.314-.684 2.322v1.872c0 1.008.228 1.782.684 2.322.468.54 1.116.81 1.944.81ZM37.502 13V.436h2.735V10.57h4.788V13h-7.524ZM50.58.436h4.734c.828 0 1.584.132 2.268.396.684.264 1.266.66 1.746 1.188.48.516.852 1.17 1.116 1.962.264.78.396 1.692.396 2.736 0 1.044-.132 1.962-.396 2.754-.264.78-.636 1.434-1.116 1.962a4.62 4.62 0 0 1-1.746 1.17c-.684.264-1.44.396-2.268.396H50.58V.436Zm4.734 10.134c.816 0 1.458-.228 1.926-.684.468-.456.702-1.188.702-2.196V5.746c0-1.008-.234-1.74-.702-2.196-.468-.456-1.11-.684-1.926-.684h-1.998v7.704h1.998ZM62.771 13V.436h8.55v2.43h-5.814V5.44h4.986v2.412h-4.986v2.718h5.814V13h-8.55Zm10.573 0V.436h2.737V10.57h4.787V13h-7.523Zm8.7 0v-2.178h1.62V2.614h-1.62V.436h5.975v2.178H86.4v8.208h1.62V13h-5.976Zm10.811 0L88.805.436h2.772l1.872 6.03.99 3.942h.054l.954-3.942 1.872-6.03h2.682L95.915 13h-3.06Zm8.431 0V.436h8.55v2.43h-5.814V5.44h4.986v2.412h-4.986v2.718h5.814V13h-8.55Zm13.31 0h-2.736V.436h5.958a4.09 4.09 0 0 1 1.566.288c.468.192.864.468 1.188.828.336.348.594.768.774 1.26.18.492.27 1.038.27 1.638 0 .852-.192 1.596-.576 2.232-.372.636-.942 1.098-1.71 1.386L121.796 13h-3.042l-2.196-4.608h-1.962V13Zm2.88-6.912c.408 0 .726-.102.954-.306.24-.216.36-.528.36-.936v-.792c0-.408-.12-.714-.36-.918-.228-.216-.546-.324-.954-.324h-2.88v3.276h2.88Zm8.51 6.912V8.086l-4.302-7.65h3.06l2.7 5.004h.036l2.592-5.004h2.97l-4.302 7.632V13h-2.754Z"
        fill="currentColor"
      />
    </svg>
  );
}
