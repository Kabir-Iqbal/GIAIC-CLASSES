import ParentComponent from "./components/ParentComponent";
import State from "./components/State";

export default function Home() {
  return (
    <main>
      <State />
      <ParentComponent />
    </main>
  );
}
