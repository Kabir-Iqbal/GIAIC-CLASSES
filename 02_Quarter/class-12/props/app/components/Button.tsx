const Button = (props: any) => {
	return (
		<div className='w-full flex items-center justify-center'>
			<button className={`px-4 py-2 ${props.bgColor} text-white rounded-lg`}>
				{props.btnText}
			</button>
		</div>
	);
};
export default Button;
