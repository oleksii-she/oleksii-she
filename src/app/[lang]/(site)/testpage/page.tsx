"use client";
import { Circles } from "react-loader-spinner";
export default function TestPage() {
  // You can add any UI inside Loading, including a Skeleton.
  //   return <LoadingSkeleton />;

  return (
    <div className="loading-wrapper">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
