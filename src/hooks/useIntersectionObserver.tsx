import { MutableRefObject, useEffect, useState } from "react";

type UseIntersectionObserverProps = {
  threshold?: number;
  root?: any;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
};

type UseIntersectionObserverReturn = { isIntersecting: boolean };

type UseIntersectionObserverType = (
  elementRef: MutableRefObject<any>,
  {
    threshold,
    root,
    rootMargin,
    freezeOnceVisible,
  }?: UseIntersectionObserverProps
) => any;

const useIntersectionObserver: UseIntersectionObserverType = (
  elementRef,
  { threshold, root, rootMargin, freezeOnceVisible } = {
    threshold: 0,
    root: null,
    rootMargin: "0%",
    freezeOnceVisible: true,
  }
) => {
  const [entry, setEntry] = useState<UseIntersectionObserverReturn>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: any) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
};

export default useIntersectionObserver;
