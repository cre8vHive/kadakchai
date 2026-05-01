import { useEffect } from "react";
import { siteSettings } from "../data/store";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${siteSettings.brandName}`;
  }, [title]);
}
