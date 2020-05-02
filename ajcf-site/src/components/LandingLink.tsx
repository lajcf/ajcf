import React, { HTMLProps } from "react";

const LandingLink = ({ ...props }: HTMLProps<HTMLAnchorElement>) => {
  // const localizedHref = useLocalizedHref(cleanProps.href);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!props.href || event.button !== 0) return;
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
      return;
    if (event.defaultPrevented === true) return;

    event.preventDefault();
    // history.push(href);
  };
  return <a {...props} onClick={handleClick} />;
};

export { LandingLink };
