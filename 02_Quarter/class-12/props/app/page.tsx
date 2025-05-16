import Button from "./components/Button";
import ChildComponent from "./components/ChildComponent";

export default function Home() {
	return (
		<div>
			<ChildComponent />
			<Button btnText='Login' bgColor='bg-purple-600' />
			<Button btnText='Logout' bgColor='bg-red-700' />
		</div>
	);
}
