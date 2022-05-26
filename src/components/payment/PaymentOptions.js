import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import UPIPayment from './UPIPayment';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function PaymentOptions() {
	const navigate=useNavigate()
	const [open, setOpen] = useState(true);
	const [display,setDisplay]=useState(false)
	const [scan,setScan]=useState(false)
	const delivery=()=>
	{
		setDisplay(true)
	}
	const card=()=>
	{
		setDisplay(false)
		
	}
	const payment=()=>
	{
		display?navigate('/order'):navigate('/pay')
	}
	const upiHandler=()=>
	{
		setScan(true)
		setDisplay(true)
	}
	
  return (
		<>
			{scan && (
				<Dialog open={open}>
					<DialogContent>
						<UPIPayment setOpen={setOpen} />
					</DialogContent>
				</Dialog>
			)}
			<div>
				<div className=" text-xl font-semibold mt-14 text-justify ml-11  ">
					Payment Options
				</div>

				<div className="w-full h-11">
					<div className="text-justify ml-11 mt-8 flex ">
						<div>
							<input
								type="radio"
								name="pay"
								onClick={upiHandler}
								className="flex-none w-14"
							/>
						</div>

						<lablel className="ml-11 flex-initial w-64">UPI</lablel>
						<div className="flex-initial w-10">
							<img
								src="data:image/png;base64,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"
								alt="shampoo"
								className="max-w-xs h-6 ml-32 mb-96 "
							/>
						</div>
						<div className="flex-initial w-10">
							<img
								src="data:image/jpeg;base64,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"
								alt="shampoo"
								className="max-w-xs h-8 ml-32 mb-96"
							/>
						</div>
						<div className="flex-initial w-12">
							<img
								src="data:image/png;base64,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"
								alt="shampoo"
								className="max-w-xs h-8 ml-32 mb-96"
							/>
						</div>
						<img
							src="data:image/png;base64,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"
							alt="shampoo"
							className="max-w-xs h-10 ml-32 mb-96"
						/>
					</div>
				</div>
				<div className="text-justify ml-16">
					<input type="radio" name="pay" />
					<label className="ml-16">Wallets</label>
				</div>
				<div className="text-justify ml-16 mt-5 flex">
					<input type="radio" name="pay" onClick={card} />
					<label className="ml-16">Credit/Debit/ATM Card</label>

					<img
						src="https://freepngimg.com/save/25744-credit-card-visa-and-master-card-clipart/1066x220"
						alt="shampoo"
						className="max-w-xs h-8 ml-56 "
					/>
				</div>
				<div className="text-justify ml-16 mt-2">
					<input type="radio" name="pay" />
					<label className="ml-16">Net Banking</label>
				</div>
				<div className="text-justify ml-16 mt-4">
					<input type="radio" name="pay" onClick={delivery} />
					<label className="ml-16">Cash on Delivery</label>
				</div>
				<div className="text-right mr-24 mt-36">
					<button
						onClick={payment}
						className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4  rounded hover:scale-125 transition ease-in-out duration-1000"
					>
						{display ? 'Place order' : 'Continue'}
					</button>
				</div>
			</div>
		</>
	);
}

export default PaymentOptions