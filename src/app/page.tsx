import NoSSR from "@/components/no-ssr";
import App from "./app";

export default function Home() {
  return (
    <NoSSR>
      <App />
    </NoSSR>
  );
}
