import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type UseIntersectionObserverT = ({
  root,
  rootMargin,
  threshold,
}: Partial<IntersectionObserverInit>) => [
  IntersectionObserverEntry | null,
  Dispatch<SetStateAction<Element | null>>
];

const useIntersectionObserver: UseIntersectionObserverT = ({
  root,
  rootMargin,
  threshold,
}) => {
  const [
    intersectionEntry,
    setIntersectionEntry,
  ] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }
    const intersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };
    observer.current = new IntersectionObserver(
      ([entry]) => setIntersectionEntry(entry),
      intersectionObserverInit
    );

    observer.current.disconnect();
    if (node) observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [node, root, rootMargin, threshold]);

  if (!("IntersectionObserver" in window)) {
    return [{ isIntersecting: true } as IntersectionObserverEntry, setNode];
  }
  return [intersectionEntry || null, setNode];
};

export { useIntersectionObserver };
