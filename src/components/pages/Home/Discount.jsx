import React from 'react';

const Discount = () => {
    return (
        <div className='ps-12 mx-auto'>
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden "/> 50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg text-red-700">P7ROBOTICS</span>
			</div>
			<a href="/all-toys" rel="noreferrer noopener" className='btn-gradiant'>Bluk Shop Now</a>
		</div>
	</div>
</div>
        </div>
    );
};

export default Discount;