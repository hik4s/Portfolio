import { useEffect, useState } from "react";
export type Route =
  | { kind: "home" }
  | { kind: "case"; id: string; section?: string };
function readRoute(): Route {
  const hash = window.location.hash.slice(1);
  if (!hash.startsWith("case/")) return { kind: "home" };
  const [, id, section] = hash.split("/");
  return { kind: "case", id, section };
}
export function useRoute() {
  const [route, setRoute] = useState<Route>(readRoute);
  useEffect(() => {
    const change = () => setRoute(readRoute());
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  return route;
}
