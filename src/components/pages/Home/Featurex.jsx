import React from "react";

const Featurex = () => {
  return (
    <div className="container px-14 py-16">
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/pwMLLYw/download-57.jpg" alt="" className="https://i.ibb.co/cv99rKB/download-1.jpg h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">Discover Endless Possibilities</h3>
				<p className="my-6 dark:text-gray-400">Immerse Yourself in a World of Limitless Opportunities. Transform the Way You Live with Our Premium Offerings"
"Experience Unparalleled Quality</p>
				<a href="/register" type="button" className="btn-gradiant">Sign Up Now</a>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://i.ibb.co/cv99rKB/download-1.jpg" alt="" className="rounded-lg h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Explore Us</span>
				<h3 className="text-3xl font-bold">Unlock Your True Potential</h3>
				<p className="my-6 dark:text-gray-400">Streamline Your Daily Routine with Smart and Intuitive Solutions, <br />Effortlessly Enhance Your Everyday Life with Seamless Solutions</p>
				<a href="/all-toys"  type="button" className="btn-gradiant">Show All Products </a>
			</div>
		</div>
	
	</div>
</section>
      </div>
  
  );
};

export default Featurex;
