import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Label content. Figma node 12120:1256 renders the string "Button". */
  children: ReactNode;
}

/**
 * Button — implements Figma node 12120:1260 ("Test Button").
 *
 * The Figma component currently exposes no variant, size, or state properties,
 * so this component intentionally has no `variant`/`size` prop. Adding one here
 * would put the code ahead of the design system's own definition
 * (see docs/B-component — B2 Property·Variant 모델, B3 State 모델).
 *
 * `className` is merged rather than replaced so consumers can position the
 * button without losing its appearance.
 */
export function Button({ children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={className ? `${styles.root} ${className}` : styles.root}
      data-node-id="12120:1260"
    >
      {children}
    </button>
  );
}
