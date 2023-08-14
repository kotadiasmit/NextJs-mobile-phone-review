const Loading = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-20">
      <div className="mt-12 w-4/6 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border border-gray-100 p-6 ">
        <div className="flex flex-col space-y-2">
          <div className="h-6 w-10/12 rounded-md bg-slate-300 "></div>
          <div className="h-6 w-9/12 rounded-md bg-slate-300 "></div>
          <div className="h-6 w-8/12 rounded-md bg-slate-300 "></div>
          <div className="h-6 w-7/12 rounded-md bg-slate-300 "></div>
        </div>
      </div>
      <div className="mt-12 w-4/6 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border border-gray-100 p-6 ">
        <div className="flex flex-col space-y-2">
          <div className="h-6 w-10/12 rounded-md bg-slate-300 "></div>
          <div className="h-6 w-9/12 rounded-md bg-slate-300 "></div>
          <div className="h-6 w-8/12 rounded-md bg-slate-300"></div>
          <div className="h-6 w-7/12 rounded-md bg-slate-300 "></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
